# Security rules

Here are some basic security rules for all employees to maintain.

## Secure work environment setup

If you are a developer, follow [Secure work environment setup for developers](work-environment-devs.md) guide.

All other roles are just required to use [Storage Encryption](Storage_Encryption.md).

Use of company accounts and services outside the secure work environment is prohibited, with 2 exceptions:

* [Mobile devices](#mobile-devices) if they are [properly secured](#mobile-devices)
* Gather is consider safe, using one-time email code to log in.

## Company data storage

All data pertaining to the company must be either stored in the cloud 
(specifically, Google Drive/Docs/Sheets within the company domain and other services used in the company that are properly secured e.g., Notion, GitHub...) 
or on encrypted media (an encrypted volume or drive).
This excludes data categorized as being of no value or already publicly available.

The rules above apply also to the clients' data unless they explicitly specified other requirements (see the Internal Handbook).

Docker containers, which store and run client code, are to be considered secret.
Accessing these containers from personal environments is prohibited to maintain a robust security structure, 
preventing any potential cross-access and preserving the integrity of our client's data.

## Mobile devices

If you plan to connect your mobile device to any work-related accounts, first make sure:

- your device is password-protected - i.e. has a passcode or a biometric lock
- is encrypted - modern Apple and Android 10+ devices support encryption, but older devices or ones without configured passcode might not
- is actively supported - i.e. receive regular security updates (check last update date in system settings and with your device provider)

## External LLMs

Most clients explicitly agreed to the use of non-local LLMs. 
Ask a lead developer on the given project what tools you can use for which type of work - 
there are a couple of modules which should never be shown as context for an external LLM.

## 2FA

2FA is mandatory everywhere it is possible to use it (more explanation below).
We recommend Twilio's [Authy](https://authy.com/) because it has a PIN code and end-to-end encrypted cloud backup.

Frequently Asked Questions:

Q: Who does the 2FA rule apply to?
\
A: Everyone. It's in the contract, BTW.

Q: Will the client pay for the time spent on configuring 2FA?
\
A: Happily.

Q: Do I still need to set up service-specific 2FA if I use Google SSO?
\
A: No. Google SSO (with 2FA enabled on your Google account) already covers this, as long as password-based login is disabled.
