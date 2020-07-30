## Container Image

Docker hub: [anntey/hashgenerator](https://hub.docker.com/repository/docker/anntey/hashgenerator).

## Delpoy with kubectl

```zsh
$ kubectl create deployment hashgenerator-first --image=anntey/hashgenerator
$ kubectl logs -f hashgenerator-first-5c6fb9c9d5-jjvvm
```

```
> 01-hash-generator@1.0.0 start /app
> node index.js

2020-07-30T08:37:13.125Z: 4c6b041b-b997-4e1c-9cfc-6917a8a19dd0
2020-07-30T08:37:18.139Z: dfbf90cd-0196-4842-93f3-7b33517ce0d6
2020-07-30T08:37:23.144Z: aa7e561a-3ae6-40ac-a693-684d2dccb758
2020-07-30T08:37:28.148Z: 1907fda0-8e99-4294-b325-4df460260dc4
2020-07-30T08:37:33.152Z: d1377b6c-56eb-4881-bba3-0bd600590990
2020-07-30T08:37:38.157Z: 3dc581bf-758a-40c5-a3f7-8ea8dfdf8e10
2020-07-30T08:37:43.160Z: dc772738-eb53-4b35-8086-2d5760efe577
```

```
$ kubectl delete deployments.apps hashgenerator-first 
```