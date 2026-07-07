# Developer Environment Setup

This guide will show how to set up a standard, secure work environment for software development.

## Ensure you have a Secure Work Environment

For Secure Work Environment we recommend a Virtual Machine or dual-boot with [Full Disk Encryption](Storage_Encryption.md#full-disk-encryption) enabled.
This ensures a clear segregation between your professional and personal digital spaces, preventing accidental cross-access or data leaks involving customer data.

If you have previously used your reef.pl email address (or any associated) on a personal environment, make sure to remove it from all devices and accounts.
Only exception being [secure mobile devices](../README.md#storage-encryption-and-secure-work-environment).

Our preference for FDE arises from its ability to securely store Docker images, potentially containing client code, which often can land outside your home directory.
Solely encrypting the home directory would leave these sensitive data vulnerable.

Lastly, Docker containers, which store and run client code, are to be considered secret.
Accessing these containers from personal environments is prohibited to maintain a robust security structure, preventing any potential cross-access and preserving the integrity of our client's data.

As for personal/work separation, we recommend using a separate machine (Virtual or physical) or dual-booting.
It is not recommended, but you may use multi-user setup to isolate personal and work-related applications, but take special care as it is hard to prevent personal accounts, with for example, `docker` access from accessing ANY other account on the system.

# System setup

If you are undecided, by default we recommend going with Virtual Machine setup.

As for the work environment Operating System, we recommend using a Linux-based system.
Guide itself is written with Ubuntu-based distros (e.g. [Linux Mint](https://www.linuxmint.com/download.php)) in mind.
Using such will help save time, but in the end, it is individual's responsibility to maintain a productive working environment.

## 1. Virtual Machine setup

> **Note:** Skip if you are using separate work physical machine or dual-booting.

We generally recommend [VirtualBox](https://www.virtualbox.org/).
A step-by-step guide to creating a virtual machine can be found [here](VirtualBox.md).

Apple hardware support in VirtualBox is dire, so the recommended virtualization solution is currently QEMU-based, eg.
[UTM](https://getutm.app/) (+ [guest system installation tutorial](https://www.youtube.com/watch?v=O19mv1pe76M))

## 2. Installing the necessary packages in your work environment

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

## 3. Initial configuration (bash, git, ssh)

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
