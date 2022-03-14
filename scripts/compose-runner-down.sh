#!/usr/bin/env sh
#
# Commands: make down
# Description: stop and remove containers, networks, volumes, and images created by "docker-compose up".
#
set -e
set -x

COMPOSE=$(command -v docker-compose)

${COMPOSE} down -v --remove-orphans
