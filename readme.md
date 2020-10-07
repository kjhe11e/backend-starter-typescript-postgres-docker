# Getting started

## Requirements

* docker

* docker-compose

## Steps

1. Create a `.env` file in the root dir. Add values for the following vars:

```
DATABASE_URL
POSTGRES_USER
POSTGRES_PASSWORD
POSTGRES_DB
```

Example `.env`:

```
DATABASE_URL=postgres://postgres:supersecret@postgres:5432/backend_starter
POSTGRES_USER=postgres
POSTGRES_PASSWORD=supersecret
POSTGRES_DB=backend_starter
```

2. Run `docker-compose up`

# Appendix

Reading resources:

- https://mannhowie.com/aws-node

