# Docker with Webpack

# Build project
```bash
  $ docker build -t ktn-project .

  # Run Docker on http://localhost:8080/
  $ docker run -p 8080:8080 ktn-project

  # To find out which host
  $ docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <container_id>

  # To kill all container
  $ docker kill $(docker ps -q)

  # To remove all active container
  $ docker rm $(docker ps -a -q)

  # To remove all docker images
  $ docker rmi $(docker images -q)
```