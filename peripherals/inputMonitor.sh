#!/bin/sh

# Monitors and outputs mouse/kb events
# based on FB comment in Keychron Linux User Group by Jedd Rashbrooke
# https://www.facebook.com/groups/Keychronlinux/posts/1116365279091339/?comment_id=1116399915754542&__cft__[0]=AZWXlm6iSyJvsuI7y41gLObXwQ7WGjhTiPr0oPkqniiIVnB53xlvChAkUyzI16mBEEZsoqB6S_tFcJ6o6xiVS1qszXA5RAa7WOwLDvfsUwa2ndNAhiTAiAfT4VHUU_BMKdBfhUa9hBRI1WYteBvzviXLAYcal3SRtugSJHTZ5KzsjLu_Xo6wGQ0EemgNZuK4w9Q&__tn__=R]-R
xev | grep -A2 --line-buffered '^KeyRelease' | sed -n '/keycode /s/^.*keycode \([0-9]*\).* (.*, \(.*\)).*$/\1 \2/p'
