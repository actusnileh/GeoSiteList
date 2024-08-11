DC = docker compose
DEV_FILE = docker_compose/dev_app.yaml
PROD_FILE = docker_compose/prod_app.yaml

.PHONY: dev
dev:
	${DC} -f ${DEV_FILE} up --build -d

.PHONY: drop-dev
drop-dev:
	${DC} -f ${DEV_FILE} down

.PHONY: prod
prod:
	${DC} -f ${PROD_FILE} up --build -d

.PHONY: drop-prod
drop-prod:
	${DC} -f ${PROD_FILE} down

.PHONY: logs-prod
logs-prod:
	${DC} -f ${PROD_FILE} logs -f

.PHONY: logs-dev
logs-dev:
	${DC} -f ${DEV_FILE} logs -f

.PHONY: drop-all
drop-all:
	${DC} -f ${DEV_FILE} -f ${PROD_FILE} down