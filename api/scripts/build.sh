#!/bin/bash

# Deletes the old container and bulds a new one!
imageName=node-api:latest
containerName=node-api

docker build -t $imageName -f Dockerfile  .

echo Delete old container...
docker rm -f $containerName

echo Run new container...
docker run -d -p 3001:3001 --name $containerName $imageName