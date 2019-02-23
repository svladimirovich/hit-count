docker build -t svladimirovich/hit-count .
docker push svladimirovich/hit-count
kubectl apply -f k8s-config