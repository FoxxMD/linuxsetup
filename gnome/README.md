# Version

Currently using 3.36, should be able to upgrade to gnome 42

# Extensions

[Gnome Extensions CLI](https://github.com/essembeh/gnome-extensions-cli) For easy updating/search/install without having to use extensions website

| Extension                                                                                                                 | Description                               | Requirements      |
|---------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|-------------------|
| [Dash To Panel](https://extensions.gnome.org/extension/1160/dash-to-panel/)                                               | Moves dash into main panel like icon tray | Shell 42 or older |
| [Clipboard Indicator](https://extensions.gnome.org/extension/779/clipboard-indicator/)                                    | Adds clipboard indicator to panel         | Shell 42 or older |
| [Emoji Selector](https://github.com/FelipeFTN/emoji-copy)                                                                 | Emojis in dash                            | Shell 42 or older |
| [Reorder workspaces](https://extensions.gnome.org/extension/3685/reorder-workspaces/)                                     |                                           | Shell 42 or older |
| [Sound input/output chooser](https://extensions.gnome.org/extension/906/sound-output-device-chooser/)                     |                                           | Shell 42 or older |
| [Application Volume Mixer](https://extensions.gnome.org/extension/3499/application-volume-mixer/)                         |                                           | Shell 42 or older |
| [Vitals](https://extensions.gnome.org/extension/1460/vitals/)                                                             | Hardware and system stats                 | Shell 42 or older |
| [Nvidia Stats](https://extensions.gnome.org/extension/1320/nvidia-gpu-stats-tool/)                                        |                                           | Shell 42 or older |
| [Window is Ready Notification Remover](https://extensions.gnome.org/extension/1007/window-is-ready-notification-remover/) |                                           | Shell 42 or older |
| [Tiling Assistant](https://extensions.gnome.org/extension/3733/tiling-assistant/)                                         |                                           | Shell 43 or older |
| [V-Shell (Vertical Workspaces)](https://github.com/G-dH/vertical-workspaces)                                              |                                           |                   |
| [Quick Settings Tweaker](https://github.com/qwreey75/quick-settings-tweaks)                                               |                                           |                   |
| [UPower Battery](https://github.com/codilia/upower-battery)                                                               |                                           |                   |


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

# VPN

https://wiki.archlinux.org/title/NetworkManager

## L2TP

https://wiki.archlinux.org/title/Openswan_L2TP/IPsec_VPN_client_setup

```bash
yay -S networkmanager-l2tp strongswan
systemctl enable --now strongswan.service
```

## Wireguard

https://wiki.archlinux.org/title/WireGuard
https://wiki.archlinux.org/title/User:Cmsigler/Wireguard_Configuration_Guide

https://www.reddit.com/r/archlinux/comments/k9dxgn/networkmanager_and_wireguard_connection/


https://www.reddit.com/r/archlinux/comments/k26vwu/wireguard_vpn_in_gnome/

Note: config may differ from regular NetworkManager 
* https://bbs.archlinux.org/viewtopic.php?id=274459
* https://bbs.archlinux.org/viewtopic.php?id=276161
```bash
yay -S networkmanager-wireguard-git
```

## Slack

On wayland the AUR `slack-desktop` package does not work for screen sharing. Instead there is a working, pinned, version of slack on flathub that can be used for now:

https://github.com/flathub/com.slack.Slack/issues/101#issuecomment-1523302824
https://aur.archlinux.org/packages/slack-desktop-wayland#comment-911902