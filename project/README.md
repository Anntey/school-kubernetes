## Deploy with manifests

```zsh
$ kubectl apply -f manifests/deployment.yaml
$ kubectl apply -f manifests/service.yaml
$ kubectl apply -f manifests/ingress.yaml
```

```zsh
$ kubectl delete -f manifests/deployment.yaml
$ kubectl delete -f manifests/service.yaml
$ kubectl delete -f manifests/ingress.yaml
```