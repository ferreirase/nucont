FROM node:14-alpine

WORKDIR /src

ADD package.json /src

RUN npm i --silent

ADD . /src

EXPOSE 9200

