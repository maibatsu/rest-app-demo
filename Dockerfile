FROM node:8.9.4

WORKDIR /API

RUN npm i -g nodemon

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 4000

CMD nodemon dist/server.js