FROM node:8.9.4

WORKDIR /API

RUN npm i -g nodemon

COPY package*.json ./

RUN npm i

COPY . .

CMD nodemon src/server.js

EXPOSE 4000