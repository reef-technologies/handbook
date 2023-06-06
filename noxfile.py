import os
from pathlib import Path

import nox


CI = os.environ.get('CI') is not None

ROOT = Path('.')
PYTHON_VERSIONS = ['3.9']
PYTHON_DEFAULT_VERSION = PYTHON_VERSIONS[-1]

nox.options.default_venv_backend = 'venv'
nox.options.stop_on_first_error = True
nox.options.reuse_existing_virtualenvs = True

# In CI, use Python interpreter provided by GitHub Actions
if CI:
    nox.options.force_venv_backend = 'none'


@nox.session(name='format', python=PYTHON_DEFAULT_VERSION)
def format_(session):
    session.run(
        'docker',
        'run',
        '--rm',
        '-v', f'{ROOT.absolute()}:/data',
        '-w', '/data',
        '-u', f'{os.geteuid()}:{os.getegid()}',
        'ghcr.io/bobheadxi/readable:v0.5.0@sha256:423c133e7e9ca0ac20b0ab298bd5dbfa3df09b515b34cbfbbe8944310cc8d9c9',
        'fmt', '**/*.md',
    )
