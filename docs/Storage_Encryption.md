# Storage Encryption

There are two ways to encrypt the storage of your application.
The first is to encrypt the entire storage, and the second is to encrypt only encrypt sensitive data.
We recommend them in that order, but we understand that sometimes it is not possible to encrypt the entire storage, so feel free to fallback to [Volume Encryption](#volume-encryption).

If you role requires a Secure Work Environment, you are required to use [Full Disk Encryption](#full-disk-encryption).

Due to the large space utilization of our projects, the minimum storage size is **50 GB** (recommended size:
**100 GB**).

## Full Disk Encryption

### Virtual machine

In any Virtual Machine, you can achieve FDE-like setup by putting the VM image on an Encrypted Volume created using [VeraCrypt or similar software](#volume-encryption) or directly in VirtualBox by using the [VirtualBox Extension Pack](https://docs.oracle.com/en/virtualization/virtualbox/7.0/user/AdvancedTopics.html#diskencryption).

### Windows

Use BitLocker - requires a TPM hardware module on non-Pro versions of Windows.
You can check if is available and/or configured like [this](https://www.dell.com/support/kbdoc/en-us/000125409/how-to-enable-or-disable-bitlocker-with-tpm-in-windows?lwp=rt#TOC03).

### MacOS

Use [FileVault](https://support.apple.com/guide/mac-help/encrypt-mac-data-with-filevault-mh11785/mac).

### Linux

LUKS is the Linux standard for disk encryption, and most installer tools allow you to use it to encrypt the disk during installation.
Please note, the boot partition might not get actually be encrypted, but this is considered acceptable risk.

## Volume Encryption

Due to its ease of use, we recommend **VeraCrypt**, for which a simple tutorial can be found [here](https://github.com/reef-technologies/handbook/blob/master/docs/VeraCrypt.md).
