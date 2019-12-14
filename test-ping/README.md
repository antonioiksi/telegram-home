# Subservice-ping - check ip and save into file

## How to use
```
wget http://10.8.0.6:3000/?host=10.0.0.32
```


## Install as service systemctl
View file `test-ping.service`

```bash
#stop service
systemctl stop test-ping.service

#start service
systemctl start test-ping.service

#view log
journalctl -lf -u test-ping.service
```

