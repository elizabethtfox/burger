-- Drops the db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "_db" database --
CREATE DATABASE burgers_db;

-- Makes it so all of the following code will affect _db --
USE burgers_db;

CREATE TABLE burgers (
	id int auto_increment,
    burger_name VARCHAR(100),
    devoured BOOLEAN,
    PRIMARY KEY (id)
);