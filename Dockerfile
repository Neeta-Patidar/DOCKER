FROM node:alpine

WORKDIR /Express

COPY . .

EXPOSE 1234

CMD node server.js

