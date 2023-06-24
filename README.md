# Introduction

Welcome onboard!
This document will help you prepare your development environment step-by-step.

# Foundation rules of the company

This should have been covered during your interview, but it is very important, so here is a reminder.

## Core values

- Happy clients
- High-quality code in the repository

That's it.
It may be surprising that there is no "happy employees" entry on the list.
That is because we don't assume that we know what makes people happy.

We use the Sociocracy 3.0 decision-making process to give control over the environment to the company staff.
They might choose, which sometimes they do, to use that power to change how the company works.
That, in turn, might increase their happiness.
This mechanism works surprisingly well.

Here you can find a list of [active agreements](agreements.md).

## Deadlines and estimates

A developer working on a project **must never** discuss deadlines or give estimates (even rough) to a client.
We have project managers for that. Why?

As it turns out, developers are usually overly optimistic in their estimates.
They are also good people, at least the ones that we hire, so when a client politely asks if a developer can help them, the developer will usually agree.
Delivering on such a promise is problematic and often stressful for everyone involved.

This is where project managers come in.
They're particularly skilled at risk management, reducing the scope to what is really needed, etc.
Also, they enjoy talking to clients.
Therefore, we let them take responsibility for the deadlines - they take care of developers' availability, risks, scheduling, and so on.
This way everyone is happier.
Just to make it clear, if a developer ever provides an estimate or a deadline, it is considered to be invalid.
The clients know this too, so they shouldn't ask and you shouldn't reply - just redirect them to a project manager or tell them you'll contact the project manager yourself and produce an accurate estimate as soon as possible.

EDIT after 4 years:
this rule served us really well, the only missed deadlines we had were caused by catastrophic unavailability of staff (due to a medical emergency, for example)

## Projects

We avoid fixed-scope projects.
The reason why is that we want to focus on the creation of software and not on amending contracts.

We will not accept a project targeted to manipulate people, to rip people off, or put their savings at risk, such as insurance+retirement funds.

## Workspace safety / security

The relatively high security level we maintain allows us to work for financial institutions and, in general, institutions that treat their security seriously.
Funny story:
Pawel talked to a bank once about a potential contract, and they wanted him to work on-site due to security concerns.
So, Pawel described our security model, and when he finished, an engineer from the bank said, "They have more security at their homes than we have at the office!"
The manager looked at the engineer and was not happy.
;)

UPDATE: A fully encrypted laptop of our senior developer has been stolen from his bag while he was on a train, returning from a conference in late 2017. Spooky.

### Encryption

All data pertaining to the company and its clients must be either stored in the cloud (specifically, Google Drive/Docs/Sheets within the company domain)
or on encrypted media (an encrypted volume or drive).
This excludes data categorized as being of no value or already publicly available.

This encryption mandate applies to all, except:
- software developers in the first phase of their trial period who work solely with mock data
- software developers who are solely dedicated to open-source projects, which happens infrequently

Every staff member, including virtual assistants, is required to use encrypted devices.
This might initially appear daunting, but rest assured that setting up encryption is a straightforward process.
Our top recommendation is Full Disk Encryption (FDE), a method that encrypts the entire disk for comprehensive protection.
FDE can be facilitated during native OS installation or within a virtual OS installation.

It's crucial to note that merely encrypting your home directory, i.e., your personal files, is not sufficient nor typically feasible.
Practical issues, such as system performance, backup difficulties, and user experience implications often hinder this approach. 
More importantly, Docker images, which may contain client code,  are typically stored outside of the home directory. 
Solely encrypting the home directory would leave these sensitive data vulnerable. 

The tools to achieve FDE on various systems include:
- Windows: Use BitLocker in conjunction with a Trusted Platform Module (TPM) for built-in FDE.
- MacOS: FileVault 2, Apple's built-in disk encryption program, uses XTS-AES-128 encryption with a 256-bit key to deter unauthorized access to the startup disk.
- Linux: Linux Unified Key Setup (LUKS) is the Linux standard for disk encryption.
The `cryptsetup` utility allows creation and management of LUKS-encrypted volumes.
LUKS can be combined with Logical Volume Management (LVM) to create flexible encrypted volumes.

In situations where FDE isn't feasible or practical, VeraCrypt serves as our preferred tool for encrypting individual files, folders, or volumes.
It's ideal for creating encrypted file containers or encrypting non-system partitions and drives.
A simple tutorial on VeraCrypt can be accessed [here](https://github.com/reef-technologies/handbook/blob/master/docs/VeraCrypt.md).

Our preference for FDE arises from its ability to securely store Docker images, potentially containing client code, outside your home directory.
Please note, on Linux systems, the boot partition might not always be encrypted, but this is considered acceptable.

You should have an email account within the reef.pl domain.
If your role involves dealing with encrypted data, this email address and any associated accounts must be used exclusively within a secure environment, such as a virtual machine or dual-boot system.
This ensures a clear segregation between your professional and personal digital spaces, preventing accidental cross-access or data leaks involving customer data.

Note that accessing your personal digital spaces (such as private Gmail, Facebook, etc.) is permissible when done from a fully encrypted system,
but this should be done responsibly and without compromising work-related security protocols.

Lastly, Docker containers, which store and run client code, are to be considered secret.
Accessing these containers from personal systems or environments is prohibited to maintain a robust security structure,
preventing any potential cross-access and preserving the integrity of our client's data.

### 2FA

2FA is mandatory everywhere it is possible to use it (more explanation below).
We recommend Twilio's [Authy](https://authy.com/) because it has a PIN code and end-to-end encrypted cloud backup.

Frequently Asked Questions:

Q: Who does the 2FA rule apply to?
\
A: Everyone. It's in the contract, BTW.

Q: Will the client pay for the time spent on configuring 2FA?
\
A: Happily.

## What does "high performance" mean?

Our clients really don't care how fast we type on our keyboards (in fact while on meetings we often don't touch the keyboard for a long time, getting a clean zero keystrokes per hour, delivering not only a very high amount of value per hour, but also infinite value per keystroke!
;) ).

