FROM node:carbon

WORKDIR /API

RUN npm i -g nodemon

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 4000

CMD ["npm", "start"]