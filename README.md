# Introduction

Welcome onboard. This document will help you prepare your development environment step-by-step.


# Foundation rules of the company

This should have been covered on a recruitment call, but it is very important, so here is a reminder


## Core values

 - happy customers
 - high quality code in the repository

That's it. It may be surprising that there is no "happy employees" entry on the list - this is because it would assume we know what makes people happy.

We use Sociocracy 3.0 decision making process to give control over the environment to the company staff. They might choose to use that power to do changes to how company works (and they do!), which might increase their happiness. This works surprisingly well.


## Deadlines and estimates

Developer working on a project **must never** discuss deadlines or give estimates (even rough) to a customer. We have project managers for that. Why?

As it turns out, developers are usually optimistic about their estimates. They are also Good People (at least the ones that we hire), so when the customer asks politely if a developer can help him, developer will usually agree. Delivering on such promise is a problem. This fails more often than not.

Enter the project managers. Those are people particularly skilled at risk management, reduction of scope to what is really needed etc. Also, they enjoy talking to the customer. Therefore we let them take responsibility for the deadlines - they take care about availability of developers, risk, schedule and so on. This way everyone is happier. Just to make it clear, if a developer would ever provide an estimate or a deadline, it is considered invalid. The customers know this too, so they shouldn't ask and you shouldn't reply - just redirect them to a project manager, tell them you'll contact him/her and produce an accurate estimate as soon as possible.


## Projects

We avoid fixed scope projects. The reason for that is that we want to focus on creation of software and not on amending contracts.

We will not accept a project targeted to manipulate and rip people off from their savings such as insurance+retirement funds.


## Opensource

When there is no task for you in commercial projects, don't worry - before someone finds a task for you, you can work on opensource projects and get paid for it! Opensource is a "default" project for all coders and generally has lower priority than commercial projects, but it sometimes happens that there are no tasks in any commercial project for you, so then you have something to fall back to. This is usually true in the first couple of days of work with us, where formalities of assignment to project are being taken care of.

Time spent on opensource development should be billed on `RT / opensource development`. If you find some interesting opensource projects or particular issues, don't be shy to write about it on `#opensource-candidates` channel on slack.

When starting work on an opensource project, ensure that it is forked on our github (if it's not, post a request on `#opensource-operations`). Then create branch for your change and develop your changes there. When finished, ask other company developers for review. Finally, when review is done, submit a pull request to the original project repository (we call it "upstream"). Because this code is opensourced and public, we want to ensure the best possible quality of code released by members of our company.

We often have two forks, one private (`reef-technologies/foobar-priv`) and one public (`reef-technologies/foobar`). This is so that we can teach junior developers in a safe environment, when they can receive a lot of comments in the early phases of their first pull requests. When the PR is ready, we push the branch to the public fork and make a PR to upstream from there.


## Safety of your workspace

All data related to company **must** be stored in the virtual machine, image of which is stored on an encrypted volume. This practice prevents potential data leaks, i.e. when your computer get stolen. There are a few exceptions, you will read about them later.

You should already have an email account in `reef.pl` domain. Use this only this email (and associated accounts) on the virtual machine - this way your private and work accounts will never mix access or customer data.

The relatively high security level we keep, gives us a possibility to work for financial institutions (or just any institutions that treat their security seriously). Funny story here: Pawel talked to a bank and they wanted him to work on site. Pawel described our security model and when he finished, an engineer from the bank made a comment "they have more security at their home offices than we have here!". The manager looked at the engineer and he was not happy ;)

UPDATE: a fully encrypted laptop computer of one of our developers has been stolen from his bag when he was returning from a conference by train. Spooky.


# Environment preparation

This guide will show how to set up a standard, secure environment for software development.

It is not needed for recruitment assignemnts.

It may be needed for trial period assignments. Usually it is mandatory unless the trial period assignment is an open source project and there is nothing to hide. If in doubt, ask your buddy.

## Time tracking

### Sign in to e-mail account

The first step you will take is to sign in to your new Google account at `reef.pl`. All information including credentials have been sent to your personal e-mail address.

**Caution!**

First sign in you make is from the host computer, as it is necessary to install the time tracking application. This is the one and only situation when you logging in from your host machine.

**Another caution!**

You have to set up 2-factor authentication within 24h from the first successful login, or the security policy will cut you off. It's best to set it up right after you perform the initial login.

### Time tracking app

We are using the application that measures time and takes regular screenshots during your work. Its installation is the first step in preparing your environment to work.

