FROM node:8.9.4

WORKDIR /API

COPY package*.json .

RUN npm i

COPY src .

CMD node server.js

EXPOSE 4000