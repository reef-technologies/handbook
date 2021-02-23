# Active agreement - Sociocracy 3.0 - What is this about?

We use the Sociocracy 3.0 decision making process to give control over the environment to the company staff. They might choose, which sometimes they do, to use that power to change how the company works. That, in turn, might increase their happiness. This mechanism works surprisingly well. 

Below you can find all our active agreements at the company. All of them were co-created by company staff members.

## Communication channels

At Reef Technologies, we mainly use the following communication channels:
- Slack,
- Phone calls,
- Text messages (SMS).

Every developer needs to specify whether they prefer to be called or texted first in case they’re not available on Slack and a colleague needs to get in touch.

All developers are supposed to have their contact preferences displayed publicly on their Slack profile:
- “phone -> SMS” – for people who want to be called first and texted later*.
- “SMS -> phone” – for people who wish to be texted first and then called.

All staff members must respect the preferences of their colleagues.

* It is acceptable for people who want to be called first to reject the call and wait for a text message.

## Review channel

The #review channel on Slack is where we request code reviews and perform them for other developers whenever needed.

We use the following procedure for the code review process:

1. The developer who needs their code to be reviewed posts a @here mark, the project name as shown on Hubstaff, a todo name, and the code to the #review channel.

The general structure of the review request is:

@here https://github.pr.link
`Hubstaff project name` :: `Todo name`

If a developer spots a review request not following this structure (missing some information), they should reply with `Please follow the review request structure`. This is an agreed upon gentle reminder, that carries no criticism or hard feelings.

2. Other team members may react to the message in the following ways:
- :thumbsdown: downvote emoji – “I am busy and cannot help you right now”,
- :eyes: eyes emoji – “I am reviewing your code now”,
- :white_check_mark: green check emoji – “I have reviewed your code”.

Developers should also take into consideration the following rules:

- Code reviews for other staff members are seen as important, and, in most cases, they should be prioritized above other duties. A developer should only ignore a code review request if engaged in a highest-priority task such as a critical bug fix or finishing up a project for an upcoming deadline.
- Only one developer should perform a code review for each code snippet posted to the #review channel. Therefore, if someone has already posted the eyes emoji, other staff members should ignore the post and carry on with their work.
- Any team member may review any post – there is no preference as to who should do that.
- Each post is a separate review round, so any developer may respond, even if they did not review the previous iterations. 
- It is recommendable for different developers to look at the subsequent iterations of the same code, as it may help catch bugs or look at the code differently.
- If a staff member realizes that everyone has refused to review a post, they should escalate the issue and discuss it with the team.


## Maintaining organizational culture

The Reef Technologies Culture Book is a shared journal where we document company life, recording the most interesting events, challenges, solutions and decisions. It has been regularly updated since 2017, and it serves as a company chronicle that allows staff members to develop a common perception of the organization’s culture.

Staff members are encouraged to share their own stories in the Culture Book. If someone believes that a recent event is a good example of “how things are done over here”, they should either describe it themselves or tell the story to the company content writer who will then include it in the Culture Book.

New and present company members alike are welcome to read the Culture Book and get a feel for what they can expect from the organization: how we deal with challenges, solve problems, and make decisions. 

As new members spend more time at the company, they may come up with their own stories to tell… which will be read by a yet newer member in the future. The cycle continues, and we all gain a better understanding of the values we want this company to present.

## Bug zoo

