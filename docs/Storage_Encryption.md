# Storage Encryption

There are two ways to encrypt the storage of your application.
The first is to encrypt the entire storage, and the second is to encrypt only encrypt sensitive data.

If you are a developer, you are required to use [Full Disk Encryption](#full-disk-encryption).
Otherwise, you may fallback to [Volume Encryption](#volume-encryption), but we strongly recommend using [Full Disk Encryption](#full-disk-encryption) anyway.

Our requirement for FDE for developers arises from its ability to securely store Docker images, potentially containing client code, 
which often can land outside your home directory.
Solely encrypting the home directory would leave these sensitive data vulnerable.

Due to the large space utilization of our projects, the minimum storage size is **50 GB** (recommended size:
**100 GB**).

## Full Disk Encryption

### Virtual machine

In any Virtual Machine, you can achieve FDE-like setup by putting the VM image on an Encrypted Volume created using [VeraCrypt or similar software](#volume-encryption).

### Windows

Use BitLocker - requires a TPM hardware module on non-Pro versions of Windows.
You can check if is available and/or configured like [this](https://www.dell.com/support/kbdoc/en-us/000125409/how-to-enable-or-disable-bitlocker-with-tpm-in-windows?lwp=rt#TOC03).

### MacOS

Use [FileVault](https://support.apple.com/guide/mac-help/encrypt-mac-data-with-filevault-mh11785/mac).

### Linux

LUKS is the Linux standard for disk encryption, and most installer tools allow you to use it to encrypt the disk during installation.
Please note, the boot partition might not get actually be encrypted, but this is considered acceptable risk.

## Volume Encryption

Due to its ease of use, we recommend **VeraCrypt**, for which a simple tutorial can be found [here](VeraCrypt.md).
