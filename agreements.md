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

- 👎 (`:thumbsdown:`) downvote emoji – “I am busy and cannot help you right now”,
- 👀 (`:eyes:`) – “I am reviewing your code now”,
- ✅ (`:white_check_mark:`) – “I have reviewed your code”,
- 🔒 (`:lock:`) – “I don't have permission to access this project”.

Developers should also take into consideration the following rules:

- Code reviews for other staff members are seen as important, and, in most cases, they should be prioritized above other duties.
  A developer should only ignore a code review request if engaged in a highest-priority task such as a critical bug fix or finishing up a project for an upcoming deadline.
- The reviewer should track the time it took them to do the review on the project and todo indicated in the review request.
- Only one developer should perform a code review for each code snippet posted to the `#review` channel.
  Therefore, if someone has already posted the eyes emoji, other staff members should ignore the post and carry on with their work.
- Any team member may review any post – there is no preference as to who should do that.
- Each post is a separate review round, so any developer may respond, even if they did not review the previous iterations.
- It is recommendable for different developers to look at the subsequent iterations of the same code, as it may help catch bugs or look at the code differently.
- If a staff member realizes that everyone has refused to review a post, they should escalate the issue and discuss it with the team.

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

At any organization, sensitive and critical HR decisions sometimes need to be made with privacy, care, and discretion. To handle these complex matters in Reef Technologies, we have established a HR Circle - a sub-group within the wider "root" Sociocracy circle, staffed by those few of us who have the necessary level of experience to not just do the right thing, but to do it the right way.

The HR Circle is endowed with specific authorities:

- **Termination of Staff Members**: The HR Circle has the authority to terminate any staff member at its sole discretion, with the exception of the Sociocracy Circle members, unless special conditions apply.
- **Termination of Sociocracy Circle Members**: The HR Circle may also terminate a Sociocracy Circle member, but only in urgent situations, such as sabotage, theft, gross violation of the terms of legal agreement etc. The decision must be explained to the Sociocracy Circle afterward.

### Notes:

- While the Sociocracy Circle does not need to be involved in the decision-making process for terminating a staff member, the HR Circle may consult with them if there is uncertainty or concern about potential reactions.
- If a Sociocracy Circle member's termination is being considered, they are allowed to be present in the discussion.

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

## Audio/video processing in Zoom calls

It is not allowed to use audio or video processing in company Zoom calls.
The only exception to this rule is the active noise cancellation function, which staff members may use freely.

The reason we decided to make this policy was that it was distracting for some people.
We also noticed that poor video processing without green screen and with loose hair causes flickering and it often hides half of someones face behind the virtual background.
This also happens with blur.

## Hardware co-funding

All staff members of Reef Technologies have the right to request co-funding for up to 50% of the value of hardware deemed necessary for work, such as a laptop, a headset, a monitor, a mouse, a keyboard, etc.

Co-funding conditions for senior engineers:

- up to 50% of the value of the hardware up to $1536 net per two years.

Co-funding conditions for everyone else:

- up to 50% of the value of the hardware up to $512 net per two years.

The reason for this difference is that software engineering generally requires significantly more computing power than other types of tasks.

Two years of full-time work is equivalent to 2568 hours.

All tracked hours count, it doesn’t matter whether the staff member logged them to a commercial project or an internal project such as our Sociocracy or Weekly Status calls.

The hours are calculated as per the number of hours tracked in the Hubstaff time tracker.
Staff members may request to be informed of their current hour total by a virtual assistant.

A Reef Technologies member who requests co-funding for hardware they need to perform their work will be sent the equipment by the company.

The hardware is bought by Reef Technologies and belongs to the company until its value has decreased either by 50% or by the maximum co-funding value ($1536 or $512).

In reality, the benefit of using this policy amounts to more than 50% of the hardware's original value.
By the time you purchase it from Reef Technologies, you will be charging a higher hourly rate and inflation will have likely further devalued the amount you need to pay for the hardware.
All that after getting to use some nice gear at no immediate cost in the meantime.

After the value of the hardware meets one of the two conditions, the staff member gains ownership by purchasing the hardware from Reef Technologies at its current price (50% of the initial price or initial price less maximum co-funding value).

The hardware is never returned to Reef Technologies.
In all cases, it remains with the individual.

If a staff member on trial period requests hardware assistance, they will be assigned the company hardware that is currently available.
After the trial period, the staff member is welcome to use the co-funding policy to buy the hardware of their own choice.

The hardware will belong to Reef Technologies until its value has decreased either by 50% or by the maximum co-funding value ($1536 or $512).

### Example situation 1:

John works for Reef Technologies as a Senior Python Engineer.
When he first joined the company, he requested to be supplied with a laptop that cost $3000. Reef Technologies purchased it and had it delivered to John.

After about two years, the assistant tasked with tracking the value of Reef Technologies hardware noticed that the average value of a two-year-old used laptop that John has been using has fallen to $1500 – 50% of the initial price of $3000.

At this point, John was issued an invoice by Reef Technologies to pay $1500 in order to purchase the laptop.
John paid the $1500 and the ownership of the laptop passed on to him.

### Example situation 2:

Patrick works for Reef Technologies as a Remote Executive Assistant.
When he first joined the company, he requested to be supplied with a laptop that cost $800. Reef Technologies purchased it and had it delivered to Patrick.

A few months in, Patrick realized he also needed a vertical mouse and requested for Reef Technologies to get him one at the cost of $100.

Patrick could do that because:

- the co-founding value for a laptop that costs $800 is $400
- the maximum co-founding value that a Remote Executive Assistant can receive is $512 per two years
- Patrick still has $112 of co-founding value available at this point in time
- the co-founding value of a mouse that costs $100 is $50, which is less than $112

After about a year, the assistant tasked with tracking the value of Reef Technologies hardware noticed that the average value of a one-year-old used laptop that Patrick has been using has fallen to $400 – 50% of the initial price of $800.

At this point, Patrick was issued an invoice by Reef Technologies to pay $400 in order to purchase the laptop.
Patrick paid the $400 and the ownership of the laptop passed on to him.

A year later, the value of the mouse was down to $50, so Patrick was issued an invoice by Reef Technologies to pay $50 in order to purchase the mouse as well.
Patrick paid the $50 and became the owner of the mouse.

Two years already passed since Patrick had first requested to get a laptop.
Thus, his available co-founding value returned to the original value of $512.

As a senior Reef Technologies engineer, you are eligible to use the services of a personal assistant.
The assistant may do the necessary research, make a list of top hardware models for you to choose from, find a good online shop that is available in your country and have the appropriate equipment delivered to your address.

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

## Referral fee $2048 for Senior Python Developer

"If you as the staff member has contacted us with a potential candidate who passed the trial period and tracked at least 168h work later, referral fee will be paid for you - $2048".
