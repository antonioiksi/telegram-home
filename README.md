# telegram-home
smart home with telegram bot


## Install gitlab runner
[Link to the tutorial here](https://blog.ruanbekker.com/blog/2018/12/20/setup-a-gitlab-runner-on-your-own-server-to-run-your-jobs-that-gets-triggered-from-gitlab-ci/)

Find out cpu `cat /proc/cpuinfo` and os and download package (https://gitlab-runner-downloads.s3.amazonaws.com/latest/index.html)[https://gitlab-runner-downloads.s3.amazonaws.com/latest/index.html]

```$bash
# Ubuntu
wget https://gitlab-runner-downloads.s3.amazonaws.com/latest/deb/gitlab-runner_amd64.deb


# Raspbean (ZERO -  package architecture (armhf)
wget https://gitlab-runner-downloads.s3.amazonaws.com/latest/rpm/gitlab-runner_armhf.rpm

LGskWrd1vxUS_gy1-a_K
# curl 
dpkg -i gitlab-runner_<arch>.deb
```

Configure runners for execute remote actions
```
gitlab-runner register

```

Token is located on page (from current project) Settings/ CI/DI / then EXPAND RUNNERS and find "Set up a specific Runner manually"
