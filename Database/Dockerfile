FROM postgres
MAINTAINER merlin

RUN apt-get update && \
    apt-get upgrade

COPY create_db.sql /docker-entrypoint-initdb.d

VOLUME /var/lib/postgresql/data

EXPOSE 5432
