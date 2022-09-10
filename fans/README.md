fan1 (pwm1) = bottom + rear
fan2 (pwm2) = cpu
fan3 (pwm3) = side + top

```
# This file was created by Fancontrol-GUI at /etc/fancontrol
INTERVAL=10
DEVPATH=hwmon0=devices/pci0000:00/0000:00:18.3 hwmon2=devices/platform/nct6775.656 
DEVNAME=hwmon0=k10temp hwmon2=nct6792 
FCTEMPS=hwmon2/pwm1=hwmon0/temp1_input hwmon2/pwm2=hwmon0/temp1_input hwmon2/pwm3=hwmon0/temp1_input 
FCFANS=hwmon2/pwm1=hwmon2/fan1_input hwmon2/pwm2=hwmon2/fan2_input hwmon2/pwm3=hwmon2/fan3_input 
MINTEMP=hwmon2/pwm1=30 hwmon2/pwm2=30 hwmon2/pwm3=30 
MAXTEMP=hwmon2/pwm1=70 hwmon2/pwm2=71 hwmon2/pwm3=70 
MINSTART=hwmon2/pwm1=150 hwmon2/pwm2=150 hwmon2/pwm3=150 
MINSTOP=hwmon2/pwm1=98 hwmon2/pwm2=130 hwmon2/pwm3=57 
MINPWM=hwmon2/pwm1=0 hwmon2/pwm2=130 hwmon2/pwm3=57 
MAXPWM=hwmon2/pwm1=177 hwmon2/pwm2=222 hwmon2/pwm3=131 
AVERAGE=hwmon2/pwm1=1 hwmon2/pwm2=1 hwmon2/pwm3=1 
```
