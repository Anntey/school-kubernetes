DevOps with Kubernetes

## Create namespaces

```zsh
$ kubectl create namespace pingpong
$ kubectl create namespace hashgenerator
```

## Deploy by manifests
```zsh
$ kubectl apply -f hashgenerator/manifests/
$ kubectl apply -f pingpong/manifests/
```

```zsh
$ kubens pingpong
$ kubectl get all

NAME                                READY   STATUS    RESTARTS   AGE
pod/pingpong-dep-679b645f4d-rcdrc   1/1     Running   0          10s

NAME                   TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE
service/pingpong-svc   ClusterIP   10.43.156.69   <none>        6789/TCP   10s

NAME                           READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/pingpong-dep   1/1     1            1           10s

NAME                                      DESIRED   CURRENT   READY   AGE
replicaset.apps/pingpong-dep-679b645f4d   1         1         1       10s
```

```zsh
$ kubens hashgenerator
$ kubectl get all

NAME                                     READY   STATUS    RESTARTS   AGE
pod/hashgenerator-dep-66c9cc599d-wjvmm   2/2     Running   0          53s

NAME                        TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)             AGE
service/hashgenerator-svc   ClusterIP   10.43.124.93   <none>        3001/TCP,2345/TCP   53s

NAME                                READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/hashgenerator-dep   1/1     1            1           53s

NAME                                           DESIRED   CURRENT   READY   AGE
replicaset.apps/hashgenerator-dep-66c9cc599d   1         1         1       53s
```

## Helm: prometheus-operator
```zsh
$ kubectl create namespace prometheus
$ helm install stable/prometheus-operator --generate-name --namespace prometheus
```
```zsh
$ kubectl -n prometheus port-forward prometheus-operator-1596721129-grafana-78b9cb4bc9-fktr2 3000 

Forwarding from 127.0.0.1:3000 -> 3000
Forwarding from [::1]:3000 -> 3000
```