To avoid issues with screenshot grabbing and keep consistency across users, please install the tracker on your ***host*** machine.
Please install it and then accept the invitation received on your email address.

The application can be downloaded from here: [Hubstaff Tracker](https://app.hubstaff.com/download)

If you will ever wonder how hubstaff calculates the activity levels, here is a handy link to [their documentation](https://support.hubstaff.com/how-are-activity-levels-calculated/).

#### I SEE YOU

As it turns out, people find this document before they sign a contract with us and before their tracker account is created. Then they work on preparing their environment even before they have access to the tracker. If you are one of those people, please, use something (free [toptracker](https://www.toptal.com/tracker/) maybe?) to track the time you spend on setting the encrypted partition, virtual machine etc, so that you know how much time it took and so that we can compensate you for this time as soon as you get access to the official company tracker. We really, really don't like when people work for us but are not getting compensated for it.

#### RT projects
Below you can find the list of RT projects alongside with their descriptions.
Descriptions tell you where you should bill your RT time on hubstaff.

| Project                                          | Description                                                                                                                                           |
| -----------------------------------------------  | ----------------------------------------------------------------------------------------------------------------------------------------------------  |
| RT / content marketing                     | writing articles or blog posts under company name; presenting company in the outside world;                                                           |
| RT / django cookiecutter template          | modifying our internal django template;                                                                                                |
| RT / finding new partners                  | time spent on finding new partners/customers;                                                                                                         |
| RT&nbsp;/&nbsp;internal&nbsp;infrastructure&nbsp;management    | anything related to preparing your workspace to work; creating encrypted partitions, installing vms or any software needed to work and **not connected to any specific project**; if it's related to any internal or external project then please bill the time on it;|
| RT / management                            | activity reserved for company management;                                                                                                             |
| RT / non-project meeting                   | phone calls, slack conversations which are related to your work but not directly project related;                                                     |
| RT / virtual assistant                           | stuff related to organizing things needed in the company (like laptops or any needed office stuff or hardware);                                       |
| RT / opensource development                      | time spent on looking for any opensource bugs to be solved or projects to take part in as well as actual programming, resolving issues;               |
| RT / other internal development            | spending time on improving internal infrastructure like onboarding, training or any other company related stuff which might be helpful for others;    |
| RT / pre-sales                             | any pre-work needed to be done before the contract is signed with the customer; usually asked by @ppolewicz;                                          |
| RT / recruitment                           | time spent on actively recruiting other people;                                                                                                       |
| RT / sociocracy                            | for s3 meetings, but also for chatting on the channel and for tuners |
| RT / special assignment from CEO           | bill like this only when asked to |
| RT / Training                              | only during training phase (going through [training](training.md) after onboarding);                                                                              |
| OTHER / just-in-case                             | this is in case you need to work on a project before you are assigned to it; in this case raise the problem to the management and re-bill that time later to the proper project;|


#### Non-RT projects

If you are working on any external project for the customer, you should bill all your time spent on this project onto it. Knowledge gathering, environment preparation, actual programming, meetings or design. If you need to learn a framework, library or language in order to deliver value for the project, bill the learning to that project as well. If the learning took a long time, please mention it to our PM on that project (so he might issue a discount to the customer if that's appropriate (that's pretty common, actually)).


#### Bugs

Workaround for window resize (most project names are like `RT / somethi...` - it is hard to find your project):
you click `>>` then you can resize left pane a little bit, then `<<` - repeat several times - now you can read full project names.

It tracks time per 10-minute slot per project, so if you log some time in the given 10-minute period, switch to another project and switch back to the first one, it cannot really be distinguished (number and order of such switches is not recorded).

Another issue is that manually logged time in the given slot cannot co-exist with any application-tracked time, so if you work from 14:01 to 14:02 and then log manual time for 14:05 to 14:10, the manual time entry will eat the tracked time. It's quite difficult to run into this, but it happened at least once to us.


### Why do we use a time tracker

#### So that we know how much you should be paid

We all have hourly rates

#### So that we know how much we should charge the customer

You may log some time to `RT / *`, which is paid by the company and not by a customer

#### So that we know how much we should charge which customer

Assuming that you somehow logged zero time to `RT / *`, when you work on multiple projects, we want to know how much time was worked for which customer so that we can bill them for it appropriately. Billing a customer inaccurately goes against a foundation of the company ("happy customers", see above).

#### So that we know how much VAT tax we should pay

If a customer is from the same country as we are, the invoice we give him has a non-zero VAT tax. Generally, that doesn't seem to ever happen. Otherwise, when the customer is from a different country, invoice has a zero VAT tax, but the vendors (you) have taxed invoices, so we (as a company) need to reclaim the VAT tax in an appropriate amount. We don't want to attempt to reclaim too much or too little, but just right. Generally, we don't want to mess with the tax agency and prefer to pay a greater tax when in doubt, but there is too much of VAT to ignore it. One could say that (assuming the company doesn't choose to forfeit the reclaimable VAT) we are required by EU tax law to accurately track the time into "exported" and "not exported" buckets and the time tracker is just a practical too to get it done. 

#### It can save the contract and it can save you

Sometimes the work doesn't go as well as it should for an amount of time that cannot be ignored. If you have logs from the tracker that clearly show you've been working on it, then it's a good thing. Customer doesn't see us work in their office, so if there are no results, it is difficult to say whether someone is working hard but is fighting through a challenge, or whether somoene is not trying hard enough. As of writing this, the number of times when tracker was instrumental in preventing a rapid degradation of a relationship with a customer is: **5**.

Trust is a fragile thing and the time tracker helps keeping it in a good shape.


#### It is becoming an industry standard

We don't really have a choice, it's going to happen whether we want it or not.


# Configuring the environment

Once you have installed time tracking app, it's time to prepeare your environment.

## 1. Create an encrypted volume (host)	

Due to the variety of operating systems used by our team, we do not impose a specific solution. It depends on what software you use. For Linux systems it can be eg LUKS. For MacOS you can use built-in FileVault encryption.

Due to the large space utilization of our projects, the minimum partition size is **50 GB** (recommended **100 GB**).

In case you have no preferences, we recommend using [VeraCrypt](https://www.veracrypt.fr/en/Home.html). The step-by-step instruction for the installation process is located [here](docs/VeraCrypt.md).


## 2. Virtual machine (host)

As with encryption software, we do not have specific requirements for what kind of solution you will use. The only requirement is the license. Recommended by us is [VirtualBox](https://www.virtualbox.org/).

To maintain consistency across all virtual machines, we use the [Linux Mint](https://www.linuxmint.com/download.php) distribution. We would like you to also work on this system. This will help us save time in the future.

A step-by-step guide to creating a virtual machine can be found [here](docs/VirtualBox.md).


## 3. Installing the necessary packages (vm)

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
First, generate an SSH key. We use Ed25519 which is more secure than default RSA key. We provided simple script that will do it all work for you.

Just download it from this repository and run:

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

Copy the .bashrc file into your home directory

```bash
$ cp .bashrc ~/
```

In order for this to take effect, relog your shell or run `. .bashrc`

### Docker

Add your user to `docker` group:

```bash
$ sudo gpasswd -a $USER docker
```

*Note: For ease of use, an alias ** dc ** for docker-compose is added to the .bashrc file. Instead of typing a full name, you can use the shortened version.*

Example:

```bash
$ dc up
```


## 5. Configure your Google Account and GitHub

Since having a properly configured virtual machine, any logon to company accounts is done through it.

### Enable 2-step authorization for your Google Account

To improve the security of our accounts, we require you to enable 2-step verification.

[Google's 2-step authorization setup](https://myaccount.google.com/signinoptions/two-step-verification)

### Create an account on GitHub

Create a new account for GitHub. The suggested username is the first letter of the first name and the full last name, and the suffix `-reef`, eg. `jkowalski-reef`.

2-step authorization should enabled aswell.

[GitHub's 2-step authorization setup](https://github.com/settings/two_factor_authentication/configure)

### Set this repository as watched

Go [here](https://github.com/reef-technologies/handbook/subscription) and select ***watching***. This will send you an email whenever this repository is updated. This is useful to keep up with the training video/article list, description of chat channels and meaning of projects in the time tracker.

**WARNING:** if the document was updated after you started reading it and before you set the repository to watched, you could miss an update. Check the latest changes [here](https://github.com/reef-technologies/handbook/commits/master) after subscribing to updates.

### Avatars

Please add your photo (one that shows your face clearly without sunglasses etc) to all services that we use: Slack, Github, time tracker, Trello, Atlassian account etc. It is recommended to add it to [gravatar](https://gravatar.com), then It will load up automatically to many services. Avatars are important, especially on non-small teams, but also everywhere in context of communication with the customer (or ourselves), where we want to be recognized as human beings rather than lines of text. Cultural differences, timezones and language barriers make communication a challenge - lets make it at least slightly easier by showing a smiling face to the customer and his team.

Why no sunglasses? Please imagine the company in a few years, where almost every avatar on slack looks the same: either a sunglassed person or a 10-pixel high character on the top or bottom of a mountain. That won't work. Therefore we should all use clear pictures from the beginning.


## 6. Communication

### 6.1 Video hand signal protocol

We use simple hand signals during video calls to communicate more efficiently.

| sign | meaning | context |
|--- | --- | --- |
| :fist: | pass (no comment) | moderated discussion |
| :point_up: | requesting voice | moderated discussion | 
|:thumbsup:|vote "consent"|S3 decision making|
|hand with palm down|vote "concerned"|S3 decision making|
|hand with palm up|vote "protest"|S3 decision making|
|:spock-hand: or :wave:|ready to disconnect the call|call coming to an end|

in case of decision making or closing the call, everyone holds the sign until everyone else does - this way the situation is clear at a glance. In the past we used to show a sign for a moment, but then the quick responders hid their signals before the slow ones started signing and it was not clear what the situation is. Now we hold until everything is clear.

### 6.2 Communication channels

When you need to contact one of your Reef teammates, you have three channels to choose from: Slack, text message, and phone call.

First, we try to connect via Slack. Then, you can attempt a phone call and finally a text message or the other way around: a text message and then a phone call. Everyone has a description "phone -> SMS" or "SMS -> phone" under their avatar on Slack. Please choose which sequence suits you better, and we will respect it. We expect you to respect our contact preferences too.

We don't really use email for communications, as some people don't check it too often. If you need to be sure that someone sees your email, ping them on Slack.

### 6.3 Instant messengers

We use Slack and [Zoom](zoom.us) for business communications. You could use them in your browser, but for convenience, those are usually installed on **the host computer**.

#### Slack

In your company e-mail inbox is waiting for you message with the invitation to the team reeftechnologies.slack.com. Right after signing in, remember to fill field for your phone number in your account settings. Remember to **add your country-specific prefix number**, e.g. for Poland it is `+48`. This is important when someone is working from different countries. Another important information is the sequence "phone -> SMS" or "SMS -> phone" under your picture.

If you want to acknowledge a slack message, you can use `ctrl+shift+\, 1, enter` to quickly make a :+1: reaction. It is better than writing "ok", especially if there are many acknowledgers - reactions prevent half of the conversation from being filled with "ok" / "right" / "I see" messages.

Using the desktop Slack application has a benefit of marking you as "available" on all the slack servers. If you use a browser, you are shown as only on the tab that you currently have on your screen. Therefore you should use the desktop application, not the browser.


Channels:

- `#announcements` - general announcement channel, where we mostly welcome new people and announce our vacation periods to others
- `#default` - the default channel (if there is no dedicated channel for something, we use this one)
- `management` - senior non-technical management (hiring etc)
- `#opensource-candidates` - for discussion of what we should the opensource budget go to
- `#opensource-operations` - channel for opensource project development
- `#python` - were we sometimes discuss things such as the usage of walrus operator (`:=`), if it is better to use `raise` or `raise e` (as not everyone speaks python on #default)
- `#random` - all topics not directly related to work. If you read something interesting, don't hesitate to share with us.
- `#sales` - sales team sends notifications there about high quality leads, signed/terminated contracts etc
- `#security` - for things like [heartbleed](http://heartbleed.com/), [shellshock](https://www.symantec.com/outbreak/?id=shellshock), [krack](https://www.krackattacks.com/), [poodle](https://www.us-cert.gov/ncas/alerts/TA14-290A), [venom](http://venom.crowdstrike.com/), [ghost](https://blog.qualys.com/laws-of-vulnerabilities/2015/01/27/the-ghost-vulnerability), [meltdown/spectre](https://meltdownattack.com/)
- `sociocracy` - channel where sociocracy is coordinated (TODO: link to our S3 resources)
- `staff` - internal staff channel
- `va` - for delegating things to Virtual Assistants
- `#website` - discussion about our company website and its development

(private channel names don't start with a `#`)

the rest of the channels are customer- or project-specific. Only people involved in those projects are invited to the channels (for compartmentalization of IP).

[Slack's 2-step authorization setup](https://reeftechnologies.slack.com/account/settings)

Do not forget to say hello to us on #random :)


## 7. Rules

Here are some miscellaneous rules to follow, that were hard to put in some other categories, so they were all collected here:

- When a meeting starts, decide where to bill it.
- If you are a junior and you get stuck - ask for help. Really, really, really do. Do not spend 2 days trying to solve something a senior peer could help you go through in 10 minutes. Ask on the project slack and if that's not possible, use our `#default`. 
- If you are a developer, always perform basic functional testing (manually!) of your code and self-review your PR before you give it to a peer for review.
- If there is time where you are working but you are not able to bill it, escalate it immediately. We are trying to avoid it.
- It is forbidden to transfer any customer data through a non-encrypted channel. Use https and ssh tunnels when necessary.
- It is forbidden to store customer data on a non-encrypted device. Use fully encrypted systems (or virtual machines with images stored on encrypted partitions, where the host machine has a disabled swap file, or where swap is encrypted).
- Try to avoid task switching, especially project switching. Generally, we do our best to switch only on "break points", which are moments where you loose concentration on the task at hand, such as end of working day, going away for lunch, end of a task. This means that if a new task appears on a high priority project, you will not switch to it immediately, but rather only after finishing what you are doing, or first thing next day etc. Usually you should have at most one project switch per day.
- Avoid `ssh -A`, also called `ForwardAgent` (except for jb). If we use it on a server owned by a customer and it gets hacked, someone could potentially set a trap for us and authorize using our key. The better way is to use deployment keys on the customer server to access the repository.
- Do not use the company email for RSS, out of work stuff etc. This is to minimize distractions, which is pretty important for us.
- Try to use pomodoro, pair programming or other time organization method.

If any of the above is not clear, not optimal or if you are curious about the rationale behind the rule, speak up on `#default`.


### 7.1 Conferences

If there is a conference you'd like to attend and we agree that your attendance would be valuable for the company.
- The company fund your conference ticket
- The company fund your train/bus ticket
- The company fund your stay if the price is reasonable (airbnb seems to lead here)
- The company will not pay for the time spent on conference


## 8. Tools

### Pomodoro timer

[Marinara: Pomodoro Timer](https://chrome.google.com/webstore/detail/marinara-pomodoro-timer/lojgmehidjdhhbmpjfamhpkpodfcodef)


### Secure delete

The "srm" tool which securely deletes data. We use it to wipe the repos (despite encryption).

```bash
apt-get install secure-delete
```

To remove the docker containers created while working on a project, please use following command (get "dockerkill.sh" from bin directory of this repo):

```bash
./dockerkill.sh <container-name>
```

# FAQ - Frequently Asked Questions

##### _What's a virtual assistant?_
&nbsp;&nbsp;&nbsp; It's like an office manager for a company that doesn't have an office.

##### _Do we have CI?_
&nbsp;&nbsp;&nbsp; So far we used wercker because it is free for github private, but we are scheduled to try to switch over to GitLab.

##### _How to re-bill my time to a different project?_
&nbsp;&nbsp;&nbsp; In case you billed time to a wrong project, [here](docs/Hubstaff.md) is a step-by-step guide how to fix it.

##### _Why all communication (exept 1to1) is in English?_
&nbsp;&nbsp;&nbsp; Pawel: Let me tell you a story. There was an Python office in Warsaw in which most employees were from Poland, but eventually the company started hiring foreigners, so there were some of them in the office too. They could not understand the conversation in the kitchen, which was awkward for both sides, so a rule was mandated, to switch to English as soon as a foreigner enters the room.

One day, a foreigner walked through the corridor and overheard laughter in the kitchen. As soon as he arrived, however, everyone went silent, finishing the conversation. Turns out that switching the language mid-conversation is not an effortless task. In that company, foreigners were discriminated every day. They were excluded from gossip and whenever they entered the room, with high probablility they have stopped any conversation that was ongoing at that place.

We've had a foreigner with us for a few days, so we switched then and just didn't switch back. If we did, the next one joining the company could be a source of resentment. There would also be a problem with chat history. One of the things we proudly offer to members of our staff, is respect. I like to think that by keeping communication in English, we show respect to the person that is one day going to join the company and have as little friction as possible.

UPDATE: now we have several staff members who don't know a word of Polish, so the story above is no longer relevant for the purpose of explaining why we communicate in English... but I am leaving it here because it shows a part of our culture: it's ok for all of us to be slightly inconvenienced, to make sure that we properly respect another staff member, even when he or she does not exist yet.


# Handbook document improvement

If you find some key knowledge (not covered by NDA) useful for the next candidate is missing from this document, please create a pull request. Log time spend on this to `RT / other internal development`.


# Congratulations

You've done all the things you need to get started. Good luck!

Now head on to [training](training.md)!
