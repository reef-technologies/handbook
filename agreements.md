# Active agreement - Sociocracy 3.0 - What is this about?

We use the Sociocracy 3.0 decision making process to give control over the environment to the company staff.
They might choose, which sometimes they do, to use that power to change how the company works.
That, in turn, might increase their happiness.
This mechanism works surprisingly well.

Below you can find all our active agreements at the company.
All of them were co-created by company staff members.

## Communication channels

At Reef Technologies, we mainly use the following communication channels:

- Slack,
- Phone calls,
- Text messages (SMS).

Every developer needs to specify whether they prefer to be called or texted first in case they’re not available on Slack and a colleague needs to get in touch.

All developers are supposed to have their contact preferences displayed publicly on their Slack profile:

- “phone -> SMS” – for people who want to be called first and texted later\*.
- “SMS -> phone” – for people who wish to be texted first and then called.

All staff members must respect the preferences of their colleagues.

- It is acceptable for people who want to be called first to reject the call and wait for a text message.

## Review channel

The `#review` channel on Slack is where we request code reviews and perform them for other developers whenever needed.

We use the following procedure for the code review process:

1. The developer who needs their code to be reviewed posts a `@here` mark, the project name as shown on Hubstaff, a todo name, and a link to the PR on the `#review` channel.

The general structure of the review request is:

> @here <https://github.pr.link> `Hubstaff project name` ::
> `Todo name`

If a developer spots a review request not following this structure (usually missing some information), they should reply with `Please follow the review request structure` and react with ❌ (`:x:`).
This is an agreed upon gentle reminder, that carries no criticism or hard feelings.

2. Other team members may react to the message in the following ways:

- 👋 (`:wave:`) – “I cannot help you right now”,
- 👀 (`:eyes:`) – “I am reviewing your code now”,
- ✅ (`:white_check_mark:`) – “I have reviewed your code” (warning: it only means "review is ready to be read" and NOT "ready to be merged"),
- 🔒 (`:lock:`) – “I don't have permission to access this project”.

Developers should also take into consideration the following rules:

- Code reviews for other staff members are seen as important, and, in most cases, they should be prioritized above other duties.
  A developer should only ignore a code review request if engaged in a highest-priority task such as a critical bug fix or finishing up a project for an upcoming deadline.
- The reviewer should track the time it took them to do the review on the project and todo indicated in the review request.
- Only one developer should perform a code review for each code snippet posted to the `#review` channel.
  Therefore, if someone has already posted the eyes emoji, other staff members should ignore the post and carry on with their work.
- Any team member may review any post – there is no preference as to who should do that.
- If your PR wasn't marked with 👀 or ✅ before daily standup, you must pick Code Reviewer during the daily.
- Each post is a separate review round, so any developer may respond, even if they did not review the previous iterations.
- It is recommendable for different developers to look at the subsequent iterations of the same code, as it may help catch bugs or look at the code differently.
- If a staff member realizes that everyone has refused to review a post, they should escalate the issue and discuss it with the team.
- The Author of the PR must take all Code Review comments into consideration, but as a Senior Engineer, they are expected to make a decision on how to address them. 
- Reviewer MAY use https://conventionalcomments.org/ for clarity which comments are blocking or should be treated differently.

## Alerts channels

The various "alerts" channels receive issue messages from running deployments.
In order to prevent alert blidness, each time new alert message appears it should be reacted to, i.e. resolved or silenced. 
Each channel has assigned people (in the monkey registry) resposible for checking alerts appearing in them at least once per their workday. 

Similarly to the code review channel, when reviewing an alert please following emoji reactions:
- 👀 (`:eyes:`) – “I am looking at this right now”,
- ✅ (`:white_check_mark:`) – “Issue resolved”,

Staff members should to periodically skim through the alerts channels and do a quick checkup on their state.
It should be easy to spot channels that are neglected, i.e. without any reactions or just 👀, but no resolutions.

## Maintaining organizational culture

The Reef Technologies Culture Book is a shared journal where we document company life, recording the most interesting events, challenges, solutions and decisions.
It has been regularly updated since 2017, and it serves as a company chronicle that allows staff members to develop a common perception of the organization’s culture.

Staff members are encouraged to share their own stories in the Culture Book.
If someone believes that a recent event is a good example of “how things are done over here”, they should either describe it themselves or tell the story to the company content writer who will then include it in the Culture Book.

New and present company members alike are welcome to read the Culture Book and get a feel for what they can expect from the organization:
how we deal with challenges, solve problems, and make decisions.

As new members spend more time at the company, they may come up with their own stories to tell… which will be read by a yet newer member in the future.
The cycle continues, and we all gain a better understanding of the values we want this company to present.

## HR Circle

At any organization, sensitive and critical HR decisions sometimes need to be made with privacy, care, and discretion.
To handle these complex matters in Reef Technologies, we have established a HR Circle - a sub-group within the wider "root" Sociocracy circle, staffed by those few of us who have the necessary level of experience to not just do the right thing, but to do it the right way.

The HR Circle is endowed with specific authorities:

