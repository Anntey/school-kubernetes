## Create cluster with k3d

```zsh
k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2
```

Access server node through port 8081.

## Deploy with kubectl

```zsh
$ kubectl create deployment hashgenerator --image=anntey/hashgenerator
$ kubectl logs -f hashgenerator-5c6fb9c9d5-jjvvm
```

```zsh
> 01-hash-generator@1.0.0 start /app
> node index.js

2020-07-30T08:37:13.125Z: 4c6b041b-b997-4e1c-9cfc-6917a8a19dd0
2020-07-30T08:37:18.139Z: dfbf90cd-0196-4842-93f3-7b33517ce0d6
2020-07-30T08:37:23.144Z: aa7e561a-3ae6-40ac-a693-684d2dccb758
```

```zsh
$ kubectl delete deployment hashgenerator-first 
```

## Deploy with manifests

```zsh
$ kubectl apply -f manifests/deployment.yaml
$ kubectl apply -f manifests/service.yaml
$ kubectl apply -f manifests/ingress.yaml
```
Ingress is listening on port 80. We can access on http://localhost:8081.

```zsh
$ kubectl logs -f hashgenerator-server-f6d6bc975-qgt6c
```

```zsh
$ kubectl delete -f manifests/deployment.yaml
$ kubectl delete -f manifests/service.yaml
$ kubectl delete -f manifests/ingress.yaml
```