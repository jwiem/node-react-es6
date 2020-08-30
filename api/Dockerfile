FROM node:12.4-alpine

EXPOSE 3001

RUN mkdir /app
WORKDIR /app

COPY package.json ./
RUN yarn

COPY .env /app/.env
COPY . .

RUN yarn build

CMD [ "yarn", "serve" ]
