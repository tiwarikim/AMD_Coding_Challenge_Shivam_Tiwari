create database AMD_test;

CREATE TABLE IF NOT EXISTS `product_price` (
 `Brand` varchar(50) NOT NULL,
 `Name` varchar(50) NOT NULL,
 `Price` double NOT NULL
);

insert into product_price(Brand, Name, Price) values('AMD', 'Product1',10);
insert into product_price(Brand, Name, Price) values('AMD', 'Product2',30);
insert into product_price(Brand, Name, Price) values('AMD', 'Product3',60);
insert into product_price(Brand, Name, Price) values('AMD', 'Product5',40);
insert into product_price(Brand, Name, Price) values('ACME', 'Product1',44);
insert into product_price(Brand, Name, Price) values('ACME', 'Product2',1);
insert into product_price(Brand, Name, Price) values('ACME', 'Product4',90);

select * from (select Brand, Name, Price, RANK() OVER(partition by Brand order by Price desc) AS Ranking FROM product_price ) as a where Ranking = 2;