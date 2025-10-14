# Code (& general development) conventions

This document describes the conventions we follow when writing code.
We don't follow them blindly, but we do follow them unless there's a very good reason not to.

### 7 Django cookiecutter template

New Django projects must use the template. Any exceptions must be discussed with the team beforehand.

We use an internally-developed [cookiecutter template](https://github.com/reef-technologies/cookiecutter-rt-django/) for our Django projects. When we start a new project, the template empowers us to immediately focus on the core of the business problems instead of spending time on set-up tasks. It also provides a common base of libraries, dev-ops tools and conventions that Reef developers are familiar with. Over time, we improve the template - we update dependencies, add new features, fix issues. Therefore, it is important not only to start new projects using the template but also to port template updates to existing projects.

#### Cookiecutter template for packages

We also have a template for packages: [cookiecutter-rt-pkg](https://github.com/reef-technologies/cookiecutter-rt-pkg)

#### Automatic-updates of the cookiecutter template

When the template changes - for example to fix a bug - we use Github Actions and cruft to automatically create pull-requests to update projects based on the template. See the [cookiecutter-rt-django](https://github.com/reef-technologies/cookiecutter-rt-django/) repo for more information.

## Code Conventions

### 1NF

Described [here](https://en.wikipedia.org/wiki/First_normal_form).
We break it when doing advanced indexing, but we adhere to 1NF until we can't get the desired result using basic indexing.

### DRY

Described [here](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).
We adhere to it pretty closely, you won't find much of copied code in our repos (with one notable exception, it's a long story).

### SOLID

Described [here](https://en.wikipedia.org/wiki/SOLID).
We follow the first 5, not sure about the others.

### CUPID

Described [here](https://dannorth.net/2022/02/10/cupid-for-joyful-coding/).
Not as well known as the others.

### git commit message formatting

Described [here](https://chris.beams.io/posts/git-commit/).
There are many such conventions, but this is the one we use.
It's pretty straightforward.

### git rebase and editing commit history

Best to rebase to current master before creating PR, and then you CAN rebase to master only **after CR** is finished.
When using GitHub you MUST NOT force push commits your PRs before getting final Code Review approval, as it will force reviewer to start from scratch during next CR round.

Since we allow rebasing, before you branch someone's feature branch, you need first confirm with them that they are not going to any more edits to git history.

### Making things resilient to failures in general

<https://blog.cloudflare.com/pipefail-how-a-missing-shell-option-slowed-cloudflare-down/>

### SemVer 2

Described [here](https://semver.org/spec/v2.0.0.html)

### isort style import sorting

Described [here](https://pycqa.github.io/isort/docs/configuration/custom_sections_and_ordering.html)

### Type hints

Described [here](https://docs.python.org/3/library/typing.html).
We try to use it at least for all new public functions.

### Docstrings for everything public

As above - it should be possible to use stuff without reading its code.
We follow [PEP257](https://peps.python.org/pep-0257/) for docstring conventions.

### PEP8

<https://peps.python.org/pep-0008/>

### Trailing commas on multiline statements

See [here](https://stackoverflow.com/a/17492103/1935381).
We skip it after `**kwargs` as no argument will ever follow it.

### keepachangelog

<https://keepachangelog.com/>

### Safe shell settings

<https://sipb.mit.edu/doc/safe-shell/>

Shell options should be set with explicit `set` (or, `shopt`) built-in command, not in the shebang, to ensure they are always set.
When options are set in the shebang of a script, they are ignored when the script is directly invoked (like `bash script.sh`).

### Celery

https://blog.gitguardian.com/celery-tasks-retries-errors/

We use [Celery](https://docs.celeryq.dev/) in most of our projects. The article above describes how to make Celery tasks more resilient with best practices to prevent workflow interruptions and handle various failure scenarios.

### SemBr

Use [Semantic Line Breaks](https://sembr.org/) whenever line breaks do not influence rendered document.

### TODOs should be linked to Issue Tracker

Each comment containing todo note should start with Jira issue key (or GitHub `#123` equivalent), e.g. `# TODD JIRA-123 move this to Settings class`.
TODOs without issue key are not allowed to be merged into main branch.

### Copying Code

Always mention the license of the source code which is copied.

### Package naming (package, repository, etc.)

For consistency, use exactly the same package name, written using `kebab-case`, everywhere (e.g. github repo name, PyPI dist name).
Use exactly same name, but with `_` instead of `-` for package name in Python code and other place where `-` is not allowed.

### Don't use stuff from forbidden technology list without prior discussion

See the next section

## Restricted patterns / forbidden technologies

Whenever someone would like to use a pattern listed below, we have decided that they will get an opinion from a design reviewer **before** writing the code.
The restricted technologies are:

1. Django GFK (generic foreign key)
2. Django signals (please note that `transaction.on_commit()` hook is NOT a signal)
3. Writing to `self.__class__`.
   As with any global state modification, it makes code hard to follow.
4. `atexit.register()` (use `try: ... finally: ...` instead)
5. Defaults for environment variables in `settings.py` (all defaults should be defined in `dev/.env.template` and `prod/.env.template`)
   This prevents misspells, as application will simply error out on start with simple to debug error.
   This also means, we won't have different default values (one in settings.py, one in `env.template`) which would make things more confusing.
6. Always use `BIGINT` for primary key field, for performance and scalability reasons.

All of those technologies have their uses in good cases, but what we found is that often the alternative is more elegant, so in order to limit the amount of rewritten code, in those cases we choose to review the design before implementation.
Design review is generally welcome and can save a lot of time, but in this case we have unanimously agreed it will be mandatory.

See also:
<https://github.com/reef-technologies/python-review-zoo/>
