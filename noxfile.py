import os
import tempfile
from pathlib import Path

import nox


CI = os.environ.get('CI') is not None

ROOT = Path('.')
PYTHON_VERSIONS = ['3.11']
PYTHON_DEFAULT_VERSION = PYTHON_VERSIONS[-1]

nox.options.default_venv_backend = 'venv'
nox.options.stop_on_first_error = True
nox.options.reuse_existing_virtualenvs = True

# In CI, use Python interpreter provided by GitHub Actions
if CI:
    nox.options.force_venv_backend = 'none'


def run_readable(session, mode="fmt"):
    session.run(
        'docker',
        'run',
        '--platform', 'linux/amd64',
        '--rm',
        '-v', f'{ROOT.absolute()}:/data',
        '-w', '/data',
        'ghcr.io/bobheadxi/readable:v0.5.0@sha256:423c133e7e9ca0ac20b0ab298bd5dbfa3df09b515b34cbfbbe8944310cc8d9c9',
        mode, 'docs/**/*.md',
        external=True,
    )


@nox.session(name='format', python=PYTHON_DEFAULT_VERSION)
def format_(session):
    run_readable(session, mode="fmt")


@nox.session(name='sync', python=PYTHON_DEFAULT_VERSION)
def sync(session):
    """Render the Notion handbook tree into docs/ and attachments/ and format it.

    Requires NOTION_TOKEN and NOTION_HANDBOOK_ROOT in the environment.
    """
    root = os.environ.get('NOTION_HANDBOOK_ROOT')
    if not root:
        session.error('NOTION_HANDBOOK_ROOT is not set')
    session.run('npm', 'ci', '--prefix', 'notion_sync', external=True)
    # Export to a scratch dir and swap it in only after the export fully
    # succeeded, so a mid-crawl failure cannot leave docs/ deleted or partial.
    # The paths must be absolute: `npm run --prefix` chdirs into notion_sync/.
    # docs/ and attachments/ must stay siblings: the rendered links bake in
    # that relationship.
    scratch = Path(tempfile.mkdtemp())
    session.run(
        'npm', 'run', '--prefix', 'notion_sync', 'sync', '--',
        root, str(scratch / 'docs'), str(scratch / 'attachments'),
        external=True,
    )
    # Both dirs are generated-only; stale content must not survive a sync.
    session.run('rm', '-rf', 'docs', 'attachments', external=True)
    session.run('mv', str(scratch / 'docs'), 'docs', external=True)
    session.run('mv', str(scratch / 'attachments'), 'attachments', external=True)
    run_readable(session, mode="fmt")
