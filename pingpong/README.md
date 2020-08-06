## Deploy with manifests

```zsh
$ kubectl apply -f manifests/
```

```zsh
$ kubectl delete -f manifests/
```

```zsh
$ curl -s http://localhost:8081/pingpong
$ kubectl logs -f pingpong-dep-6bcb74f875-w5r72 pingpong
```
