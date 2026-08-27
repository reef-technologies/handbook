## Ensure you have a Secure Work Environment

For Secure Work Environment we recommend a Virtual Machine or dual-boot.
This ensures a clear segregation between your professional and personal digital spaces, preventing accidental cross-access or data leaks involving customer data.
In any case, [Full Disk Encryption](storage-encryption.md) is required.

Our requirement for FDE arises from its ability to securely store Docker images, potentially containing client code, which often can land outside your home directory.
Solely encrypting the home directory would leave these sensitive data vulnerable.

Lastly, Docker containers, which store and run client code, are to be considered secret.
Accessing these containers from personal environments is prohibited to maintain a robust security structure, preventing any potential cross-access and preserving the integrity of our client's data.

As for personal/work separation, we recommend using a separate machine (Virtual or physical) or dual-booting.
It is not recommended, but you may use multi-user setup to isolate personal and work-related applications, but take special care as it is hard to prevent personal accounts, with for example, `docker` access from accessing ANY other account on the system.

## Helper files

Optional helper files are available in this repository if you’d like to use them in your setup:
`.bashrc`, `.gitconfig`, and `configure-keychain.sh`.
