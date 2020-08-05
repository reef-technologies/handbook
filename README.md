# Introduction

Welcome onboard. This document will help you prepare your development environment step-by-step.


# Foundation rules of the company

This should have been covered during your interview, but it is very important, so here is a reminder.


## Core values

 - happy clients
 - high-quality code in the repository

That's it. It may be surprising that there is no "happy employees" entry on the list. That is because we don't assume that we know what makes people happy.

We use the Sociocracy 3.0 decision making process to give control over the environment to the company staff. They might choose, which sometimes they do, to use that power to change how the company works. That, in turn, might increase their happiness. This mechanism works surprisingly well.


## Deadlines and estimates

A developer working on a project **must never** discuss deadlines or give estimates (even rough) to a client. We have project managers for that. Why?

As it turns out, developers are usually overly optimistic in their estimates. They are also good people, at least the ones that we hire, so when a client politely asks if a developer can help him, the developer will usually agree. Delivering on such a promise is problematic and often stressful for everyone involved.

This is where project managers come in. They're particularly skilled at risk management, reducing the scope to what is really needed etc. Also, they enjoy talking to clients. Therefore, we let them take responsibility for the deadlines - they take care of developers' availability, risks, scheduling and so on. This way everyone is happier. Just to make it clear, if a developer ever provides an estimate or a deadline, it is considered to be invalid. The client know this too, so they shouldn't ask and you shouldn't reply - just redirect them to a project manager or tell them you'll contact him/her yourself and produce an accurate estimate as soon as possible.


## Projects

We avoid fixed-scope projects. The reason why is that we want to focus on the creation of software and not on amending contracts.

We will not accept a project targeted to manipulate people, rip them off or put their savings at risk, such as insurance+retirement funds.


## Opensource

When there is no task for you among commercial projects, don't worry - before someone finds a task for you, you can work on opensource projects and get paid for it! Opensource is a "default" project for all coders and generally has lower priority than commercial projects. However, sometimes there may be no tasks for you  in any commercial project, so then you have something to fall back on. That is usually the case in the first couple of days of you working with us, while we're still taking care of some formalities.

The time spent on opensource development should be billed on `RT / opensource development`. If you find some interesting opensource projects, don't be shy and speak out, we are always on a lookout for something to contribute to.

When you start working on an opensource project, make sure that it is forked on our github. If it's not, get someone to make a RT fork. Then, create a branch for your change and develop your changes there. When finished, ask other company developers for review. Finally, when the review is done, submit a pull request to the original project repository (we call it "upstream"). Because this code is opensourced and public, we want to ensure the best possible quality of the code that members of our company submit for merging.


## Workspace safety

All data related to the company **must** be stored on encrypted media (usually in a virtual machine which has its image stored on an encrypted volume, but dual boot with full disk encryption is also allowed). This practice prevents potential data leaks, i.e. if your computer get stolen. There are a couple exceptions, you will read about them later on.

You should already have an email account in the `reef.pl` domain. Only ever use this email address (and the associated accounts) on secure environment (VM/dual boot) - this way your private and work accounts will never mix access or customer data.

2FA is mandatory everywhere it is possible to use it (more explanation below). We recommend Twilio's [Authy](https://authy.com/) because it has a pin code and e2e encrypted cloud backup.

The relatively high security level we keep allows us to work for financial institutions and, in general, institutions that treat their security seriously. Funny story moment: Pawel talked to a bank once, and they wanted him to work on site. Pawel described our security model and when he finished, an engineer from the bank said: "They have more security at their homes than we have at the office!". The manager looked at the engineer and he was not happy. ;)

UPDATE: A fully encrypted laptop of our senior developer has been stolen from his bag while he was on a train, returning from a conference in late 2017. Spooky.


# Environment preparation

This guide will show how to set up a standard, secure environment for software development.

It is not needed for recruitment assignments.

It may be needed for later trial period assignments. Usually, it is mandatory, unless the trial period assignment is an open source project and there is nothing to hide. If in doubt, ask the person who is giving you the task.

