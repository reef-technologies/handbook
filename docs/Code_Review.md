# Code Review

This document covers the rules of code review at Reef Technologies.

<details>
<summary>Why is this document so long, so many rules? (click here to see more details)</summary>
We had our way of doing things which didn’t need to be described for us, but in early 2025 we noticed that new engineers
joining our team tend to bring in code review habits from their previous workplace. When we put it like that,
it doesn’t sound so bad, but it caused some friction and has shown us really terrible ways in which some companies
tend to operate. We wrote this document for newcomers so that they can smoothly transition into our culture.
As with every policy, if something is bad and you care about it enough, feel free to bring it up on S3
and the governance process, operating in front of you and with you, will decide whether to change (most likely yes).
</details>

## When/how to request a code review

1. If you are a developer, always perform basic functional testing (manually!) of your code and self-review your PR
   before you give it to a peer for review, ensure that CI passed and that the PR fully resolves all of the requirements
   specified in the ticket. <details><summary>Why?</summary>If you won’t do that, then inevitably you’ll end up
   submitting review requests which bounce for silly reasons. It is important for us to avoid that as such behavior can
   negatively impact the mutual respect senior developers should have for each other.</details>
2. The developer who needs their code reviewed posts to the `#review` channel on Slack with a `@here`,
   `@engineering-team-1` or `@engineering-team-2` mark, the project name as shown in Hubstaff, a todo name (in order to
   make time reporting super easy for the reviewer), and a link to the PR. Slack automatically attaches the title of the
   pull request to the message.
3. Sometimes it doesn’t make sense to request reviews for trivial changes – if you think no one would have anything
   useful to comment on, just merge it.
4. If no one has started reviewing your code before the daily standup, you must ask for a reviewer during the daily.
5. When using GitHub and someone has already started reviewing your PR, don’t force push commits to your PRs before
   getting final approval, as it will force the reviewer to start from scratch during the next review round. Create new
   commits instead, like “Fix XYZ”, “Add tests”. <details><summary>Note.</summary>This is a limitation of GitHub and a
   primary motivator to consider moving development off to gitlab / gerrit, though as of writing this document we have
   not decided to switch.</details>

## How to review

1. In order to minimize delays, in most cases reviews should be prioritized above other duties. A developer should pick
   up a code review request upon a flow break (see below), unless engaged in a highest-priority task, such as a critical
   bug fix. <details><summary>What’s a “flow break”?</summary>
   By flow break we understand a moment in work such as:
   
    * Starting the day
    * Finishing a task
    * Finishing a (non-tiny) meeting
    * Getting back from lunch

   or any event which causes a developer to unload the context of a task from their mind. We are a performance-conscious
   bunch. We don’t obsess over work performance, but “multi-tasking” is the top 1 reason for performance degradation
   which can absolutely decimate the output level of software developers, so ignoring it would be foolish. There’s a
   link to an incredible lecture from ABE 2016 in [training](../training.md), check it out if you haven’t
   already.</details>
2. Any team member may review any PR – there is no preference as to who should do that. By “team member” we mean a
   member of the same engineering team, although sometimes it may be any staff member.
3. When you start a review add a reaction to the author’s message: 👀 (`:eyes:`) – “I am reviewing your code
   now”. <details><summary>Why?</summary> This is a locking mechanism which prevents multiple developers from reviewing
   the same PR at the same time. Technically the reviewer should wait a second or two after reacting and make sure that
   the number of eye reactions is still 1.</details>
4. Only one developer should review each PR posted to the `#review` channel (unless there is an explicit call for more
   reviewers). Therefore, if someone has already posted the eyes emoji, other staff members should ignore the post and
   carry on with their work.
5. If there is a change that is up to taste, the reviewer should refrain from suggesting it. If there is no concrete
   gain from the change (and maybe others prefer the way of the author, so we don't really know which is better), then
   it's better not to spend the energy on a discussion and just accept the code as is. We call it “the author's
   preference”.
6. Reviewers can merge pull requests that they approve. If the author doesn’t want that, they should mark the pull
   request as “WIP”.
7. After you finished reviewing someone’s code, react to the review request with ✅ (`:white_check_mark:`) – “I have
   reviewed your code” (warning: it only means “review is finished” and NOT “code is ready to be merged”).

## The things reviewers should check for

Note: not all of these apply to all PRs, of course.

1. Whether CI passed.
2. Does the PR do several unrelated things? <details><summary>Why is this important?</summary>In some products it's
   better to have a feature per PR because if you'll have to roll something back, and it's glued together to a bunch of
   other stuff in a massive PR, that'll increase the recovery time after failed deployment by orders of
   magnitude.</details>
3. Is the code doing the correct thing?
4. Does the code do the thing in the correct way?
5. Does it handle corner cases properly?
6. Is it appropriately tested?
    1. Unit tests
    2. Integration tests
    3. System/end2end tests
7. Is it appropriately documented?
    1. Docstrings
    2. Comments
    3. `README.md`
    4. `docs/`
    5. Notion
8. Is maintainability taken care of appropriately?
    1. Logs
    2. Metrics (system events, business metrics, Prometheus series)
    3. Dumping / preserving data for investigation (whether in database or S3 or otherwise)
9. Is refactoring necessary? (Doesn't have to be done in the same PR – can be deferred to a ticket or a subsequent PR)
10. Security:
    1. Can someone hack it?
    2. Can someone exploit the changes to perform a DoS attack?
11. Usage of [Forbidden Technology](Code_conventions.md#restricted-patterns--forbidden-technologies).
12. Performance / memory considerations. Will it OOM in a corner case after the change?
13. Self-healing. If a (network, HDD) device or a part of the system breaks temporarily, will the rest of the system
    recover automatically or will it require manual intervention?

## How to resolve the reviewer’s comments

1. The author of the PR must take all review comments into consideration, but as a senior engineer, they are expected to
   make a decision on how to address them.
2. If it's a typo or a trivial change, ideally the reviewer will post a suggestion (a special GitHub feature) and the
   author will apply these in bulk. Then the author (not the reviewer) should resolve the comment.
3. If the reviewer suggests a big change or a major design change, put your 🎹 away and go talk to each other on a video
   call, use an online whiteboard, pair programming, AI etc. Surely two senior developers can figure it out between
   themselves.
4. If it's a controversial change, the author might propose a different way, leave the comment unresolved and maybe even
   tag the reviewer to see it again. (Only if it has to be the same person – otherwise not tagging is better because the
   next round of review can be done by somebody else.)
5. If a reviewer has a preference that is sort of inconsequential, but the code is so ugly, that they’d go in after this
   PR is merged and fix it, then the reviewer should comment and request the change. In this case if the author doesn't
   really care whether it's written this way or the other, they should just accept it and we all move on. On the other
   hand, if it's a conflict and both engineers insist upon writing it their way, escalate to some kind of authority –
   another senior developer, a team leader, that sort of thing. Not AI.
6. If the author addressed all of the reviewer’s comments, and they don’t feel the need for someone to look at the code
   again, they can merge their PR. Otherwise, they should request a second round of review by posting a message on
   Slack – it may be because the requested changes were non-trivial or because they’d like someone to take another look.
7. If more rounds of review are needed, they can be done by different developers. It may help catch bugs or look at the
   code from a different perspective.
