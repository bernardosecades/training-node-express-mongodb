# Training Node.js, Express, MongoDB

TODO

## Libraries

TODO

## Tests

TODO

## Code Style Code Style airbnb

See https://github.com/airbnb/javascript

## Docker Guide

```bash
docker-compose build
```

```bash
docker-compose up
```

```bash
docker-compose ps
```

### Access container NodeJS

```bash
docker-compose exec nodejs sh
```

Execute application:

```bash
node app.js
```

or 

```bash
npm start
```

With nodemon (Detect changes in your code and automatically restart the server):

```bash
nodedemon app.js
```

### Access container MongoDB

```bash
docker-compose exec mongodb bash
```

```bash
mongo
show databases
```

## Makefile

- `make start-docker`
- `make stop-docker`
- `make ssh-mongodb`
- `make run-app`