## Time-tracking

### Sign in to your new e-mail account

The first step you need to take is to sign in to your new Google account at `reef.pl`. All the necessary information, including credentials, have been sent to your personal e-mail address.

**Caution!**

You should sign in for the first time from the host computer, as it is necessary to install the time-tracking application. This is the one and only situation when you are allowed to log in from your host machine.

**Caution, again!**

You have to set up 2-factor authentication within 24 hours from the first successful login, or the security policy will cut you off. It's best to set it up right after you perform the initial login.

### Time tracking app

We use an application that measures the time your spend at work and takes regular screenshots. The first step in preparing your work environment is to install it.

To avoid any issues with screenshot-grabbing and keep consistency across users, please install the tracker on your ***host*** machine.
Please install it and then accept the invitation that you received on your email address.

You can download the application here: [Hubstaff Tracker](https://app.hubstaff.com/download)

If you ever wonder how Hubstaff calculates the activity levels, here is a handy link to [their documentation](https://support.hubstaff.com/how-are-activity-levels-calculated/) (not that anyone looks on it, calls have 0% activity and we do them a few times per week, this metric is a bit impractical).

#### I CAN SEE YOU

As it turns out, people usually find this document before they sign a contract with us and before their tracker account is created. Then they decide to work on their environment even before they have access to the tracker. If you are one of those people, please, track the time you spend on setting the encrypted partition, virtual machine etc, so that you know how much time it took and so that we can compensate you for this time as soon as you get access to the official company tracker. For example, you can use the free [toptracker](https://www.toptal.com/tracker/). We really, really don't like it when people work for us but are not getting paid for it. 

UPDATE after 2 years or so: nobody seems to actually track it, but now that we have more data, we know it takes approximately 90 minutes to set everything up, so in worst case we can compensate based on that value.

#### RT projects
Below you can find the list of RT projects alongside with their descriptions.
The descriptions tell you where you should bill your RT time on hubstaff.

| Project                                          | Description                                                                                                                                           |
| -----------------------------------------------  | ----------------------------------------------------------------------------------------------------------------------------------------------------  |
| RT / content marketing                     | writing articles or blog posts under company name; presenting the company to the outside world;                                                           |
| RT / django cookiecutter template          | modifying our internal django template;                                                                                                |
| RT / finding new partners                  | time spent on finding new partners/customers;                                                                                                         |
| RT&nbsp;/&nbsp;internal&nbsp;infrastructure&nbsp;management    | anything related to getting your workspace ready; creating encrypted partitions, installing vms or any software needed to work and **not connected to any specific project**; if it's related to any internal or external project then please bill the time on said project;|
| RT / management                            | a project reserved for company management;                                                                                                             |
| RT / non-project meeting                   | phone calls and Slack conversations that are related to your work but not directly project-related;                                                     |
| RT / virtual assistant                           | things related to organizing the equipment needed in the company (like laptops or any necessary office stuff or hardware);                                       |
| RT / opensource development                      | time spent looking for any opensource bugs to be solved or projects to take part in, as well as actual programming, resolving issues;               |
| RT / other internal development            | spending time on improving internal infrastructure like onboarding, training or any other company related stuff that might be helpful for others;    |
| RT / pre-sales                             | any pre-work needed to be done before the contract is signed with the customer; usually asked by @ppolewicz;                                          |
| RT / recruitment                           | time spent on actively recruiting other people;                                                                                                       |
| RT / sociocracy                            | for s3 meetings, but also for chatting on the channel and for tuners |
| RT / special assignment from CEO           | bill like this only when specifically asked to |
| RT / Training                              | only during training phase (going through [training](training.md) after onboarding);                                                                              |
| OTHER / just-in-case                             | this is in case you need to work on a project before you are assigned to it; in such case raise the problem to the management and re-bill that time later to the proper project;|


#### Non-RT projects

If you are working on any external project for the customer, you should bill all your time spent on this project onto it. Knowledge gathering, environment preparation, actual programming, meetings or design. If you need to learn a framework, library or language in order to deliver value for the project, bill the learning to that project as well. If it took you a long time to learn a new skill, please mention it to our PM on that project. It's pretty common to issue a discount to the customer in cases like these, but it is the responsibility of the PM to do that (sometimes the entire contract or milestone may be discounted and it is not necessary to adjust the coefficients every week).


#### Bugs

Workaround for window resize (most project names are like `RT / somethi...` - it is hard to find your project):
you click `>>` then you can resize left pane a little bit, then `<<` - repeat several times - now you can read full project names. UPDATE: this seems to have been fixed in 2019.

It tracks time per 10-minute slot per project, so if you log some time in the given 10-minute period, switch to another project and switch back to the first one, it cannot really be distinguished (number and order of such switches is not recorded). UPDATE: this was written in 2017 and is no longer True. Activity is tracked in 10min buckets, but time is tracked accurately (and nobody cares about activity, really).

Another issue is that manually logged time in the given slot cannot co-exist with any application-tracked time, so if you work from 14:01 to 14:02 and then log manual time for 14:05 to 14:10, the manual time entry will eat the tracked time. It's quite difficult to run into this, but it happened at least once to us. UPDATE: this was written in 2017 and that problem seems to have disappeared a long time ago. Inspect your work log after adjusting time, just in case.


### Why we use a time tracker

#### So that we know how much we should charge the client.

You may log some time to `RT / *`, which is paid by the company and not by the client.

#### So that we know how much we should charge which client.

Assuming that you somehow logged zero time to `RT / *`, when you work on multiple projects, we want to know how much time was worked for which client, so that we can bill them for it appropriately. Billing a client inaccurately goes against a foundation of the company ("happy clients", see above).

#### So that we know how much VAT (value-added tax) we should pay

If a client is from the same country as we are, the invoice we give him has a non-zero VAT. Generally, that doesn't seem to ever happen. Otherwise, when the client is from a different country, the invoice has zero VAT. However, the vendors (such as yourself) have taxed invoices, so we (as a company) need to reclaim the VAT in an appropriate amount. We don't want to attempt to reclaim too much or too little, only the right amount. Generally, we don't want to mess with the tax agency and prefer to pay a greater tax when in doubt, but there is too much of VAT to ignore it. One could say that, assuming the company doesn't choose to forfeit the reclaimable VAT, we are required by the EU tax law to accurately track the time into "exported" and "not exported" buckets. The time tracker is just a practical too to get it done. 

#### So that we know how much you should be paid.

We all have hourly rates.

#### It can save the contract

Sometimes the work doesn't go as well as it should for an amount of time that cannot be ignored. If you have logs from the tracker that clearly show you've been working on the project, then it is a good thing. The client doesn't see us work in their office, so if there are no results, it is difficult to say whether someone is working hard but struggling with a challenge, or whether somoene is not trying hard enough. As of writing this, the number of times the tracker was instrumental in preventing a rapid degradation of a relationship with a customer is: **5**.  UPDATE: this counter stopped incrementing in mid 2018, when we changed the target client group. Seems that "better" clients don't really care about the time, but they do care about results. CEO even wanted to disable the screenshot feature of the tracker in early 2020, but others said they use it to inspect their own diary at the end of the day and after a short discussion everyone said they don't really care about it so we just left it as it was. It seems that nobody has reviewed a screenshot since July 2018, except for people reviewing their own thing at the end of the day. Being able to easily recover from a situation where you have accidentally billed a client for doing something private (as you forgot to pause the timer) is nice and in line with the company values.


# Configuring the environment

Once you have installed the time-tracking app, it's time to prepare your environment.

## 1. Create an encrypted volume (host machine)	

Due to the variety of operating systems used by our team, we do not impose a specific solution. It depends on what software you use. For Linux systems it can be LUKS. For MacOS you can use built-in FileVault encryption.

Due to the large space utilization of our projects, the minimum partition size is **50 GB** (recommended size: **100 GB**).

In case you have no preferences, we recommend using [VeraCrypt](https://www.veracrypt.fr/en/Home.html). A step-by-step instruction for the installation process can be found [here](docs/VeraCrypt.md).

It is allowed to use a non-virtual machine for work purposes (via dual boot or separate physical machine). This is not very common and if you are considering setting it up, you probably don't need detailed instructions, so the rest of the guide will show how to build a VM environment.


## 2. Virtual machine (host machine)

As with encryption software, we do not have specific requirements for what kind of solution you will use. The only requirement is the license. We recommend [VirtualBox](https://www.virtualbox.org/).

To maintain consistency across all virtual machines, we use the [Linux Mint](https://www.linuxmint.com/download.php) distribution. We would like you to work on this system, too. This will help us save time in the future.

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
First, generate an SSH key. We use Ed25519 which is more secure than the default RSA key. We provided a simple script that will do all the work for you.

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
$ git config --global user.name "Imię Nazwisko"
$ git config --global user.email imie.nazwisko@reef.pl
```

### Bash

Copy the .bashrc file into your home directory.

```bash
$ cp .bashrc ~/
```

In order for this to take effect, relog your shell or run `. .bashrc`

### Docker

Add your user to the `docker` group:

```bash
$ sudo gpasswd -a $USER docker
```

*Note: For ease of use, an alias ** dc ** for docker-compose is added to the .bashrc file. Instead of typing a full name, you can use the shortened version.*

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

Create a new account on GitHub. The suggested username is the first letter of your first name and your full last name, and the suffix `-reef`, eg. `jkowalski-reef` or `asmith-reef`.

2-step authorization should be enabled as well. If you don't enable it (or if you disable it - which is crazy, but technically possible), a periodic audit will catch you and you will make the auditor very sad.

[GitHub's 2-step authorization setup](https://github.com/settings/two_factor_authentication/configure)

### Set this repository as watched

Go [here](https://github.com/reef-technologies/handbook/subscription) and select ***watching***. This will send you an email whenever this repository is updated. This is useful to keep up with the training video/article list, description of chat channels and meaning of projects in the time tracker.

**WARNING:** if the document was updated after you started reading it and before you set the repository to watched, you could miss an update. Check the latest changes [here](https://github.com/reef-technologies/handbook/commits/master) after subscribing to updates.

### Avatars

Please add your photo (one that shows your face clearly without sunglasses etc) to all services that we use: Slack, Github, time tracker, Trello, Atlassian account etc. It is recommended to add it to [gravatar](https://gravatar.com), then It will load up automatically to many services. Avatars are important, especially on non-small teams, but also everywhere in context of communication with the client (or ourselves), where we want to be recognized as human beings rather than lines of text. Cultural differences, timezones and language barriers make communication a challenge - lets make it at least slightly easier by showing a smiling face to the client and his team.

Why no sunglasses? Please imagine the company in a few years, where almost every avatar on slack looks the same: either a sunglassed person or a 10-pixel high character on the top or bottom of a mountain. That won't work. Therefore we should all use clear pictures from the beginning.


## 6. Communication

### 6.1 Video hand signal protocol

We use simple hand signals during video calls to communicate more efficiently.

| sign | meaning | context |
|--- | --- | --- |
| :fist: | pass (no comment) | moderated discussion |
| :point_up: | requesting voice | moderated discussion | 
|:thumbsup:|vote "consent"|S3 decision making|
|hand with palm down|vote "concern"|S3 decision making|
|hand with palm up|vote "protest"|S3 decision making|
|:wave:|ready to disconnect the call|call coming to an end|

in case of decision making or closing the call, everyone holds the sign until everyone else does - this way the situation is clear at a glance. In the past we used to show a sign for a moment, but then the quick responders hid their signals before the slow ones started signing and it was not clear what the situation is. Now we hold until everything is clear.

### 6.2 Communication channels

When you need to contact one of your Reef teammates, you have three channels to choose from: Slack, text message, and phone call.

First, we try to connect via Slack. Then, you can attempt a phone call and finally a text message or the other way around: a text message and then a phone call. Everyone has a description "phone -> SMS" or "SMS -> phone" under their avatar on Slack. Please choose which sequence suits you better, and we will respect it. We expect you to respect our contact preferences too.

We don't really use email for communications, as some people don't check it too often. If you need to be sure that someone sees your email, ping them on Slack.

### 6.3 Instant messengers

For business communications, we use Slack and [Zoom](zoom.us). You may use them in your browser, but they are usually installed on **the host computer** for convenience.

#### Slack

In your company e-mail inbox,  you will find a message with an invitation to the Slack team reeftechnologies.slack.com. Right after signing in, remember to fill out the phone number field in your account settings. Remember to **add your country-specific prefix number**, e.g., Poland uses `+48`. It's essential, as our members come from many different countries. Also, remember to place your chosen sequence under your picture: "phone -> SMS" or "SMS -> phone".

If you want to acknowledge a Slack message, you can use `ctrl+shift+\, 1, enter` to quickly reply with a :+1: reaction. It is better than writing "ok", especially when there are many acknowledgers - reactions prevent half of the conversation from being filled with meaningless messages like "ok" / "right" / "I see".

Using the desktop Slack application has a benefit of marking you as "available" on all the Slack servers. If you use a browser, you are only shown as available on the tab that you currently have open on your screen. Therefore, you should use the desktop application, not the browser.


Channels:

- `#announcements` - the general announcement channel, where we mostly welcome new people and announce our vacation periods to others
- `#default` - the default channel (if there is no dedicated channel for something, we use this one)
- `management` - senior non-technical management discussions (hiring etc)
- `#opensource-candidates` - for discussions on what the opensource budget should go to
- `#opensource-operations` - the channel for opensource project development
- `#python` - where we sometimes discuss things such as the usage of walrus operator (`:=`) or if it is better to use `raise` or `raise e` (as not everyone speaks Python on #default)
- `#random` - all topics not directly related to work. If you read something interesting, don't hesitate to share it with us.
- `#sales` - sales team sends notifications there about high quality leads, signed/terminated contracts etc.
- `#security` - for things like [heartbleed](http://heartbleed.com/), [shellshock](https://www.symantec.com/outbreak/?id=shellshock), [krack](https://www.krackattacks.com/), [poodle](https://www.us-cert.gov/ncas/alerts/TA14-290A), [venom](http://venom.crowdstrike.com/), [ghost](https://blog.qualys.com/laws-of-vulnerabilities/2015/01/27/the-ghost-vulnerability), [meltdown/spectre](https://meltdownattack.com/)
- `sociocracy` - the channel where sociocracy is coordinated (TODO: link to our S3 resources)
- `staff` - internal staff channel
- `va` - for delegating things to Virtual Assistants
- `#website` - discussion about our company website and its development

(private channel names don't start with a `#`)

The remaining channels are client- or project-specific. Only the people involved in those projects get invited to the channels (for IP compartmentalization).

[Slack's 2-step authorization setup](https://reeftechnologies.slack.com/account/settings)

Do not forget to say hello to us on #random. :)


## 7. Rules

Here are some miscellaneous rules to follow that were hard to put in some other categories, so they were all collected here:

- When a meeting starts, decide where to bill it.
- If you are a junior and you get stuck - ask for help. Really, really, really do. Do not spend two days trying to solve something a senior peer could help you go through in 10 minutes. Ask on the project Slack and if that's not possible, use our `#default` channel. 
- If you are a developer, always perform basic functional testing (manually!) of your code and self-review your PR before you give it to a peer for review.
- If there is ever a time when you are working, but for some reason, you are not able to bill it, escalate it immediately. We want to avoid such incidents.
- It is forbidden to transfer any client data through a non-encrypted channel. Use https and ssh tunnels when necessary.
- It is forbidden to store client data on a non-encrypted device. Use fully encrypted systems (or virtual machines with images stored on encrypted partitions, where the host machine has a disabled swap file, or where swap is encrypted).
- Try to avoid task switching, especially project switching. Generally, we do our best to switch only on "breakpoints", which are the moments when you lose concentration on the task at hand, such as the end of the working day, going away for lunch, the end of a task. Thus, if a new task appears on a high priority project, we do not expect you to switch to it immediately, but rather after you finish what you are doing, or first thing next day, etc. Usually, you should have at most one project switch per day.
- Avoid `ssh -A`, also called `ForwardAgent` (except for jb). If we use it on a server owned by a client and it gets hacked, someone could potentially set a trap for us and authorize using our key. The better way is to use deployment keys on the client server to access the repository.
- Do not use the company email for RSS, out of work stuff etc. That is to minimize distractions, which is pretty important for us.
- Try to use Pomodoro, pair programming, or another time organization method.

If any of the above is not clear, not optimal, or you are curious about the rationale behind a rule, speak up on `#default`.


### 7.1 Conferences

If there is a conference that you'd like to attend, and we agree that your attendance would be valuable for the company:
- The company will fund your conference ticket;
- The company will fund your train/bus ticket;
- The company will fund your stay if the price is reasonable (AirBnB seems to lead here);
- The company will not pay for the time spent at the conference.


## 8. Tools

### Pomodoro timer

[Marinara: Pomodoro Timer](https://chrome.google.com/webstore/detail/marinara-pomodoro-timer/lojgmehidjdhhbmpjfamhpkpodfcodef)


### Secure delete

The "srm" tool which securely deletes data. We use it to wipe the repos (despite encryption).

```bash
apt-get install secure-delete
```

To remove the docker containers created while working on a project, please use the following command (get "dockerkill.sh" from the bin directory of this repo):

```bash
./dockerkill.sh <container-name>
```

# FAQ - Frequently Asked Questions

##### _What's a virtual assistant?_
&nbsp;&nbsp;&nbsp; It's like an office manager for a company that doesn't have an office.

##### _Do we have CI?_
&nbsp;&nbsp;&nbsp; So far, we have used wercker because it is free for github private, but we are scheduled to try to switch over to GitLab.

##### _How to re-bill my time to a different project?_
&nbsp;&nbsp;&nbsp; In case you ever bill the time worked to the wrong project, [here](docs/Hubstaff.md) is a step-by-step guide on how to fix it.

##### _Why is all communication (except 1to1) in English?_
&nbsp;&nbsp;&nbsp; Pawel: Let me tell you a story. There was a Python office in Warsaw where most employees were from Poland, but eventually, the company started hiring foreigners, too. They could not understand the kitchen conversations, which was awkward for both sides, so a new rule was introduced. Everyone was supposed to switch to English as soon as a foreigner entered the room.

One day, a foreigner walked through the corridor and overheard laughter in the kitchen. As soon as he entered the room, however, everyone went silent. Turns out that switching the language mid-conversation is not an effortless task. In that company, foreigners suffered discrimination every day. They were excluded from gossip, and whenever they entered the room, any conversation was likely to come to a halt.

The first time we had a foreigner join us for a few days, we switched to English and just haven't switched back. If we did, the next foreigner joining the company could be a source of resentment. There would also be a problem with chat history. One of the things we proudly offer to our staff members is respect. I like to think that by keeping communications in English, we show respect to the person that will join the company at some time in the future. We want as little friction as possible.

UPDATE: We now have several staff members who don't know a word of Polish, so the story above is no longer relevant for explaining why we communicate in English... but I am leaving it here because it shows a part of our culture: it's ok for all of us to be slightly inconvenienced to make sure that we properly respect another staff member, even when he or she does not exist yet.


# Handbook document improvement

If you find that some key knowledge (not covered by the NDA) that might useful for the next candidate is missing from this document, please create a pull request. Log the time spend on this to `RT / other internal development`.


# Congratulations

You've done all the things you need to get started. Good luck!

Now head on to [training](training.md)!
