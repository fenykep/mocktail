CREATE TABLE items(
ID int NOT NULL AUTO_INCREMENT,
name VARCHAR(255),
price int DEFAULT(9999),
aFree BOOLEAN DEFAULT(false),
sFree BOOLEAN DEFAULT(false),
avabAmount int DEFAULT(0),
sold int DEFAULT(0),
img varchar(255) DEFAULT('mocktail.png'),
PRIMARY KEY(ID)
)