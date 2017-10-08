# Introduction

Welcome onboard. This document will help you prepare your development environment step-by-step.


# Foundation rules of the company

This should have been covered on a recruitment call, but it is very important, so here is a reminder


## Core values

 - happy customers
 - high quality code in the repository

That's it.


## Deadlines and estimates

Developer working on a project **must never** discuss deadlines or give estimates (even rough) to a customer. We have project managers for that. Why?

As it turns out, developers are usually optimistic about their estimates. They are also Good People (at least the ones that we hire), so when the customer asks politely if a developer can help him, developer will usually agree. Delivering on such promise is a problem. This fails more often than not.

Enter the project managers. Those are people particularly skilled at risk management, reduction of scope to what is really needed etc. Also, they enjoy talking to the customer. Therefore we let them take responsibility for the deadlines - they take care about availability of developers, risk, schedule and so on. This way everyone is happier. Just to make it clear, if a developer would ever provide an estimate or a deadline, it is considered invalid. The customers know this too, so they shouldn't ask and you shouldn't reply - just redirect them to a project manager, tell them you'll contact him/her and produce an accurate estimate as soon as possible.


## Projects

We avoid fixed scope projects. TODO: why

We will not accept a project targeted to manipulate and rip people off from their savings such as insurance+retirement funds.

There has been a point here about armed rocket navigation systems, but then someone said a low quality navigation system may cause the rocket to miss (hit something/someone else), then the attacker would fire another one (and maybe miss again due to the same bug). So that point is no longer clearly a no-go.


## Safety of your workspace

All data related to company **must** be stored in the virtual machine, image of which is stored on an encrypted volume. This practice prevents potential data leaks, i.e. when your computer get stolen. There are a few exceptions, you will read about them later.

You should already have an email account in `reef.pl` domain. Use this only this email (and associated accounts) on the virtual machine - this way your private and work accounts will never mix access or customer data.

The relatively high security level we keep, gives us a possibility to work for financial institutions (or just any institutions that treat their security seriously). Funny story here: Pawel talked to a bank and they wanted him to work on site. Pawel described our security model and when he finished, an engineer from the bank made a comment "they have more security at their home offices than we have here!". The manager looked at the engineer and he was not happy ;)


# Environment preparation

## Time tracking

### Sign in to e-mail account

The first step you will take is to sign in to your new Google account at `reef.pl`. All information including credentials have been sent to your personal e-mail address.

**Caution!**

First sign in you make is from the host computer, as it is necessary to install the time tracking application. This is the one and only situation when you logging in from your host machine. 


### Time tracking app

We appreciate transparency, so are using the application that takes regular screenshots during your work. Its installation is the first step in preparing your environment to work.

Please install it and then accept the invitation received on your email address.