There is no way to prevent bugs altogether, but we’d rather avoid repeatedly coming across the same ones. That is why we decided to create the [Bug Zoo](https://github.com/reef-technologies/python-review-zoo/) – a repository for the most common or interesting bugs that have occurred at the company. 

The Bug Zoo is a useful resource that allows experienced staff members to quickly redirect colleagues to an explanation when they see a bug that they had already dealt with at some point in the past. 

When a Reef Technologies developer encounters a bug that fits this description, they should propose changes to the [Bug Zoo repository](https://github.com/reef-technologies/python-review-zoo/) and describe the bug and an appropriate solution.

## Opensource contributions

Sometimes we encounter a bug or a missing feature in an opensource package that we use in one of our projects. We then face a choice: should we fix the bug or implement a change and push it upstream, or should we do whatever is needed on a private fork?

There are a few things to consider:
- who do we bill? Intellectual property usually goes to the client, but in this case, we would do some work for the client and then release the IP to an upstream vendor. Is our client okay with this?
- if we do the change on a private fork, the patch maintenance will not be taken over by the upstream maintainer and may later become a problem for the client
- sometimes, it can take a lot of time and effort to convince a stubborn maintainer to accept a PR
- if we are going to push it upstream, we may want to review the PR internally before submitting it
- if we decide to use a private fork, it might be necessary to fix the same issue twice on two different projects. There are two problems here: firstly, we are allergic to waste, and secondly, this may create an IP problem
- having a few opensource contributions to show to a prospective client can be useful during the sales process

As you can see, it might be tricky to figure out which path is right for any given scenario. The solution is simple, just don't do it on your own :) Always ask the person who is in charge of the relationship with the client to take care of it and let you know the final decision. That's one of the reasons we have someone in that role for every project. This also allows for other solutions such as, for example, splitting the cost of a fix between two clients, discounts etc - something you couldn't do on your own. Fortunately, with a dedicated client contact person, you don't have to!

## Fast track decisions via Slack instead of standard Sociocracy approach

At Reef Technologies, we mostly make decisions in our weekly Sociocracy meetings. The standard Sociocracy framework for proposing changes is a useful tool, but we admit that it can be time-consuming. Additionally, in some cases, a staff member may not want to wait for the Sociocracy call.

The fast-track approach for decision-making allows staff members to propose “small changes”, such as minor operational improvements on the #sociocracy channel on Slack. Everyone is invited to cast their votes through upvoting (:thumbsup:) or downvoting (:thumbsdown:)  the message.  If no one objects to the proposal within 24 hours, it becomes a new active agreement.


## 24h format

Some staff members mentioned that the 12-hour clock led to unnecessary confusion. As we are an international company and we live in different time zones, it can be doubly problematic. Thus, we decided to always use the 24-hour standard (the so-called “military time”) to minimize misunderstandings.

## Joking in company meetings

We want the company environment to be friendly and allow for joking around in good humor. However, we realize that due to cultural differences or a slip of the tongue, someone may make a joke that is offensive to another staff member. If such a situation occurs, we take the following steps:
- The person who feels that something offensive has been said reacts by saying: “Hey, that was inappropriate”.
- The author of the offensive comment says: “I’m sorry”, no matter their opinion on whether what they said was actually offensive or not.
- Nobody else speaks up or tries to defend either party.
- We take a few seconds to reflect on what just happened and then immediately return to whatever topic we were discussing before.

This solution is meant to allow the team to auto-calibrate and recognize what comments other members may see as offensive without unnecessary discussions on delicate subjects.

If the offensive comment is seen as severe and above the grade of this agreement, it will be raised to the HR circle to decide on further steps. Fortunately, so far, there have been no such situations.

## Audio/video processing in Zoom calls

It is not allowed to use audio or video processing in company Zoom calls. The only exception to this rule is the active noise cancellation function, which staff members may use freely.

## Hardware co-funding

All senior staff members of Reef Technologies may receive co-funding for hardware, up to 50% of the value of the hardware and up to $1024 per two years. The 50% of company ownership passes to the staff member after two years of full-time work, with full-time defined as 30 hours per week.

Two years of full-time work is equivalent to 2568 hours according to the following assumptions:
- 250 days is the average amount of working days per year.
- 26 days is the average amount of vacation days.
- 10 days is the average amount of unpaid sick days off.
- 6 hours is the average amount of hours worked per day, so 30 hours per week.

2 * (250 – 26 – 10) * 6 hours = 2568 hours

The hardware co-funding policy is explained in more detail below:
- All senior staff members of Reef Technologies have the right to request co-funding for up to 50% of the value of hardware deemed necessary for work, such as a laptop, a headset, a monitor, a mouse, a keyboard, etc. The maximum amount of co-funding is $1024 net. The amortization is calculated linearly according to the hours worked, rounded to the nearest dollar.
- The hardware is never returned to Reef Technologies. In all cases, it remains with the individual.
- All tracked hours count, it doesn’t matter whether the senior staff member logged them to a commercial project or an internal project such as our Sociocracy or Weekly Status calls.
- The hours are calculated as per the number of hours tracked in the Hubstaff time tracker.
- The total number of hours worked by all senior staff members may be stored in a GoogleDocs spreadsheet. Senior staff members may request to be informed of their current hour total by a virtual assistant.
- If a senior staff member on trial period requests hardware assistance, they will be assigned the company hardware that is currently available. After the trial period, the senior staff member is welcome to use the co-funding policy to buy the hardware of their own choice.
- A Reef Technologies member that requests hardware co-funding will include an appropriate sum in their invoice the same month they make the request – for example by $1024 if the hardware cost $2048. That amount will then undergo amortization, see example situations.

### Example situation 1:

So far, John has tracked 264 hours working for Reef Technologies. When he first joined the company, he requested the largest possible amount of co-funding and bought hardware for $2048, which means he received an additional $1024 net on his first invoice.

Now, John decides to terminate his contract with Reef Technologies. Given the above information, John’s last invoice will be reduced by the following amount:
(2568 hours – 264 hours ) / 2568 hours * $1024 = 0.897 * $1024 = $918.53, rounded up to $919

### Example situation 2:

Mary has tracked 264 hours working for Reef Technologies and she plans to continue working for the company. She wonders how much of hardware co-funding is already amortized in her case – or, in other words, how much money she can spend on hardware that will already be 100% hers.

Given the number of hours that she has tracked so far:
264 hours / 2568 hours * $1024 = 0.103 * $1024 = $105.47, rounded up to $105.

Given that the company refunds up to 50% of the hardware cost, Mary may now buy hardware worth up to $210. She will receive up to $105 co-funding from the company. The hardware will instantly belong to her 100%. The cost has already been amortized by the hours she had tracked for Reef Technologies.

As a senior Reef Technologies staff member, you are eligible to use the services of a personal assistant. The assistant may do the necessary research, make a list of top hardware models for you to choose from, find a good online shop that is available in your country and have the appropriate equipment delivered to your address.

## Training and upskilling

At Reef Technologies, we support the development of our staff members in the following areas:

### Organized events

When a Reef Technologies staff member participates in an event such as an industry-themed conference or a visit to a client’s office, the company refunds transportation, accommodation, and food costs.

If the staff member attends a conference, the company also covers or refunds the cost of the entry fee. 

In case the staff member opts for active participation in an event, such as giving a speech, working in a client’s office, or having a face-to-face meeting with a client, the company also remunerates the staff member according to the hours tracked and the standard hourly rate.

### Self-development

When a staff member needs to learn a new skill for a specific project, they need to bill that time to the client as a separate task on Hubstaff (i.e., “Learning Kubernetes”). They are also required to inform Paweł before the end of that week, as he needs to check if he should discount the client for the training time.

We have all agreed that it would be artificial and stifling to have a fixed, Hubstaff-tracked time budget for regular upskilling. When a staff member wants to learn a new technology out of their own interest, they should inform Paweł about it. He can then take it into account when looking for new projects and try to create an opportunity to learn the requested skill while working for a client.

We all love what we do and enjoy upskilling and self-development, so staff members are also encouraged to expand their knowledge in their free time. That effort is also compensated, but indirectly – through periodic hourly rate adjustments, which currently happen in November.