We employ several techniques to output a lot of value in a unit of time:

1. Cut the backlog.
   Typically on the first meeting with the client, 80-85% of the backlog is ~~removed~~ pushed into a "future" version.
2. Re-use open-source things rather than write everything from scratch.
3. Set up a new system with monitoring, error management, dh params, deployment, etc., in one hour.
   We don't like that part of the project, so we invest in automation to minimize its impact.
4. Design systems in such a way that they are easy to think about and implement.
5. Design systems in such a way that they are durable and, whenever possible, self-healing.
6. We prefer candidates who are not an order of magnitude slower than others.
   For example, a program that reverts a small file can take a minute to implement, but some of our candidates need more than 10 minutes.
   Someone might have a problem with this, but we just don't hire the slowest developers on the market.
7. If there is doubt on whether something should be done or not, we stop and ask.
   This theoretically increases Time To Market, but in practice, it only does so for the last task of the iteration (so a hint for planning is that the last task in the iteration should be low-risk).
8. We are allergic to waste.
   This drives many of our actions, including good communication with the client who knows what must be done.
   While some software houses lose \~30% of their performance (due to miscommunications, etc.), we stay way below 1% (the exact number is hard to measure when the amount of waste is so low).
9. Use modern IDEs.
10. Use LLMs (ChatGPT, GitHub Copilot, Amazon CodeWhisperer, etc.).

# Time-tracking

This guide will show how to set up a time tracking app.

It is not needed for recruitment assignments, unless specified otherwise.

It is needed for trial period assignments.

## Sign in to your new email account

The first step you need to take is to sign in to your new Google account at `reef.pl`.
All the necessary information, including credentials, have been sent to your personal email address.

**Caution!**

If you qualify for an encrypted VM, you should sign in for the first time from the host computer, as it is necessary to install the time-tracking application.
This is the one and only situation when you are allowed to log in from your host machine.

**Caution, again!**

You have to set up 2-factor authentication within 24 hours from the first successful login, or the security policy will cut you off.
It's best to set it up right after you perform the initial login.
If you forget to do it, we'll need to ask the domain admin to disable 2FA enforcement on the whole organization for a couple of days.
Please do not forget :)

## Time tracking app

We use an application that measures the time you spend at work and takes regular screenshots.
The first step in preparing your work environment is to install it.

To avoid any issues with screenshot-grabbing and keep consistency across users, please install the tracker on your ***host*** machine.
Please install it and then accept the invitation that you received on your email address.

