We've observed that usually the projects we work on can be classified into one of five maturity (quality?)
levels.
We list them below so that they can be referred to if needed.

1. One-off throw-away script (like in 5-tasks)
2. A script, but with some comments and maybe a couple classes, with argparse instead of sys.argv, so that it can be used again in a few months or shared with a coworker
3. A proper basic application.
   Classes, config reader, installation instructions in readme.
   Can be deployed as a prototype on production, but probably has horrible maintainability, so not recommended long-term
4. Something designed for long-term production use.
   Some tests, logs, troubleshooting instructions, backup/restore scripts, maybe some CI/CD, some support built into the app to easily troubleshoot end-user issues
5. Full enterprise - documentation, CI+CD, multiple classes of tests (unit, integration, end2end), versioning policy, contributor guide
