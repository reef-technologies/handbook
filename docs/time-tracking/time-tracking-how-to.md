Please start by reading all the information about the time tracker in our [handbook](https://github.com/reef-technologies/handbook#time-tracking).
Below are the time-tracking rules, co-created by company staff members.

# Projects

If you're working on a project, bill all your time to it — knowledge gathering, environment preparation, programming, LLM prompting, meetings, emails, design, track it all.
If you need to learn a framework, library, or language to deliver value, bill that learning to the project; if it took a long time, mention it to the PM and they'll make sure it's billed fairly (they may, for example, discount the client for that week).
This depends on contract terms and is generally a tough call, but don't worry about it — that's what PMs are for.
They have the tools and procedures to deal with such issues efficiently.
If you think contributing to an open-source project first (to fix a bug or add a feature) would help deliver better value, talk to the PM on that project first.

Before we formally define what a project is, let's introduce an intuitive distinction.
When working, you’re always:

1. working on a particular project;
2. on a call (not exclusive with 1);
3. doing some general Slack/email reading, task organizing (figuring out what to do now, what's blocked, what's highest value right now)

For number 2, if it's a planned, repeating call, the invite should include a tracker link (one of the awesome convenience features!).
If it doesn't, add it (you'll know how to do that pretty shortly after starting to use the tracker).
If it's an ad-hoc call, figure out which project it concerns (you'll learn).

For number 3, there is a project called "Communication".
It even has a task named "**communication, reading Slack, organizing"** for that very reason.

For number 1:
either you're working on a project named XYZ (and you're aware of it) or you're doing one of the two:
security training, team building session (both of these have dedicated projects in the tracker).
In case of a project: track a task.
Our time tracker is integrated with Jira and YouTrack (engineers use YouTrack, RA use Jira), so there should be no problem with that.
Plus, each project, regardless of whether it's imported from Jira, YouTrack, or created "natively" in the tracker, has a general-purpose task called "**General discussions, planning, other non-task work**"**.** Plus, you can always create ad hoc tasks in the tracker, for all projects (including the imported ones).

So what is a project in the context of time tracking?
It's a collection of tasks, with rules of billing (which client, how to treat internally, etc.).
As a general rule, we try to keep the number of "native" projects in the tracker to a minimum (mostly communication, security training, team building, stuff that really has no place in Jira/YouTrack) and manage projects in the respective issue tracker.
The reason is:
it makes access management simple (users of the tracker see the projects they are assigned to in issue trackers).

So, when you're on a call with someone, what should you track?

1. you're having a discussion/design session about a particular feature/task?
   track that task (this applies to everybody involved)
2. you're having a discussion/design session about some project in general?
   track "**General discussions, planning, other non-task work"** of that project.
3. you're having a discussion with somebody about something very general?
   track something in the "Communication" project
4. it's a daily/planning meeting - track the task for that type of meeting.
   If you cannot find it, ask somebody or create it (fix as you go!).
5. it's a daily/planning and it pivots into a longer discussion (possibly with a smaller crowd) about something particular - see points 1-3.
6. You've realized you should have switched the tracker a while ago?
   You can always edit the tracked time, if the time is significant (multiplied by the number of participants), but also, no project's budget is gonna collapse from 3 mistracked minutes.

### Self-development

When a staff member needs to learn a new skill for a specific project, they need to bill that time to the client as a separate task in the tracker (i.e., “Learning Kubernetes”).
They are also required to inform the project manager before the end of that week, as he needs to check if he should discount the client for the training time.

We have all agreed that it would be artificial and stifling to have a fixed, tracked time budget for regular upskilling.
When a staff member wants to learn a new technology out of their own interest, they should inform Paweł about it.
He can then take it into account when looking for new projects and try to create an opportunity to learn the requested skill while working for a client.

We all love what we do and enjoy upskilling and self-development, so staff members are also encouraged to expand their knowledge in their free time.
That effort is also compensated, but indirectly – through periodic hourly rate adjustments, which currently happen in June and December.

### FAQ

- **Why do I see every task in a project, not just "mine"?** Because tracking time to a task that's assigned to somebody else is quite a common thing.
  Review, collaborative discussions, etc.
  are examples of such occurrences.
- **Why should I use the desktop app?** It works offline (caches the tracked time and reconciles with the server once connectivity comes back), takes screenshots from all of your screens and tracks activity.
- **Why is the desktop app tracking activity?** To display a popup saying “you’ve been idle for a long time, did you forget to stop the tracker?”.
  Activity tracking does not leave your machine.
- **Are screenshots visible to anybody else?** No, they’re stored only on your own machine only.
- **So what are the screenshots for?** So you can fix any mistracked time.
  For this reason, using the desktop app is generally mandatory.
  It’s okay to use the webapp on your phone if you’re on a call and outside, but under normal circumstances, use the desktop app.
- **What is the purpose of "keep taking screenshots even when i'm not tracking" setting?** So if you start working and forget to hit "start tracking", you can reliably find your way around it
- **Can I change my tracked time once it's saved?** Sure, just make sure to change it before the end of the month.
  If you do it afterwards, make sure to notify the CFO.
  Some client projects have weekly billing, take that into account.
