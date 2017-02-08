DROP USER IF EXISTS pokindexRW;
DROP DATABASE IF EXISTS pokindex;

CREATE USER pokindexRW WITH PASSWORD pokindex CREATEDB;
CREATE DATABASE pokindex;
/*
GRANT CONNECT ON DATABASE pokindex TO pokindexRW;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS bookmarks;
DROP TABLE IF EXISTS likes;

CREATE TABLE users (
    id_users SERIAL PRIMARY KEY,
    login VARCHAR(100) NOT NULL,
    pwd   VARCHAR(100) NOT NULL,
)

CREATE TABLE bookmarks (
    id_bookmarks SERIAL PRIMARY KEY,
    pokemon_name VARCHAR(100) NOT NULL,
    id_users INTEGER REFERENCES users (id_users),
)
CREATE TABLE likes (
    id_likes SERIAL PRIMARY KEY,
    do_like boolean NOT NULL,
    do_dislike boolean NOT NULL,
    pokemon_name VARCHAR(100) NOT NULL,
    id_users INTEGER REFERENCES users (id_users),
)

GRANT SELECT ON users TO pokindexRW;
GRANT UPDATE ON users TO pokindexRW;
GRANT INSERT ON users TO pokindexRW;

GRANT SELECT ON bookmarks TO pokindexRW;
GRANT UPDATE ON bookmarks TO pokindexRW;
GRANT INSERT ON bookmarks TO pokindexRW;

GRANT SELECT ON likes TO pokindexRW;
GRANT UPDATE ON likes TO pokindexRW;
GRANT INSERT ON likes TO pokindexRW;
*/