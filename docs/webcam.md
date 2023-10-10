# Webcam flickering

### Windows

if your web camera is blinking on video calls: https://apps.microsoft.com/store/detail/windows-camera/9WZDNCRFJBBG

In this app you can click on the settings gear on the top left, click video settings and there you have a "flicker reduction" option that you should select to 50Hz in Europe and Asia, but 60Hz in the Americas.
Then you have to change it to appropriate value every time you travel to a country with a different frequency in the power grid.

You'd think in 2023 a modern operating system, driver, video chat software _or something_ should detect camera flickering and set the filter appropriately, but no :)

### Linux

Albeit, we have yet to see a flickering camera on modern Linux, if you encounter it, you can try to set the power line frequency manually:

    v4l2-ctl --set-ctrl=power_line_frequency=1  # 50Hz (common in Europe), use 2 for 60Hz

To see what other options you have, run:

    v4l2-ctl -L
