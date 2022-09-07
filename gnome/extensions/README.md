# Restoring individual extensions

Should only be need to done if general settings backup/restore does not work

https://askubuntu.com/questions/1178580/where-are-gnome-extensions-preferences-stored

Each xml file goes in its respective extensions folder in `~/.local/share/gnome-shell/extensions` under `schemas` folder

After adding them recompile settings:

```
glib-compile-schemas ~/.local/share/gnome-shell/extensions/<extension directory>/schemas
```
