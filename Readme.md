# Build and Start the Containers
Run the following command in the directory where docker-compose.yml is located to build and start all services:


```bash
docker-compose up --build
```
This will:

Build the Docker images for your Node.js app.
Start three instances of the Node.js app (app1, app2, app3).
Start the Nginx load balancer.

# Test the Load Balancing
Once everything is running, you can test the load balancing by making multiple requests to http://localhost/ (or http://<your-docker-host>/ if using Docker on a remote machine).

Each request should be forwarded to a different instance of the Node.js app. You should see the different port numbers in the response message (app1, app2, or app3).

#  Scaling the Application
You can scale the number of Node.js app instances using Docker Compose by adding the --scale flag. For example:

```bash
docker-compose up --build --scale app=5
# This would run 5 instances of the Node.js application behind the Nginx load balancer.
```
# Summary
Node.js app: A simple Express application that responds with a message indicating which server is handling the request.
Dockerfile: Containerizes the Node.js application.
Docker Compose: Defines multiple instances of the Node.js app and an Nginx load balancer.
Nginx configuration: Configures load balancing between the Node.js instances.