You can download the application here:
[Hubstaff Tracker](https://app.hubstaff.com/download)

If you ever wonder how Hubstaff calculates the activity levels, here is a handy link to [their documentation](https://support.hubstaff.com/how-are-activity-levels-calculated/) (not that anyone looks on it, calls have 0% activity and we do them a few times per week, this metric is a bit impractical).

Here you can find [time-tracking rules which were co-created by company staff members](time-tracking-how-to.md).

### I CAN SEE YOU

As it turns out, people usually find this document before they sign a contract with us and before their tracker account is created.
Then they decide to work on their environment even before they have access to the tracker.
If you are one of those people, please, track the time you spend on setting the encrypted partition, virtual machine etc, so that you know how much time it took and so that we can compensate you for this time as soon as you get access to the official company tracker.
For example, you can use the free [toptracker](https://www.toptal.com/tracker/).
We really, really don't like it when people work for us but are not getting paid for it.

UPDATE after 2 years or so:
nobody seems to actually track it, but now that we have more data, we know it takes approximately 90 minutes to set everything up, so in worst case we can compensate them based on that average value.

### RT / RTO projects

Below you can find the list of RT (Reef Technologies) projects alongside with their descriptions.
The descriptions tell you where you should bill your RT time on Hubstaff.
RT generally means "investment", RTO generally means "operations".

| Project                                  | Description                                                                                                                                                                                                                                             |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RT / content marketing                   | Write articles or blog posts under the company name and present the company to the outside world.                                                                                                                                                       |
| RT / django cookiecutter template        | Develop our internal Django template.                                                                                                                                                                                                                   |
| RTO / internal infrastructure management | Manage workspace setup, including creating encrypted partitions, installing virtual machines, and installing software **not tied to specific projects**. If it's related to any internal or external project then please bill the time on that project. |
| RT / non-project meeting                 | Participate in phone calls and Slack conversations related to work but not directly project-related. These are very rare, almost non-existent.                                                                                                          |
| RTO / virtual assistant                  | Organize and procure equipment and supplies needed in the company, including laptops and office supplies, or perform other virtual assistant tasks.                                                                                                     |
| RT / other internal development          | Improve internal infrastructure, such as onboarding, training, or other company-related activities that might benefit others.                                                                                                                           |
| RT / security training                   | Complete mandatory security training for all staff (and client staff too) to harden against fraud and hackers.                                                                                                                                          |
| RTO / sales                              | any pre-work needed to be done **before** the contract is signed with a client                                                                                                                                                                          |
| RTO / nurturing client relationship      | Discuss upcoming projects with existing clients OR, theoretically, after-sales support on a fixed price project (we haven't had any since like 2019 and the guarantee expired already on these).                                                        |
| RTO / recruitment                        | Actively recruit other people.                                                                                                                                                                                                                          |
| RT / recruitment                         | Improve the recruitment process.                                                                                                                                                                                                                        |
| RTO / sociocracy meeting                 | Participate in sociocracy meetings and engage in related discussions on the channel.                                                                                                                                                                    |
| RT / sociocracy development              | Contribute to sociocracy development as a tuner.                                                                                                                                                                                                        |
| RTO / status call                        | Attend weekly RT status calls.                                                                                                                                                                                                                          |
| RT / special assignment from CEO         | Work on special assignments from the CEO as specifically requested. Extremely rare. Typically used to do something that must be done where we don't want to create a new project for a one-time thing.                                                  |
| RTO / onboarding                         | Go through training materials during the onboarding phase ([training](training.md)).                                                                                                                                                                    |
| OTHER / just-in-case                     | Work on a project before being officially assigned to it (if needed). Notify management to re-bill the time later to the appropriate project.                                                                                                           |

### Non-RT projects

If you are working on any external project for a client, you should bill all your time spent on this project onto it.
Knowledge gathering, environment preparation, actual programming, meetings or design.
If you need to learn a framework, library or language in order to deliver value for the project, bill the learning to that project as well.
If it took you a long time to learn a new skill, please mention it to our PM on that project - depending on the terms of the contract, a client may be eligible for a discount and it is the responsibility of the PM to manage that (but they won't be able to do their job well if you won't ever tell them anything ;) ).

#### TODOs

Using Hubstaff TODOs only takes seconds to get right, and there are a few reasons why we use it:

1. On longer contracts, sometimes the client would like to get an understanding of the cost of a particular feature when building another one in the future.
   Specifying which feature we are working on allows for easy aggregation of the time spent on its development, and that allows the client to plan the future of their products to maximize the value.
2. One time, we had a client who replaced a vendor with us, and they did not charge the user of the system for fixing the errors made by the previous vendor.
   Fair billing between our client and the user of the system was only possible because we logged the time appropriately.
3. Sometimes we make a deal with a client to buy a module we've built for them and open-source it, so that we can use it in the future.
   Ideally, we'd predict that a module will be reusable before starting to work on it, but sometimes that comes as a hindsight.
4. Sometimes a client decides to start a new company after something we've built becomes a success, and in order to properly settle the development costs between the old client company and the new client company, we need to be able to make a report out of it.
5. In Poland, in some tax accounting modes, there are different rates for development phases such as design, implementation, sysadmin work, and coordination.
   Billing a feature and its development phase allows you to pay the proper taxes properly.

## Why we use a time tracker

It may seem weird, but actually RT is not the only consulting business out there.
Traditionally lawyers bill their clients per hour and nobody blinks an eye :) Also a language teacher, therapist and nanny often bills like that.

In fact, many software houses nowadays bill their clients by the hour.
In consequence, the income generated by a staff member is (almost) directly proportional to the amount of hours they spend working on the client projects (ok it's a big simplification because how sales activity is organized, but I don't want to digress here).
Now unfortunately in the age of remote work (especially after the pandemic when everyone thinks they can work remotely) it's regrettably clear that some people can concentrate on their work much better than others.
What I mean is that while some people can output 35 hours per week of focused work, other people can only output 10-12h. It would not be totally fair to compensate both of those groups equally, right?

In the end, it doesn't matter much - if you get paid by the hour, you do a certain amount of those hours in a year, and then it's either divided equally into 12 installments or proportionally to the amount of work done in a given billing cycle.
Assuming you earn at least slightly more than you spend and that you have some kind of a financial buffer, at the end of the year, you'll end up with the same amount.
In 2022Q2 we tried to open a position for a "full-time" engagement with a fixed monthly payment model (which would automatically bonus people who perform well to make it fair, sort of like a liquidity pool)... But nobody was really interested, so we took the job ad down.

### So that we put ourselves in the right mindset

Let me tell you a story.

One of our staff members worked from a room on the top floor of his 3 story house.
A few times per day he wanted to get some tea 🍵, but the kitchen was downstairs, so he stopped the time tracker, walked down the squeaky wooden stairs, got to the kitchen, filled up the kettle, prepared a cup and a teabag while waiting for the kettle to boil the water, poured the hot water into the cup and waited for a few minutes for the tea to brew.
He then removed the teabag from the cup and slowly walked up 3 flights of stairs.
Started the timer and got back to work (well, sort of - that entire activity distracted him, so he needed to reload the task which he was working on to his short-term memory before he could do actual development).

Later that day he has taken a look at his time log and realized he spent 15min on a tea break.
It was not a very relaxing type of activity (trying not to burn himself with a hot liquid while going up ~~stairs~~ squeaky wooden stairs was not his favourite hobby) (actually, his hobby was board games, but I digress).

Now, what's the moral of that story?
Later that day he bought a kettle and installed it in his room.
We could see it on video calls - he could reach behind his chair and start the kettle without losing focus.
Tea and cup were also there.
That's like 30-45min extra more time *per day* spent on building something he loves to build.
Python backends. This is why we are here.
This is why you are here, am I right?
Seriously, if you could choose between RT and a workplace optimized for "walking up squeaky wooden stairs while trying to not burn yourself with a hot liquid", what would you do?

(or maybe it was ☕? I don't remember)

### So that we know how much we should charge the client

Even if you'd only work for one client per billing period, you'd still log some time to `RT / *` and `RTO / *` projects, and those are paid by the company and not by the client.

### So that we know how much we should charge which client

When you work on multiple projects, we want to know how much time was worked for which client, so that we can bill them for it appropriately.
Billing a client inaccurately goes against a foundation of the company ("happy clients", see above).

### So that we know how much to pay you

After the end of a billing cycle (typically the 1st day of a month), we semi-automatically calculate the invoice amounts for everyone.
The Polish tax system got way more complicated than it used to be in 2022, and lawful accounting of the optimal tax mode requires detailed time logs, which we then help our staff follow with automation.

### It can save the contract

Sometimes the work doesn't go as well as it should for an amount of time that cannot be ignored.
If you have logs from the tracker that clearly show you've been working on the project, then it is a good thing.
The client doesn't see us work in their office, so if there are no results, it is difficult to say whether someone is working hard but struggling with a challenge or whether someone is not trying hard enough.

As of writing this, the number of times the tracker was instrumental in preventing a rapid degradation of a relationship with a customer is:
**5**.

UPDATE: this counter stopped incrementing in mid-2018 when we changed the target client group.
It seems that "better" clients don't really care about the time, but they do care about results.
The CEO even wanted to disable the screenshot feature of the tracker in early 2020, but others said they use it to inspect their own diary at the end of the day, and after a short discussion, everyone said they don't really care about it, so we just left it as it was.
It seems that nobody has reviewed a screenshot since July 2018, except for people reviewing their own thing at the end of the day.
Being able to easily recover from a situation where you have accidentally billed a client for doing something private (as you forgot to pause the timer) is nice and in line with the company values.

# Configuring the environment

Once you have installed the time-tracking app, it's time to prepare your environment.

This guide will show how to set up a standard, secure environment for software development.
The handbook is written with Ubuntu-based distros (e.g. [Linux Mint](https://www.linuxmint.com/download.php)) in mind.
Using such will help save time, but in the end, it is individual's responsibility to maintain a productive working environment.

**Fully secured environment as described by this document is not needed for recruitment assignments.**

It is needed for 2nd stage trial period assignments.

## 1. Create an encrypted volume (host machine)

Due to the variety of operating systems used by our team, we do not impose a specific solution.
It depends on what software you use.
For Linux systems, it can be LUKS.
For macOS, you can use built-in FileVault encryption.

Due to the large space utilization of our projects, the minimum partition size is **50 GB** (recommended size:
**100 GB**).

In case you have no preferences, we recommend using [VeraCrypt](https://www.veracrypt.fr/en/Home.html).
A step-by-step instruction for the installation process can be found [here](docs/VeraCrypt.md).

It is allowed to use a non-virtual machine for work purposes (via dual boot or separate physical machine).
This is not very common, and if you are considering setting it up, you probably don't need detailed instructions, so the rest of the guide will show how to build a VM environment.

## 2. Virtual machine (host machine)

As with encryption software, we do not have specific requirements for what kind of solution you will use.
The only requirement is the license.

We generally recommend [VirtualBox](https://www.virtualbox.org/).
Apple Silicon hardware support in VirtualBox is dire, so the recommended virtualization solution is currently (Q2 2023) QEMU-based, eg.
[UTM](https://getutm.app/) (+ [guest system installation tutorial](https://www.youtube.com/watch?v=O19mv1pe76M))

A step-by-step guide to creating a virtual machine can be found [here](docs/VirtualBox.md).

## 3. Installing the necessary packages (virtual machine)

You will need the following packages to work:

```bash
$ sudo apt install \
	docker.io \
	docker-compose \
	git \
	python3-pip \
	python3-setuptools \
	python3-virtualenv \
	direnv
```

```bash
$ sudo pip3 install virtualenvwrapper
```

## 4. Initial configuration (bash, git, ssh)

### SSH

First, generate an SSH key.
We use Ed25519 which is more secure than the default RSA key.
We provided a simple script that will do all the work for you.

Just download it from this repository and run it:

```bash
$ ./configure-keychain.sh
```

### Git

Copy the `.gitconfig` file included in this repository into your home directory:

```bash
$ cp .gitconfig ~/
```

Complete username and email:

```bash
$ git config --global user.name "Name Surname"
$ git config --global user.email name.surname@reef.pl
```

### Bash

Copy the `.bashrc` file into your home directory.

```bash
$ cp .bashrc ~/
```

In order for this to take effect, relog your shell or run `. .bashrc`

### Docker

Add your user to the `docker` group:

```bash
$ sudo gpasswd -a $USER docker
```

*Note: For ease of use, an alias \*\* dc \*\* for docker-compose is added to the `.bashrc` file.
Instead of typing a full name, you can use the shortened version.*

Example:

```bash
$ dc up
```

## 5. Configure your Google Account and GitHub

Since you've already configured your virtual machine, any logon to company accounts is done through the VM.

### Enable 2-step authorization for your Google Account

To improve the security of our accounts, we require you to enable 2-step verification.

[Google's 2-step authorization setup](https://myaccount.google.com/signinoptions/two-step-verification)

### Create an account on GitHub

Create a new account on GitHub.
The suggested username is the first letter of your first name and your full last name, and the suffix `-reef`, eg.
`jkowalski-reef` or `asmith-reef`.

2-step authorization should be enabled as well.
If you don't enable it (or if you disable it - which is crazy, but technically possible), a periodic audit will catch you and you will make the auditor very sad 😭.

[GitHub's 2-step authorization setup](https://github.com/settings/two_factor_authentication/configure)

### Set this repository as watched

Go [here](https://github.com/reef-technologies/handbook/subscription) and select ***watching***.
This will send you an email whenever this repository is updated.
This is useful to keep up with the training video/article list, description of chat channels and meaning of projects in the time tracker.

**WARNING:** if the document was updated after you started reading it and before you set the repository to watched, you could miss an update.
Check the latest changes [here](https://github.com/reef-technologies/handbook/commits/master) after subscribing to updates.

### Avatars

Please add your photo (one that shows your face clearly without sunglasses, etc.)
to all services that we use:
Slack, GitHub, time tracker, Trello, Atlassian account, etc.
It is recommended to add it to [Gravatar](https://gravatar.com), as it will then load up automatically to many services.
Avatars are important, especially on non-small teams, but also everywhere in the context of communication with the client (or ourselves), where we want to be recognized as human beings rather than lines of text.
Cultural differences, time zones, and language barriers make communication a challenge - let's make it at least slightly easier by showing a smiling face to the client and their team.

Why no sunglasses?
Please imagine the company in a few years, where almost every avatar on Slack looks the same:
either a sunglassed person or a 10-pixel high character on the top or bottom of a mountain.
That won't work.
Therefore, we should all use clear pictures from the beginning.

## 6. Communication

### 6.1 Weekly video calls

Every week, we hold two internal calls:
Status call and a Sociocracy call.
These two meetings are exceptions to our asynchronicity.
Depending on the project and the client you work for, additional calls may be needed, but we try to keep them to a minimum.

The purpose of these two calls, briefly speaking, is:

- Status call - share achievements and other significant developments from previous week and make plans for next one.
- Sociocracy call - facilitate Sociocracy 3.0 decision processes giving everyone an opportunity to influence the shape of the company.

There is a second purpose of these two internal calls, and that is team building.
These calls perform the role of a water cooler or a coffee machine in a regular office.
That is, we make them a bit loose, with time to make jokes, add personal stories, divert from the main topic etc.
We are a fully remote team with some members that not ever met one another in person.
Therefor it is even more important for us to invest that extra time (and therefore money).
All that we can get to know each other better, build trust, have fun and acknowledge that we more than "just" excellent problem solvers.

During your Trial period you will be invited to attend and participate at least once in these calls.

### 6.2 Video hand signal protocol

We use simple hand signals during video calls to communicate more efficiently.

| sign                | meaning                      | context               |
| ------------------- | ---------------------------- | --------------------- |
| :fist:              | pass (no comment)            | moderated discussion  |
| :point\_up:         | request voice                | moderated discussion  |
| :thumbsup:          | vote "consent"               | S3 decision making    |
| hand with palm down | vote "concern"               | S3 decision making    |
| hand with palm up   | vote "protest"               | S3 decision making    |
| :wave:              | ready to disconnect the call | call coming to an end |

When we're trying to make a decision or closing the call, everyone holds their sign until everyone shows a sign of their choice.
This way, the situation is clear at a glance.
In the past, we used to show signs for a moment, but then the quick responders hid their signals before the slow ones started signing and the situation was not clear.
Now we all hold the sign until we're sure of the consent.

### 6.3 Communication channels

When you need to contact one of your Reef teammates, you have three channels to choose from:
Slack, text message, and phone call.

First, we try to connect via Slack.
Then, you can attempt a phone call and finally a text message or the other way around:
a text message and then a phone call.
Everyone has a description "phone -> SMS" or "SMS -> phone" under their avatar on Slack.
Please choose which sequence suits you better, and we will respect it.
We expect you to respect our contact preferences too.

We don't really use email for communications, as some people don't check it too often.
If you need to be sure that someone sees your email, ping them on Slack.

### 6.4 Instant messengers

For business communications, we use Slack and [Zoom](https://zoom.us).
You may use them in your browser, but they are usually installed on **the host computer** for convenience.
Zoom usually doesn't work from an encrypted VM (no audio or video) - perhaps it's possible to perform some extra setup steps to make it work, but it's not worth it.

#### Slack

In your company email inbox, you will find a message with an invitation to the Slack team reeftechnologies.slack.com.
Right after signing in, remember to fill out the phone number field in your account settings.
Remember to **add your country-specific prefix number**, e.g., Poland uses `+48`.
It's essential, as our members come from many different countries.
Also, remember to place your chosen sequence under your picture:
"phone -> SMS" or "SMS -> phone".

Replying with a :+1:
reaction is better than writing "ok" (especially when there are many acknowledgers on the channel!)
\- reactions prevent half of the conversation from being filled with meaningless messages like "ok" / "right" / "I see".
If you want to quickly acknowledge a Slack message, you can use `ctrl+shift+\, 1, enter`.

We use some reactions in a specific way:

- 👀 to indicate "I'm looking at this" (for example on a code review request)
- ✔️ it's DONE (as done as it possibly can be for the foreseeable future)

Using the desktop Slack application has a benefit of marking you as "available" on all the Slack servers.
If you use a browser, you are only shown as available on the tab that you currently have open on your screen.
Therefore, you should use the desktop application, not the browser.
To some extent the client perceives availability of the team by those indicators (if he never sees us online, it's not so good).

Channels:

- `#announcements` - the general announcement channel, where we mostly welcome new people and announce our vacation periods to others
- `#default` - the default channel (if there is no dedicated channel for something, we use this one)
- `#python` - where we sometimes discuss things such as the usage of walrus operator (`:=`) or if it is better to use `raise` or `raise e` (as not everyone speaks Python on `#default`)
- `#random` - all topics not directly related to work.
  If you read something interesting, don't hesitate to share it with us.
- `#sales` - sales team sends notifications there about high quality leads, signed/terminated contracts etc.
- `#security` - for things like [heartbleed](http://heartbleed.com/), [shellshock](https://www.symantec.com/outbreak/?id=shellshock), [krack](https://www.krackattacks.com/), [poodle](https://www.us-cert.gov/ncas/alerts/TA14-290A), [venom](http://venom.crowdstrike.com/), [ghost](https://blog.qualys.com/laws-of-vulnerabilities/2015/01/27/the-ghost-vulnerability), [meltdown/spectre](https://meltdownattack.com/)
- `#sociocracy` - the channel where sociocracy is coordinated
- `#recruitment` - to discuss recruitment, trial candidate progress etc
- `#staff` - internal staff channel - the only practical difference between a trial candidate and a staff member.
  The channel is practically dead because we don't want to have any part of the culture that is not available to the trial candidates.
- `#va_for_rt` - for delegating things to Virtual Assistants
- `#website` - discussion about our company website and its development

(private channel names don't start with a `#`)

The remaining channels are client- or project-specific.
Only the people involved in those projects get invited to the channels (for IP compartmentalization).

[Slack's 2-step authorization setup](https://reeftechnologies.slack.com/account/settings)

Do not forget to say hello to us on `#announcements` :)

## 7. Miscellaneous rules

Here are some miscellaneous rules to follow that were hard to put in other categories, so they were all collected here:

- When a meeting starts, decide where to bill it.
- If you are a junior and you get stuck - ask for help.
  Really, really, really do.
  Do not spend two days trying to solve something a senior peer could help you go through in 10 minutes.
  Ask on the project Slack and if that's not possible, use our `#default` channel.
- If you are a developer, always perform basic functional testing (manually!)
  of your code and self-review your PR before you give it to a peer for review.
- If there is ever a time when you are working, but for some reason, you are not able to bill it, escalate it immediately.
  We want to avoid such incidents.
- It is forbidden to transfer any client data through a non-encrypted channel.
  Use https and ssh tunnels when necessary.
- It is forbidden to store client data on a non-encrypted device.
  Use fully encrypted systems (or virtual machines with images stored on encrypted partitions, where the host machine has a disabled swap file, or where swap is encrypted).
- Try to avoid task switching, especially project switching.
  Generally, we do our best to switch only on "breakpoints", which are the moments when you lose concentration on the task at hand, such as the end of the working day, going away for lunch, the end of a task.
  Thus, if a new task appears on a high priority project, we do not expect you to switch to it immediately, but rather after you finish what you are doing, or first thing next day, etc.
  Usually, you should have at most one project switch per day.
- Avoid `ssh -A`, also called `ForwardAgent` (except for jb).
  If we use it on a server owned by a client and it gets hacked, someone could potentially set a trap for us and authorize using our key.
  The correct way is to use deployment keys on the client server to access the repository.
- Do not use the company email for RSS, out of work stuff etc.
  Minimize distractions.
- If you issue an invoice to the company, please prefix the name of the file with your surname.
  This makes things much easier to find for the staff members who are dealing with a few dozen invoices every month.
- If your changes are not ready to be submitted at the end of your work day, make a dirty branch, commit all of your changes to it (typically `git commit -am'WIP'`) and push it to a remote.
  This way if your HDD is damaged or something, you will never lose more than a day of work.
- While various skin color options are available for emojis, we limit ourselves to use the default, yellow emojis.

If any of the above is not clear, not optimal, or you are curious about the rationale behind a rule, speak up on `#default`.

### 7.1 Conferences

If there is a conference that you'd like to attend, and we agree that your attendance would be valuable for the company:

- The company will fund your conference ticket.
- The company will fund your train/bus/airplane ticket.
- The company will fund your stay if the price is reasonable (we use a booking.com bed\&breakfast option, but AirBnB might be ok too).
- The company will not pay for the time spent at the conference, at the afterparty, etc.
- ... unless you are actually going there to sell.

### 7.2 Copying Code

Please follow these guidelines when copying code:

- Please mention the license of the source code which is copied

### 7.3 Conventions

We *typically* follow the conventions listed below.
Not always.
The list seems long, but it really isn't.

Why is this list here, you may ask - don't all RT developers follow all of those subconsciously?
Usually yes, but some of our trial candidates said it would be easier for them if they could look at the list, so we wrote it down out of respect for them.

#### 1NF

Described [here](https://en.wikipedia.org/wiki/First_normal_form).
We break it when doing advanced indexing, but we adhere to 1NF until we can't get the desired result using basic indexing.

#### DRY

Described [here](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).
We adhere to it pretty closely, you won't find much of copied code in our repos (with one notable exception, it's a long story).

#### SOLID

Described [here](https://en.wikipedia.org/wiki/SOLID).
We follow the first 5, not sure about the others.

#### CUPID

Described [here](https://dannorth.net/2022/02/10/cupid-for-joyful-coding/).
Not as well known as the others.

#### git commit message formatting

Described [here](https://chris.beams.io/posts/git-commit/).
There are many such conventions, but this is the one we use.
It's pretty straightforward.

#### Making things resilient to failures in general

<https://blog.cloudflare.com/pipefail-how-a-missing-shell-option-slowed-cloudflare-down/>

#### No 3.10+ only syntax for the time being

Because we want an option to switch to 3.9-nogil.
This can be dropped very easily, but please mention it beforehand.

#### SemVer 2

Described [here](https://semver.org/spec/v2.0.0.html)

#### isort style import sorting

Described [here](https://pycqa.github.io/isort/docs/configuration/custom_sections_and_ordering.html)

#### Type hints

Described [here](https://docs.python.org/3/library/typing.html).
We try to use it at least for all new public functions.

#### Docstrings for everything public

As above - it should be possible to use stuff without reading its code.

#### PEP8

<https://peps.python.org/pep-0008/>

#### Trailing commas on multiline statements

See [here](https://stackoverflow.com/a/17492103/1935381).
We skip it after `**kwargs` as no argument will ever follow it.

#### keepachangelog

<https://keepachangelog.com/>

#### Safe shell settings

<https://sipb.mit.edu/doc/safe-shell/>

#### SemBr

Use [Semantic Line Breaks](https://sembr.org/) whenever line breaks do not influence rendered document.

#### Not using stuff from forbidden technology list without prior discussion

See the next section

### 7.4 Restricted patterns / forbidden technologies

Whenever someone would like to use a pattern listed below, we have decided that they will get an opinion from a design reviewer **before** writing the code.
The restricted technologies are:

1. Django GFK (generic foreign key)
2. Django signals (please note that `transaction.on_commit()` hook is NOT a signal)
3. Writing to `self.__class__`
4. `atexit.register()` (use `try: ... finally: ...` instead)
5. Defaults for environment variables in `settings.py` (all defaults should be defined in `dev/.env.template` and `prod/.env.template`)
6. By default, one should always use `BIGINT` for primary key field, unless there are special reasons to use other type.

The reasoning behind this is that we usually prefer for the code to be structured differently and it's better to discuss this before implementation and not after.
All of those technologies have their uses in good cases, but what we found is that often the alternative is more elegant, so in order to limit the amount of rewritten code, in those cases we choose to review the design before implementation.
Design review is generally welcome and can save a lot of time, but in this case we have unanimously agreed it will be mandatory.

See also:
<https://github.com/reef-technologies/python-review-zoo/>

### 7.5 Holidays (days off)

Whenever you're taking some days off, it's important to let other team members know, so that work can be planned and client expectations managed.

- You should mark days when you won't be working in GSheet ['Work planning'](https://docs.google.com/spreadsheets/d/12nQKdskWDwFHhQ01BMjfllabqJTZo4tMdCsWx6NJaL4/edit?usp=sharing) as soon as you know about it.
- If you need time off urgently because of something unexpected, please let others know in Slack in `#annoucements` channel right away, but ignore it completely if it's a life-and-death situation.
  Don't worry, we'll manage.
  Family first 👪
- If it's some time you're planning to take off in the future, please mention that on a status call.

## 8. Tools

### Secure delete

The "srm" tool which securely deletes data.
We use it to wipe the repos (despite encryption).

```bash
apt-get install secure-delete
```

You can use following command to delete directory:

```
srm -fllz -r -v <directory>
```

(you can skip `-r` for single file or `-v` if you don't care about verbosity - `-fllz` is the fastest possible way to run `srm` and it is safe due to encrypted drive and also modern ways of storing data in hard drives - default full *Gutmann method* is not needed)

To remove the docker containers created while working on a project, please use the following command (get `dockerkill.sh` from the bin directory of this repo):

```bash
./dockerkill.sh <container-name>
```

# FAQ - Frequently Asked Questions

##### *What's a virtual assistant?*

It's like an office manager for a company that doesn't have an office.

##### *Do we have CI/CD?*

Typically Github Actions.

##### *How to re-bill my time to a different project?*

In case you ever bill the time worked to the wrong project, [here](docs/Hubstaff.md) is a step-by-step guide on how to fix it.

##### *Why is all communication (except 1to1) in English?*

Pawel: Let me tell you a story.
There was a Python office in Warsaw where most employees were from Poland, but eventually, the company started hiring foreigners, too.
They could not understand the kitchen conversations, which was awkward for both sides, so a new rule was introduced.
Everyone was supposed to switch to English as soon as a foreigner entered the room.

One day, a foreigner walked through the corridor and overheard laughter in the kitchen.
As soon as he entered the room, however, everyone went silent.
Turns out that switching the language mid-conversation is not an effortless task.
In that company, foreigners suffered from discrimination every day.
They were excluded from gossip, and whenever they entered the room, any conversation was likely to come to a halt.

The first time we had a foreigner join us for a few days, we switched to English and just haven't switched back.
If we did, the next foreigner joining the company could be a source of resentment.
There would also be a problem with chat history.
One of the things we proudly offer to our staff members is respect.
I like to think that by keeping communications in English, we show respect to the person that will join the company at some time in the future.
We want as little friction as possible.

UPDATE: We now have several staff members who don't know a word of Polish, so the story above is no longer relevant for explaining why we communicate in English... but I am leaving it here because it shows a part of our culture:
it's ok for all of us to be slightly inconvenienced to make sure that we properly respect another staff member (even when he or she does not exist yet).
I wish I snapped a photo of our CFO when I told her why we logged the time for internal activities in quite a lot of detail for the last 5 years.
We knew a day will come when someone will try to analyze how internal company operations evolved over time.
It was for her.

# Handbook document improvement

If you find that some key knowledge (not covered by the NDA) that might be useful for the next candidate is missing from this document, please create a pull request.
Log the time spend on this to `RT / other internal development`.

# Congratulations

You've done all the things you need to get started.
Good luck!

Now head on to [training](training.md)!

# linkedin.py

```python
from __future__ import annotations
from dataclasses import dataclass
from typing import Optional


@dataclass
class Benefit:
    brief_description: str
    extended_description: Optional[str] = None

    def __str__(self) -> str:
        if self.extended_description is not None:
            return f'{self.brief_description}: {self.extended_description}'
        return self.brief_description


@dataclass
class Project:
    __slots__ = ('brief_description', 'location')

    brief_description: str
    location: str

    def __str__(self) -> str:
        return f'{self.brief_description} from {self.location}'


@dataclass
class Dev:
    name: str
    years_of_programming: int = 7
    loves_python: bool = True

    def __str__(self) -> str:
        return self.name


@dataclass
class Company:
    name: str
    info: dict[str, str]
    benefits: list[Benefit]
    projects: list[Project]
    job_ad: str

    def invite(self, dev: Dev) -> None:
        print('#' * 40)
        print(f"We'd love to see you work here at {self.name}, {dev}!")
        for what in ('benefits', 'projects'):
            self.brief(what)
        print(f'\nPlease join us at: {self.job_ad}\n')

    def brief(self, what: str) -> None:
        print(f'\nHere are the example {what} of working at {self.name}:')
        for idx, benefit in enumerate(getattr(self, what), start=1):
            print(f'{idx}. {benefit}')


if __name__ == '__main__':
    INFO = {
        'industry': 'IT',
        'field': 'backend',
        'language': 'python',
        'work_model': 'fully remote',
        'level': 'senior only',
        'hiring': 'yes',
    }

    BENEFITS = [
        Benefit('remote work'),
        Benefit('asynchronicity', 'work whenever you like'),
        Benefit('coworking cost support'),
        Benefit('hardware cost support'),
        Benefit('private assistant'),
        Benefit('budget for tools'),
        Benefit('sociocracy', 'we make decisions together'),
        Benefit('no calls on Wednesdays'),
    ]

    PROJECTS = [
        Project('sales data analysis tool for a fintech company', 'Chicago, IL'),
        Project('paper product level tracker for toilet cleaners', 'Canada'),
        Project('AI video content analyzer/searcher for drone pilots', 'Detroit, MI'),
        Project('two e-commerce applications for a customer', 'Washington, DC'),
        Project('hydrant certification report generator', 'Australian plumbers'),
    ]

    reef_technologies = Company(
        name='Reef Technologies',
        info=INFO,
        benefits=BENEFITS,
        projects=PROJECTS,
        job_ad='https://careers.reef.pl',
    )

    name = input('Your Name: ')
    years_of_programming = int(input('Years of Programming Experience: '))
    loves_python = input('Do you love Python? (yes/no): ').lower() == 'yes'

    you = Dev(
        name=name,
        years_of_programming=years_of_programming,
        loves_python=loves_python,
    )

    MIN_EXP = 5
    if you.years_of_programming >= MIN_EXP and you.loves_python:
        reef_technologies.invite(you)
    else:
        print(
            f'Our job requires at least {MIN_EXP} years of programming experience and some python love'
        )
```
