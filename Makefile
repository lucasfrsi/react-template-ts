.DEFAULT_GOAL := help

# TEXT COLORS
MF_BLUE=\033[36m
MF_NO_COLOR=\033[0m

help:
	@echo "Usage: make ${MF_BLUE}<command>${MF_NO_COLOR}"
	@echo
	@echo 'Commands:'
	@awk 'BEGIN {FS = ":.*##"; printf "${MF_BLUE}${MF_NO_COLOR}"} /^[$$()% 0-9a-zA-Z_-]+:.*?##/ { printf "    ${MF_BLUE}%-15s${MF_NO_COLOR} %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s${MF_NO_COLOR}\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

bootstrap:	## Run the development server within a container.
	./scripts/compose-runner-up.sh docker-compose.yml -d

test: 		## Run unit tests within a container as GitHub Actions will.
	./scripts/compose-runner-up.sh docker-compose-test.yml --abort-on-container-exit

lint: 		## Run linters within a container as GitHub Actions will.
	./scripts/compose-runner-up.sh docker-compose-lint.yml --abort-on-container-exit

serve:		## Serve the application using the production image.
	./scripts/compose-runner-up.sh docker-compose-serve.yml -d

down:		## Stop and remove containers, networks, volumes, and images created by "docker-compose up".
	./scripts/compose-runner-down.sh
