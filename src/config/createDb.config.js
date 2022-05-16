const DB_NAME = process.env.DB_USER;

const createDB = `CREATE DATABASE IF NOT EXISTS ${DB_NAME}`;

const dropDB = `DROP DATABASE IF EXISTS ${DB_NAME}`;

const createTableUsers = `
CREATE TABLE IF NOT EXISTS Users (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email varchar(255) NOT NULL,
    firt_name  varchar(255) NOT NULL,
    last_name  varchar(255) NOT NULL,
    password  varchar(255) NOT NULL,
    phone varchar(20) NOT NULL,
    address  varchar(300) NOT NULL,
    is_admin boolean default 0 NOT NULL,
    UNIQUE(email)
)
`;