- **Termination of Staff Members**:
  The HR Circle has the authority to terminate any staff member at its sole discretion, with the exception of the Sociocracy Circle members, unless special conditions apply.
- **Termination of Sociocracy Circle Members**:
  The HR Circle may also terminate a Sociocracy Circle member, but only in urgent situations, such as sabotage, theft, gross violation of the terms of legal agreement etc.
  The decision must be explained to the Sociocracy Circle afterward.

### Notes:

- While the Sociocracy Circle does not need to be involved in the decision-making process for terminating a staff member, the HR Circle may consult with them if there is uncertainty or concern about potential reactions.
- If a Sociocracy Circle member's (non-urgent) termination is being considered, they are allowed to be present in the discussion.

## Bug zoo

There is no way to prevent bugs altogether, but we’d rather avoid repeatedly coming across the same ones.
That is why we decided to create the [Bug Zoo](https://github.com/reef-technologies/python-review-zoo/) – a repository for the most common or interesting bugs that have occurred at the company.

The Bug Zoo is a useful resource that allows experienced staff members to quickly redirect colleagues to an explanation when they see a bug that they had already dealt with at some point in the past.

When a Reef Technologies developer encounters a bug that fits this description, they should propose changes to the [Bug Zoo repository](https://github.com/reef-technologies/python-review-zoo/) and describe the bug and an appropriate solution.

## Opensource contributions

Sometimes we encounter a bug or a missing feature in an opensource package that we use in one of our projects.
We then face a choice:
should we fix the bug or implement a change and push it upstream, or should we do whatever is needed on a private fork?

There are a few things to consider:

- who do we bill?
  Intellectual property usually goes to the client, but in this case, we would do some work for the client and then release the IP to an upstream vendor.
  Is our client okay with this?
- if we do the change on a private fork, the patch maintenance will not be taken over by the upstream maintainer and may later become a problem for the client
- sometimes, it can take a lot of time and effort to convince a stubborn maintainer to accept a PR
- if we are going to push it upstream, we may want to review the PR internally before submitting it
- if we decide to use a private fork, it might be necessary to fix the same issue twice on two different projects.
  There are two problems here:
  firstly, we are allergic to waste, and secondly, this may create an IP problem
- having a few opensource contributions to show to a prospective client can be useful during the sales process

As you can see, it might be tricky to figure out which path is right for any given scenario.
The solution is simple, just don't do it on your own :) Always ask the person who is in charge of the relationship with the client to take care of it and let you know the final decision.
That's one of the reasons we have someone in that role for every project.
This also allows for other solutions such as, for example, splitting the cost of a fix between two clients, discounts etc - something you couldn't do on your own.
Fortunately, with a dedicated client contact person, you don't have to!

## Fast track decisions via Slack instead of standard Sociocracy approach

At Reef Technologies, we mostly make decisions in our weekly Sociocracy meetings.
The standard Sociocracy framework for proposing changes is a useful tool, but we admit that it can be time-consuming.
Additionally, in some cases, a staff member may not want to wait for the Sociocracy call.

The fast-track approach for decision-making allows staff members to propose “small changes”, such as minor operational improvements on the `#sociocracy` channel on Slack.
Everyone is invited to cast their votes through upvoting (:thumbsup:) or downvoting (:thumbsdown:) the message.
If no one objects to the proposal within 24 hours, it becomes a new active agreement.

## 24h format

Some staff members mentioned that the 12-hour clock led to unnecessary confusion.
As we are an international company and we live in different time zones, it can be doubly problematic.
Thus, we decided to always use the 24-hour standard (the so-called “military time”) to minimize misunderstandings.

## Joking in company meetings

We want the company environment to be friendly and allow for joking around in good humor.
However, we realize that due to cultural differences or a slip of the tongue, someone may make a joke that is offensive to another staff member.
If such a situation occurs, we take the following steps:

- The person who feels that something offensive has been said reacts by saying:
  “Hey, that was inappropriate”.
- The author of the offensive comment says:
  “I’m sorry”, no matter their opinion on whether what they said was actually offensive or not.
- Nobody else speaks up or tries to defend either party.
- We take a few seconds to reflect on what just happened and then immediately return to whatever topic we were discussing before.

This solution is meant to allow the team to auto-calibrate and recognize what comments other members may see as offensive without unnecessary discussions on delicate subjects.

If the offensive comment is seen as severe and above the grade of this agreement, it will be raised to the HR circle to decide on further steps.
Fortunately, so far, there have been no such situations.

## Constructive feedback

We aim to maintain a positive work environment where feedback is given constructively to promote improvement.
To manage situations where feedback may seem nonconstructive, we will use the following procedure:

- If someone feels that feedback is overly negative or aggressive towards any staff member, they should say:
  “Could you please rephrase your concern in a more constructive way?”
- The person who provided the feedback should then respond with:
  “Sorry” and rephrase their feedback in a more constructive manner.
- We take a brief moment to reflect on the request and response, then continue with the discussion.

### Example 1

- Person A: “This solution is crap. I can break it in one day!”
- Person B: “I don't understand. Could you please rephrase your concern in a more constructive way?”
- Person A: “Sorry. I am worried this design has some vulnerabilities that someone could exploit. How can we make sure that this does not happen?”

### Example 2

- Person A: “This is obvious. Anybody above the age of 6 knows this!”
- Person C: “Hey, Person B put some work into this. Could you rephrase your feedback in a more constructive way?”
- Person A: “Sorry. My concern here is that we should write only things that are not obvious and not generic. Otherwise, this won't provide much value.”

## Audio/video processing in Zoom calls

Using audio or video processing in company Zoom calls is generally not allowed,
with the following exceptions:

1. Active noise cancellation.
2. Blurred backgrounds.

This policy aims to minimize distractions during calls.
We've observed that certain video effects, especially those used without a green screen or with loose hair, can cause flickering and partially obscure participants' faces.

## Equipment co-funding

See the new [Equipment Funding Policy](https://github.com/reef-technologies/handbook/blob/master/equipment_funding.md)

## LLM tool use & funding

Each Reef Technologies senior staff member is eligible to receive company-funded LLM service subscription (e.g. GitHub Copilot, ChatGPT Plus).
The subscription is paid by Reef Technologies for entire time it is being used it for any tasks related to Reef Technologies projects.
Please make sure the subscription is terminated if you don't need it anymore to prevent license waste.

Please note, while our default contract with clients allows use of LLMs, make sure to check with a project manager before using LLM on any particular project.
As of mid 2023 every client has approved LLMs except one that is still considering it.
As for work done for Reef Technologies internal projects, you are free to use LLMs as you see fit.
In all cases you are responsible for quality of your work, regardless if LLM was used to produce it or not.

## Training and upskilling

At Reef Technologies, we support the development of our staff members in the following areas:

### Organized events

When a Reef Technologies staff member participates in an event such as an industry-themed conference or a visit to a client’s office, the company refunds transportation, accommodation, and food costs.

If the staff member attends a conference, the company also covers or refunds the cost of the entry fee.

In case the staff member opts for active participation in an event, such as giving a speech, working in a client’s office, or having a face-to-face meeting with a client, the company also remunerates the staff member according to the hours tracked and the standard hourly rate.

### Self-development

When a staff member needs to learn a new skill for a specific project, they need to bill that time to the client as a separate task on Hubstaff (i.e., “Learning Kubernetes”).
They are also required to inform Paweł before the end of that week, as he needs to check if he should discount the client for the training time.

We have all agreed that it would be artificial and stifling to have a fixed, Hubstaff-tracked time budget for regular upskilling.
When a staff member wants to learn a new technology out of their own interest, they should inform Paweł about it.
He can then take it into account when looking for new projects and try to create an opportunity to learn the requested skill while working for a client.

We all love what we do and enjoy upskilling and self-development, so staff members are also encouraged to expand their knowledge in their free time.
That effort is also compensated, but indirectly – through periodic hourly rate adjustments, which currently happen in November.

## Establishing $1024/monthly/staff member budget for operational mistakes

### a. If operational mistakes made by staff member:

- cost the company less than 1024 USD in the given month AND,
- our CFO confirms that it was not fraud,
- if it is the first mistake of the given type made by that staff member,

CEO will have a "please do not make the same mistake again" conversation with the staff member and the company absorbs the cost.

### b. If operational mistakes made by staff member:

- cost the company more than 1024 USD in the given month OR,
- CFO cannot confirm if it was fraud or not OR,
- if it is another mistake of the same type made by the same staff member,

we will decide how to proceed during S3 in a separate decision.

If a mistake is not due to an accident, but negligence (like violating NDA, fraud, Working Agreement or other established procedure that we have), then the policy above does not apply (because customers can sue the company for damages and usually some legal agreement defines the way we handle such cases).

## Immediate need to buy something

If you need some things to continue work and they are <= $64, for example a domain, a temporary server, cloudflare paid account or some SaaS, just buy it, tell CFO and put that cost on the invoice at the end of the month.
Even if CEO will be against the expense, he'll absorb the cost rather than see you block on some silly thing.

## Company's time tracker agreement

Reef Technologies pays only for the time which is tracked by company's time tracker.

## Absence notice periods

We empower our staff to manage their working schedule and allow flexibility.
With great power comes great responsibility.
If you want to take some time off, please remember that it is very important respect others and give them a reasonable notice period to manage any hand-offs.
The sooner you inform others about any planned absence the better for the team.

## Billable online team-building activities

We recognize the importance of team building, especially in a remote work environment.
To foster stronger connections among our staff, we've implemented the following policy:

- Each staff member can bill up to 4 hours of billable time for online team-building activities each month.
- These include online games, learning together or other non-work-related team activities.
- The time needs to be tracked via Hubstaff under the `BAC / remote team building` project.

This policy aims to create opportunities for informal interaction and relationship-building among team members, which we believe contributes to a better work environment.

## Referral fee $2048 for Senior Python Developer

"If you as the staff member has contacted us with a potential candidate who passed the evaluation period and tracked at least 168h work later, referral fee will be paid for you - $2048".
