
|                                                                         App                                                                          |               Description               | Requirements |
|------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------|
| [Tilix](https://gnunn1.github.io/tilix-web/)                                                                                                         | Tiling terminal                         |              |
| [Flameshot](https://flameshot.org/)                                                                                                                  | Screenshot utility                      |              |
| [Barrier](https://github.com/debauchee/barrier)                                                                                                      | KVM                                     |              |
| [FanControl-GUI](https://github.com/Maldela/fancontrol-gui)                                                                                          | GUI for contolling fancontrol           |              |
| [Dbeaver](https://dbeaver.io/download/)                                                                                                              |                                         |              |
| [Superpaper](https://github.com/hhannine/superpaper)                                                                                                 | For multimonitor wallpaper              |              |
| [Piper](https://github.com/libratbag/piper)                                                                                                          | Logitech mouse control                  |              |
| [nvm](https://github.com/nvm-sh/nvm)                                                                                                                 | manage node version                     |              |
| [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)                                                             |                                         |              |
| [AWS SSM Plugin](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html#install-plugin-linux) |                                         |              |
| [Intellij](https://www.jetbrains.com/idea/)                                                                                                          |                                         |              |
| [Webstorm](https://www.jetbrains.com/webstorm/)                                                                                                      |                                         |              |
| [Flatpak](https://flatpak.org/)                                                                                                                      |                                         |              |
| [Flatseal](https://flathub.org/apps/details/com.github.tchx84.Flatseal)                                                                              | To manager permissions for flatpak apps |              |
| [Systemdgenie](https://github.com/KDE/systemdgenie)                                                                                                  | GUI for managing systemd                |              |
| [Dconf editor](https://wiki.gnome.org/Apps/DconfEditor)                                                                                              | low-level gnome settings editor         |              |

# Firefox

https://wiki.archlinux.org/title/firefox

# Hardware Acceleration

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
