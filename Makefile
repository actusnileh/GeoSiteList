DC = docker compose
APP_FILE = docker_compose/app.yaml

.PHONY: app
app:
	${DC} -f ${APP_FILE} up --build -d

.PHONY: drop-app
drop-app:
	${DC} -f ${APP_FILE} down

.PHONY: logs
logs:
	${DC} -f ${APP_FILE} logs -f