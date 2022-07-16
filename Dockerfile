#syntax=docker/dockerfile:1
# Command: make bootstrap
FROM node:16.14.2-alpine AS dependencies

WORKDIR /code

COPY package*.json ./

RUN npm ci --ignore-scripts


# Commands: make test & make lint
FROM dependencies AS base

WORKDIR /code

COPY . .


# Used by stage: prod
FROM base AS build

RUN npm run build


# Command: make serve
FROM nginx:1.23.0-alpine AS prod

COPY --from=build ./code/build/ /usr/share/nginx/html

COPY --from=build ./code/config/nginx.conf /etc/nginx/conf.d/default.conf
