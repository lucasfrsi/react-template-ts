#syntax=docker/dockerfile:1
# USED BY:
#   - Command: make bootstrap
FROM node:16.14.0-alpine AS dependencies

WORKDIR /code

COPY package*.json ./

RUN npm ci --ignore-scripts


# USED BY:
#   - Command: make test
#   - Command: make lint
FROM dependencies AS base

WORKDIR /code

COPY . .


# USED BY:
#   - Stage: prod
FROM base AS build

RUN npm run build


# USED BY:
#   - Command: make package
#   - Command: make serve
FROM nginx:1.21.6-alpine AS prod

COPY --from=build ./code/build/ /usr/share/nginx/html

COPY --from=build ./code/config/nginx.conf /etc/nginx/conf.d/default.conf
