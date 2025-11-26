# Developer Environment Setup

This guide will show how to set up a standard, secure work environment for software development.

# System setup

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
