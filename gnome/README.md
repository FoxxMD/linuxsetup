# Version

Currently using 3.36, should be able to upgrade to gnome 42

# Extensions

|                                                         Extension                                                         |                        Description                         |              Requirements               |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|-----------------------------------------|
| [Dash To Panel](https://extensions.gnome.org/extension/1160/dash-to-panel/)                                               | Moves dash into main panel like icon tray                  | Shell 42 or older                       |
| [Clipboard Indicator](https://extensions.gnome.org/extension/779/clipboard-indicator/)                                    | Adds clipboard indicator to panel                          | Shell 42 or older                       |
| [Emoji Selector](https://extensions.gnome.org/extension/1162/emoji-selector/)                                             | Emojis in dash                                             | Shell 42 or older                       |
| [Put Windows](https://extensions.gnome.org/extension/39/put-windows/)                                                     | Window management shortcuts (USE TILING ASSISTANT INSTEAD) | Shell 3.38 or older, No wayland support |
| [Reorder workspaces](https://extensions.gnome.org/extension/3685/reorder-workspaces/)                                     |                                                            | Shell 42 or older                       |
| [Sound input/output chooser](https://extensions.gnome.org/extension/906/sound-output-device-chooser/)                     |                                                            | Shell 42 or older                       |
| [Application Volume Mixer](https://extensions.gnome.org/extension/3499/application-volume-mixer/)                         |                                                            | Shell 42 or older                       |
| [Vitals](https://extensions.gnome.org/extension/1460/vitals/)                                                             | Hardware and system stats                                  | Shell 42 or older                       |
| [Nvidia Stats](https://extensions.gnome.org/extension/1320/nvidia-gpu-stats-tool/)                                        |                                                            | Shell 42 or older                       |
| [Window is Ready Notification Remover](https://extensions.gnome.org/extension/1007/window-is-ready-notification-remover/) |                                                            | Shell 42 or older                       |
| [Tiling Assistant](https://extensions.gnome.org/extension/3733/tiling-assistant/)                                         |                                                            | Shell 43 or older                       |


# Tweaks

https://wiki.gnome.org/Apps/Tweaks 3.34.0, currently

# Settings

# Backup/Restore

https://askubuntu.com/a/1056392/1133910

From home directory, to backup

```bash
dconf dump / > saved_settings.dconf
```

From home directory, to restore

```bash
dconf load / < saved_settings.dconf
```
