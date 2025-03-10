# Virtual machine configuration

**For Windows 10 Pro host:** You will need to disable HyperV

![](images/hyperv_windows/hyperv_windows_01.png)

Make sure that **Hyper-V is NOT checked**, so deselect it if it's selected like below. Also deselect **Virtual Machine Platform**, **Windows Hypervisor Platform** and **Windows Sandbox**.

![](images/hyperv_windows/hyperv_windows_02.png)

**Virtual machine configuration**

![](images/virtualbox_01.png)

![](images/virtualbox_02.png)

![](images/virtualbox_03.png)

![](images/virtualbox_04.png)

![](images/virtualbox_05.png)

Note that the virtual machine disk file should reside on the encrypted volume!

![](images/virtualbox_06.png)

Depending on your computer hardware, it is recommended to increase the number of cores used by the virtual machine and memory for graphics.
Default of 16MB only allows for 1080p and if you try to go above that, you'll get a black screen.
32MB is enough to display more, but 128MB is recommended.
PAE/NX might be disabled by default - make sure it's enabled (impacts performance).

![](images/virtualbox_07.png)

![](images/virtualbox_08.png)

Guide on resizing linux partitions in case you'd need to grow the device can be found [here](https://www.vultr.com/docs/block-storage#:~:text=Resize%20the%20filesystem%20-%20Linux)

VirtualBox guest additions from the "CD" that comes with VirtualBox works better than what you can get from `apt`.

Another thing which should be done is installing Extension Pack - it is needed at least to allow guest machine to access laptop camera. [Here](https://docs.oracle.com/en/virtualization/virtualbox/6.0/user/intro-installing.html) is detailed instruction. Then camera can be enabled in Devices menu of VirtualBox guest.

If performance is weak here are some tips to try for increasing it:
 * Change power plan to high performance - for host and guest machine.
 * Run VirtualBox as administrator.
 * Do not use too many processors (4 should be enough).
