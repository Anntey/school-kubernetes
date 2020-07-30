## Container Image

Docker hub: [anntey/hashgenerator](https://hub.docker.com/repository/docker/anntey/hashgenerator)

## Create cluster with k3d

```zsh
k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2
```

Access server node through port 8081.

## Deploy with kubectl

```zsh
$ kubectl create deployment hashgenerator-first --image=anntey/hashgenerator
$ kubectl logs -f hashgenerator-first-5c6fb9c9d5-jjvvm
```

```zsh
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

```zsh
$ kubectl delete deployment hashgenerator-first 
```

## Deploy with deployment manifest

```zsh
$ kubectl apply -f manifests/deployment.yaml
$ kubectl logs -f hashgenerator-first-f6d6bc975-qgt6c
$ kubectl delete -f manifests/deployment.yaml
```

## Apply service and ingress manifests

```zsh
$ kubectl apply -f manifests/service.yaml
$ kubectl apply -f manifests/ingress.yaml
```

Ingress is listening on port 80. We can access on http://localhost:8081.

```zsh
$ kubectl delete -f manifests/service.yaml
$ kubectl delete -f manifests/ingress.yaml
```