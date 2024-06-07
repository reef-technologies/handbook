#!/usr/bin/env python3
import subprocess
import json
import os


def to_clipboard(text):
    process = subprocess.Popen(["xsel", "-bi"], stdin=subprocess.PIPE)
    process.communicate(text.encode("utf-8"))


def main():
    hubstaff_cmd = os.environ.get("HUBSTAFF_CLI", "hubstaff_cli")
    hb_status = json.loads(subprocess.check_output([hubstaff_cmd, "status"], text=True))
    gh_pr = subprocess.check_output(
        [
            "gh",
            "api",
            "search/issues?sort=updated&q=is:pr+author:@me",
            "--jq",
            '.items[0].pull_request.html_url + " " + .items[0].title',
        ],
        text=True,
    )
    msg = f"@here `{hb_status['active_project']['name']}`::`{hb_status['active_task']['name']}`\n{gh_pr.strip()}"

    print(f"Message copied to clipboard:\n{msg}")
    to_clipboard(msg)


if __name__ == "__main__":
    main()
