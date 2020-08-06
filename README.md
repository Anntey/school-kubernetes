DevOps with Kubernetes

## Create namespaces

```zsh
kubectl create namespace pingpong
kubectl create namespace hashgenerator
```

## Deploy by manifests
```zsh
kubectl apply -f hashgenerator/manifests/
kubectl apply -f pingpong/manifests/
```

```zsh
kubens pingpong
kubectl get all
```

```zsh
kubens hashgenerator
kubectl get all
```