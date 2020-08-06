cd hashgenerator
echo $(pwd)
kubectl delete -f manifests/deployment.yaml
kubectl delete -f manifests/service.yaml
kubectl delete -f manifests/ingress.yaml

cd ..
cd pingpong
echo $(pwd)
kubectl delete -f manifests/deployment.yaml
kubectl delete -f manifests/service.yaml
kubectl delete -f manifests/ingress.yaml

cd ..
cd project
echo $(pwd)
kubectl delete -f manifests/deployment.yaml
kubectl delete -f manifests/service.yaml
kubectl delete -f manifests/ingress.yaml
cd ..
