#!/bin/bash

start-docker:
	docker-compose up -d

stop-docker:
	docker-compose down

ssh-mongodb:
	docker exec -it mongodb sh

ssh-nodejs:
	docker exec -it nodejs sh

run-app:
	docker exec -it nodejs node app.js
