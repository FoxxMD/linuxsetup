# Logical Volume Manager

Used to create virtual physical/logical block-level volumes that can be used as the backing storage for Virtual Machines

https://wiki.archlinux.org/title/LVM

## Basic Operations

https://linuxhandbook.com/lvm-guide/

## Snapshots

https://wiki.archlinux.org/title/LVM#Snapshots

For a "full" incremental snapshot (one that can change entirely but is not written until original files change) create a snapshot of the origin (or previous snapshot) with the **size** being the same size as the target volume

```shell
lvcreate --size 500G --snapshot --name win10-snap1 /vmstore/win10
```

Then in virt-manager change VirtIO Disk1 XML `<source>` to the new snapshot `<source dev="/dev/mapper/vmstore-win10--snap1" .../>`

## Restoring Snapshot

https://wiki.archlinux.org/title/LVM#Configuration
