aws ecr get-login --no-include-email --region us-east-1 | /bin/bash
docker build -t node-api .
docker tag node-api:latest someurl.dkr.ecr.us-east-1.amazonaws.com/node-api:latest
docker push someurl.dkr.ecr.us-east-1.amazonaws.com/node-api:latest