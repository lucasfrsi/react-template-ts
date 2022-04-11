#!/usr/bin/env sh
#
# Commands: make bootstrap, make test, make lint and make serve
# Description: spin up containers based on docker-compose files.
#
set -e
set -x

COMPOSE=$(command -v docker-compose)

${COMPOSE} -f ${1} down -v --remove-orphans &&\
${COMPOSE} -f ${1} build &&\
${COMPOSE} -f ${1} config &&\
if ${COMPOSE} -f ${1} up ${2}
then
  echo "** ${1} succeeded **"
else
  echo "** ${1} failed **"
  exit 1
fi
