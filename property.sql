CREATE TABLE `Property`(`id` int NOT NULL AUTO_INCREMENT,
    `owner` int NOT NULL,
    `status` varchar(100) default 'available' NOT NULL,
    `price` FLOAT(30) NOT NULL,
    `city` varchar(100) NOT NULL,
    `address` varchar(300) NOT NULL,
    `type` varchar(255) NOT NULL,
    `image_url` varchar(1000) NOT NULL,
    `created_on` DATETIME NOT NULL,
     PRIMARY KEY(id)
);
