# Firefox

https://wiki.archlinux.org/title/firefox

## Hardware Acceleration

https://wiki.archlinux.org/title/firefox#Hardware_video_acceleration

Install driver for using nvidia CUDA for acceleration

```bash
yay -S libva-nvidia-driver
```

[Set `about:config` options](https://github.com/elFarto/nvidia-vaapi-driver/#firefox)

https://wiki.archlinux.org/title/Desktop_entries#Modify_environment_variables

Copy system-wide `/usr/share/applications/firefox.desktop` to `~/.local/share/applications` and then modify `Exec` like so:

```
Exec=env LIBVA_DRIVER_NAME="nvidia" MOZ_DISABLE_RDD_SANDBOX=1 /usr/lib/firefox/firefox %u
```
Then run

```
update-desktop-database ~/.local/share/applications
```
So system gets the updated entry and restart firefox, if open.

## Performance Improvements

* Improves general performance
* Set scrolling to be like chrome (my preference)

https://github.com/yokoffing/Betterfox

Drop [`user.js`](/programs/firefox/user.js) in the **Proile Directory** listed at [`about:support`](about:support)
