# HP LaserJet Pro MFP M127fw

## Ubuntu

I think printing worked out of the box. Or may have required printer discovery via IP but with little setup afterwards. Scanning also worked once printing worked.

## Arch

https://wiki.archlinux.org/title/CUPS/Printer-specific_problems#HP

Installed both `hpuld` and `hplip-plugin` because `lpinfo -m` listed driver with "requires proprietary plugin"

If printer was already listed in gnome then remove and re-add through discovery or IP.

### Scanning

Add `smfp` backend to `/etc/sane.d/dll.conf`

XSane does not pickup scanner automatically even when printer driver is installed and printing works. To scan:

https://wiki.archlinux.org/title/SANE/Scanner-specific_problems#HP

`hp-makeuri 192.168.X.XXX` to create HP-specific URL that looks like this `"hpaio:/net/HP_LaserJet_Pro_MFP_M127fw?ip=192.168.X.XXX"`

Then run 

```bash
xsane "hpaio:/net/HP_LaserJet_Pro_MFP_M127fw?ip=192.168.X.XXX"
```

#### XSane Usage

For scanning text documents use:

* Scan Mode: Gray
* Source Medium Type: full color range
* Scan resolution: 100
* Scan source: ADF (for document feeder)

To scan multiple pages you **must** set number of pages to scan manually, regardless of "project type".

* Use **Save** to scan each page to individual pdf files
* Use **Multipage** to scan pages into a single pdf