- **The app is nice but doesn't help me with getting to know how much I've worked this week or this month.** That's not a question, but here's the answer:
  <https://grafana.timas.reef.pl/d/timas-my-time/timas-e28094-my-tracked-time?orgId=1&from=now%2Fw&to=now%2Fw&timezone=browser&var-tz=Europe%2FWarsaw>
- **What are "mine" and "common" tasks?** In the context of time tracking, they are merely labels, no sort of access management is assigned to them.
  "Mine" mostly come from 3rd party issue trackers (Jira/YouTrack) and "Common" is for marking general use tasks, like meetings and communication.
  Common tasks cannot be assigned to a single user (can never appear as "mine" to anybody).
- **I'm not seeing some projects, what do I do?** Reach out to your team lead, your contact in the company or whoever is online.
- **Can I create tasks in the time tracker for projects from Jira/YouTrack?** yes
- **What happens if I move a task in Jira/YouTrack between projects?
  What happens to the tracked time?** Gets moved as well, as it should.
- **We've just talked about starting a new sorta kinda thing that sounds a little bit like a project, but nobody explicitly created a project for that in YouTrack, should I just track "RT Internal"?** No, and it's actually prohibited to even think about doing that.
  Create the project yourself.
  Ask Notion AI if you don't know how.
  Fix as you go. This is our joint effort.
  Don't be an organizational leech, contribute to the organizational capacity.
- **So that means one GitHub repo = one project in YouTrack = one project in the time track?** Nnnnyes. Sometimes yes, but it's not a hard rule.
  For convenience or historical reasons, we sometimes create projects like "internal observability" that cover maintaining our Sentry AND Prometheus instances (separate instances).
  Sometimes some developments for these tools.
- **A note about LLMs:** Track the time you spend writing prompts, reviewing responses, and otherwise actively working with an LLM.
  It’s fine to keep the timer running while waiting briefly for a response—for example, around 30 seconds—when pausing would be impractical.
  However, if the LLM is working for a longer period and you have nothing else to do for the project, stop the timer or switch to another task.
  Use reasonable judgment:
  short waits are part of the work, but extended unattended processing time is not.
- **I’m making myself a cup of coffee, do I stop the tracker?** if you spend the whole time thinking about your task or discussion, it's okay to leave the timer on; if you spend the time on other activities, stop it.
- **Real-life example:** Luke is prompting for a project.
  He sees Andrew asked something in `#random` about Luke's earlier post.
  Luke's reply is a simple yes or no that doesn't take much thinking, so he doesn't stop the timer — but he remembers not to answer such messages too often (like every 5 minutes), or his productivity will drop.
- **Another real-life example:** Same as above, but this time Luke's answer is a few paragraphs about his favorite board game genre, so he stops the timer.
  If the discussion were about a code review or internal procedures instead, he'd switch the timer to the appropriate project.
- **You can't concentrate because someone is messaging you every 5 minutes — "should I really stop the timer every 5 minutes for 15 seconds to reply?":** tell them you're at work and can talk later, or take a break, stop the timer, and discuss what you need.

### Advanced

This section contains explanations of how the time between various projects is billed to clients, split between internal and non-internal projects and so on.
It's not meant for all users of the tracking system, it's managed by team leaders, management and the financial team.
We include this explanation here for transparency and encapsulation (it has to be somewhere, probably best to put it here where the rest of tracking-adjacent rules are).

#### Budget groups

It's a name of a client, a client's budget bucket, or an internal initiative which budget we want to track separately of others.
It's a budget group.
We need this to allow for grouping and allow engineers to create new projects when necessary, hassle-free, no guilt, no remorse, no angry CFO saying he doesn't know how to charge the client now because before there was only a project called "Small rubber band make v7000" and now there are two projects named "Small rubber band maker v7000" and "Small rubber band tester v13".

Each project points to at most 1 budget group.
This relation is managed in TiMaS admin, never overwritten by issue tracker integrations.
There is a report for leaders etc.
so they know there are actively used projects with no budget group assigned.

The CFO maintains the budget group list together with the team leaders, to have clarity on what gets billed to whom.

#### Internal projects

We charge clients for hours billed to their projects directly.
"Their" being established by budget groups.
But various internal projects are a hidden cost to client projects, which needs to be taken into account in financial analyses.

Some of our "internal" projects are also treated like client projects in this regard, meaning they may be an investment, a POC, an early product development that we may or may not monetize.

So, for this reason, projects can be given a distribution setting:

1. don't distribute - for "end" projects, billed directly to client, internal product
2. across team - communication etc., projects which are a cost to all "end" projects worked on by that team's members
3. across division
4. across company - sociocracy, CFO's work, other forms of management.
   These projects' times are a cost to the whole company

To calculate the hidden man hour costs for all projects, we need a bit of configuration:

who belongs to which team (and since when; until when), which project belongs to which team (and since when, until when).
Knowing that, we can calculate "how many hours of distributed project X should be appointed as hidden cost of non-distributed project Y" for each X and Y. This happens proportionally to hours spent on non-distributed projects by a given unit (team or division).
