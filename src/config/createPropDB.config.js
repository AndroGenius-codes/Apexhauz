const DB_NAME = process.env.DB_PROPERTY;

const createDB = `CREATE DATABASE IF NOT EXISTS ${DB_NAME}`;

const dropDB = `DROP DATABASE IF EXISTS ${DB_NAME}`;

const createTableProperties = `
CREATE TABLE IF NOT EXISTS properties (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    owner int NOT NULL,
    status  varchar(100) default 'available' NOT NULL,
    price   FLOAT(30) NOT NULL,
    city  varchar(100) NOT NULL,
    address varchar(300) NOT NULL,
    type  varchar(255) NOT NULL,
    image_url  varchar(1000) NOT NULL,
    created_on DATETIME NOT NULL,
)
`;