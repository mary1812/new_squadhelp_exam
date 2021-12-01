FROM node:14.16.1-alpine3.13

ARG NODE_ENV="production"

RUN mkdir ./server && mkdir -p /var/www/html/images/

WORKDIR /server

COPY . .

RUN npm install && npm install -g sequelize-cli 


EXPOSE 3000

RUN npm run build

CMD node ./dist/index.js