The application can be downloaded from here: [Hubstaff Tracker](https://app.hubstaff.com/download)

#### Bugs

Workaround for window resize (most project names are like `Internal / some...` - it is hard to find your project):
you click `>>` then you can resize left pane a little bit, then `<<` - repeat several times - now you can read full project names.

It tracks time per 10-minute slot per project, so if you log some time in the given 10-minute period, switch to another project and switch back to the first one, it cannot really be distinguished (number and order of such switches is not recorded).

Another issue is that manually logged time in the given slot cannot co-exist with any application-tracked time, so if you work from 14:01 to 14:02 and then log manual time for 14:05 to 14:10, the manual time entry will eat the tracked time. It's quite difficult to run into this, but it happened at least once to us.


### Why do we use a time tracker

#### So that we know how much you should be paid

We all have hourly rates

#### So that we know how much we should charge the customer

You may log some time to `INTERNAL / *`, which is paid by the company and not by a customer

#### So that we know how much we should charge which customer

Assuming that you somehow logged zero time to `INTERNAL / *`, when you work on multiple projects, we want to know how much time was worked for which customer so that we can bill them for it appropriately. Billing a customer inaccurately goes against a foundation of the company ("happy customers", see above).

#### So that we know how much VAT tax we should pay

If a customer is from the same country as we are, the invoice we give him has a non-zero VAT tax. Generally, that doesn't seem to ever happen. Otherwise, when the customer is from a different country, invoice has a zero VAT tax, but the vendors (you) have taxed invoices, so we (as a company) need to reclaim the VAT tax in an appropriate amount. We don't want to attempt to reclaim too much or too little, but just right. Generally, we don't want to mess with the tax agency and prefer to pay a greater tax when in doubt, but there is too much of VAT to ignore it.

#### It can save the contract and it can save you

Sometimes the work doesn't go as well as it should for an amount of time that cannot be ignored. If you have logs from the tracker that clearly show you've been working on it, then it's a good thing. Customer doesn't see us work in their office, so if there are no results, it is difficult to say whether someone is working hard but is fighting through a challenge, or whether somoene is not trying hard enough. As of writing this, the number of times when tracker was instrumental in preventing a rapid degradation of a relationship with a customer is: **4**.

Trust is a fragile thing and the time tracker helps keeping it in a good shape.


#### It is becoming an industry standard

We don't really have a choice, it's going to happen whether we want it or not.


# Configuring the environment

Once you have installed time tracking app, it's time to prepeare your environment.

## 1. Create an encrypted volume (host)	

Due to the variety of operating systems used by our team, we do not impose a specific solution. It depends on what software you use. For Linux systems it can be eg LUKS.

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
	virtualenvwrapper
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

Create a new account for GitHub. The suggested username is the first letter of the first name and the full last name, and the suffix `-reef`, eg. ` jkowalski-reef`.

2-step authorization should enabled aswell.

[GitHub's 2-step authorization setup](https://github.com/settings/two_factor_authentication/configure)



## 6. Instant messengers

We use Slack and Skype for business communications. You can also use them in your browser, but for convenience, they are installed on **the host computer**.

### Slack

In your company e-mail inbox is waiting for you message with the invitation to the team reeftechnologies.slack.com.

Using the desktop Slack application has a benefit of marking you as "available" on all the slack servers. If you use a browser, you are shown as only on the tab that you currently have on your screen.


Channels:

- `#announcements` - business arrangements
- `#default` - the default channel (if there is no dedicated channel for something, we use this one)
- `management` - senior non-technical management (hiring etc)
- `#opensource-candidates` - for discussion of what we should the opensource budget go to
- `#random` - all topics not directly related to work. If you read something interesting, don't hesitate to share with us.
- `#reefmerge` - opensource student project related to conflict resolution
- `#reefperf` - opensource student project related to cloud performance benchmarking
- `#sales` - sales team sends notifications there about high quality leads, signed contracts etc
- `staff` - internal staff channel
- `tpm` - technical project managers (think Senior Developers) (allocation of engineers to projects etc)
- `va` - for delegating things to Virtual Assistants

(private channel names don't start with a `#`)

the rest of the channels are customer- or project-specific. Only people involved in those projects are invited to the channels (for compartmentalization of IP).

[Slack's 2-step authorization setup](https://reeftechnologies.slack.com/account/settings)

Do not forget to say hello to us on #random :)

### Skype

For Skype you can use your private account. If you do not want to do this, create a new account in the same format as your GitHub account.

## 7. Rules

Here are some rules to follow:

- When a meeting starts, decide where to bill it.
- If you are a junior and you get stuck - ask for help. Really, really, really do.
- If there is time where you are working but you are not able to bill it, escalate it immediately. We are trying to avoid it.
- Do not use the company email for RSS, out of work stuff etc. This is to minimize distractions, which is pretty important for us.
- Use pomodoro, pair programming or other time organization method.

## 8. Tools

### Pomotodo timer

[Marinara: Pomodoro Timer](https://chrome.google.com/webstore/detail/marinara-pomodoro-timer/lojgmehidjdhhbmpjfamhpkpodfcodef)


### Secure delete

The "srm" tool which securely deletes data. We use it to wipe the repos (despite encryption).

```bash
apt-get install secure-delete
```

# FAQ - Frequently Asked Questions

##### _What's a virtual assistant?_
&nbsp;&nbsp;&nbsp; It's like an office manager for a company that doesn't have an office.

##### _Do we have CI?_
&nbsp;&nbsp;&nbsp; So far we used wercker because it is free for github private, but we are scheduled to try to switch over to GitLab.
  
##### _How to re-bill my time to a different project?_
&nbsp;&nbsp;&nbsp; In case you billed time to a wrong project, [here](docs/Hubstaff.md) is a step-by-step guide how to fix it.


# Congratulations

You've done all the things you need to get started. Good luck!

Now head on to [training](training.md)!
