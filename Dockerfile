FROM node:8-alpine

MAINTAINER vypurpl

COPY index.html package.json webpack.config.*.js /app/
COPY src/ /app/src

RUN cd /app && yarn install && yarn client:build

WORKDIR /app

EXPOSE 3000

CMD ["yarn", "server:prod"]