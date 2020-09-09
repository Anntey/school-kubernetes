[DevOps with Kubernetes](https://devopswithkubernetes.com/)

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

## prometheus-operator -> Grafana -> Loki
```zsh
$ kubectl create namespace prometheus
$ helm install stable/prometheus-operator --generate-name --namespace prometheus
```
```zsh
$ kubectl -n prometheus port-forward prometheus-operator-1596721129-grafana-78b9cb4bc9-fktr2 3000 

Forwarding from 127.0.0.1:3000 -> 3000
Forwarding from [::1]:3000 -> 3000
```

```zsh
kubectl create namespace loki-stack
helm upgrade --install loki --namespace=loki-stack loki/loki-stack
```
Loki at http://loki.loki-stack:3100

## GCP: GKE
```zsh
$ gcloud container clusters create dwk-cluster --zone=europe-north1-b

NAME         LOCATION         MASTER_VERSION  MASTER_IP      MACHINE_TYPE   NODE_VERSION   NUM_NODES  STATUS
dwk-cluster  europe-north1-b  1.15.12-gke.2   35.228.249.45  n1-standard-1  1.15.12-gke.2  3          RUNNING
```

```zsh
$ gcloud container clusters get-credentials dwk-cluster --zone=europe-north1-b
$ kubectl cluster-info

Kubernetes master is running at https://35.228.249.45
GLBCDefaultBackend is running at https://35.228.249.45/api/v1/namespaces/kube-system/services/default-http-backend:http/proxy
Heapster is running at https://35.228.249.45/api/v1/namespaces/kube-system/services/heapster/proxy
KubeDNS is running at https://35.228.249.45/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy
Metrics-server is running at https://35.228.249.45/api/v1/namespaces/kube-system/services/https:metrics-server:/proxy
```

```zsh
$ kubectl create namespace pingpong
$ kubectl apply -f pingpong/manifests-gke/
$ kubens pingpong
$ kubectl get svc

NAME                        TYPE           CLUSTER-IP      EXTERNAL-IP      PORT(S)        AGE
pingpong-svc                ClusterIP      10.31.246.77    <none>           6789/TCP       4m16s
pingpong-svc-loadbalancer   LoadBalancer   10.31.242.4     35.228.247.177   80:31411/TCP   4m16s
postgres-pingpong-svc       ClusterIP      10.31.248.169   <none>           5432/TCP       4m16s
```

```zsh
$ kubectl create namespace hashgenerator
$ kubens hashgenerator
$ kubectl apply -f hashgenerator/manifests-gke/
$ kubectl get svc

NAME                             TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)        AGE
hashgenerator-svc                ClusterIP      10.31.250.225   <none>          2345/TCP       68s
hashgenerator-svc-loadbalancer   LoadBalancer   10.31.245.96    35.228.146.72   80:31365/TCP   68s
```

```zsh
$ kubectl logs hashgenerator-dep-846456bdb-jw797 --all-containers
```

## CI/CD

```zsh
$ kubectl create namespace project
$ kubectl config set-context --current --namespace=project
$ helm repo add traefik https://containous.github.io/traefik-helm-chart && \
  helm repo update && \
  helm install traefik traefik/traefik
```

```zsh
$ kubectl get svc

NAME      TYPE           CLUSTER-IP     EXTERNAL-IP     PORT(S)                      AGE
traefik   LoadBalancer   10.51.247.87   35.234.119.98   80:31601/TCP,443:30377/TCP   5m43s
```

```zsh
$ gcloud container clusters delete dwk-cluster --zone=europe-north1-b
```