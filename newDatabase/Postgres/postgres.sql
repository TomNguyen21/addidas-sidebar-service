-- DROP DATABASE IF EXISTS sidebar;

CREATE SCHEMA sidebar;

USE sidebar;



-- primary records shoe
CREATE TABLE shoeInfo (
  shoe_id INT,
  shoeName VARCHAR(20),
  category VARCHAR(20),
  numberOfReview SMALLINT,
  thumbnailPC TEXT,
  PRIMARY KEY(shoe_id)
  --   FOREIGN KEY(category_id)
  --     REFERENCES category(category_id)
)

CREATE TABLE shoeSize (
  size_id INT AUTO_INCREMENT,
  size NUMERIC,
  quantity INT
)

CREATE TABLE shoeColor (
  color_id INT,
  color VARCHAR(20),
  price SMALLINT,
)

CREATE TABLE inventory (
  inventory_id serial,
  size NUMERIC,
  color TEXT,
  shoe_id INT,
  quantity int,
  PRIMARY KEY(inventory_id)
  --   FOREIGN KEY(category_id)
  --     REFERENCES category(category_id)
)
-- table for shoe size and color
-- shoe color -> shoe id then create size id

-- 10 million shoes, category id as foreign key is okay, shoe should be primary, different options can be additional tables color(having varying options of colors), size, join table with shoe id color id size id.   shoe sizes - 10 different sizes    color sizes - 10 different colors     averages 1/3 of each type of shoe  should be 300 million join tables

--
-- explain analyze select * from shoeinfo;