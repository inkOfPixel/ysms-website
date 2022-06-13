# syntax=docker/dockerfile:1

FROM node:alpine

EXPOSE 3000

WORKDIR /app

COPY ./package.json /app

RUN npm install

COPY . /app

RUN npm run build

CMD ["npm", "start"]