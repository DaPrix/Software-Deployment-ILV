# WordPress and MySQL Deployment on Kubernetes

This document outlines the steps and commands required to deploy WordPress with a MySQL database on a Kubernetes cluster using YAML configuration files.

## Prerequisites
Ensure the following tools are installed and configured:
- **Minikube**: To run a local Kubernetes cluster.
- **kubectl**: Kubernetes command-line tool.

---

## Deployment Steps

### 1. Start Minikube
Start your Minikube cluster:
```bash
minikube start
```

### 2. Apply MySQL Deployment and Service
Deploy MySQL with the `mysql-deployment.yaml` file:
```bash
kubectl apply -f mysql-deployment.yaml
```

Verify that the MySQL pod and service are running:
```bash
kubectl get pods -n wordpress
kubectl get svc -n wordpress
```

### 3. Apply WordPress Deployment and Service
Deploy WordPress with the `wordpress-deployment.yaml` file:
```bash
kubectl apply -f wordpress-deployment.yaml
```

### 4. Access WordPress
#### Option 1: Use NodePort
1. Retrieve the Minikube IP:
   ```bash
   minikube ip
   ```
2. Note the `NodePort` of the WordPress service:
   ```bash
   kubectl get svc -n wordpress
   ```
3. Access WordPress at:
   ```
   http://<minikube-ip>:<nodeport>
   ```

#### Option 2: Use Port Forwarding
This option has to be done, when using Docker for Windows (i think im not sure)

Forward the WordPress service to a local port:
```bash
kubectl port-forward svc/wordpress 8080:80 -n wordpress
```
Access WordPress at:
```
http://localhost:8080
```
