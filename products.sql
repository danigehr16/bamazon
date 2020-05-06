DROP DATABASE IF EXISTS bamazon_db;

CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR (50),
department_name VARCHAR (50),
price DECIMAL (10,2) NULL,
stock_quantity DECIMAL(10,2) NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("scooby doo bed sheets","bedroom","30.00", "10");

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("scooby doo waffel maker","kitchen","50.00", "3");

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("scooby doo shoes","shoes","15.00", "7");

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("scooby doo dog leash","pet","15.00", "30");

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("scooby doo fashion jacket","clothing","50.00", "10");

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("scooby doo quilt blanket","bedroom","25.00", "5");

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("scooby doo where are you complete series","media","45.00", "1");

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("scooby doo backpack","clothing","15.00", "17");

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("scooby doo couch","living room","250.00", "5");

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("scooby doo earrings","jewerly","8.00", "40")