#syntax=docker/dockerfile:1
# Command: make bootstrap
FROM node:18.0.0-alpine AS dependencies

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
FROM nginx:1.21.6-alpine AS prod

COPY --from=build ./code/build/ /usr/share/nginx/html

COPY --from=build ./code/config/nginx.conf /etc/nginx/conf.d/default.conf
