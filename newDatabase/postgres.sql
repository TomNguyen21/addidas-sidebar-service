-- DROP DATABASE IF EXISTS sidebar;

CREATE SCHEMA sidebar;

USE sidebar;



-- primary records shoe
CREATE TABLE shoeInfo (
  shoeName VARCHAR(20),
  quantity SMALLINT,
  numberOfReview SMALLINT,
  price SMALLINT,
  thumbnailPC TEXT,
  -- PRIMARY KEY(shoe_id)
  --   FOREIGN KEY(category_id)
  --     REFERENCES category(category_id)
)

CREATE TABLE category (
  category_id INT AUTO_INCREMENT,
  category_name VARCHAR(20),
  thumbnailPC TEXT,
  -- PRIMARY KEY(category_id)
)

CREATE TABLE shoeSize (
  size_id INT AUTO_INCREMENT,
  size SMALLINT
)

CREATE TABLE shoeColor (
  color_id INT AUTO_INCREMENT,
  color VARCHAR(20)
)

CREATE TABLE inventory (
  inventory_id INT,
  size_id INT,
  color_id INT,
  shoe_id INT,
  category_id INT,
  -- PRIMARY KEY(shoe_id)
  --   FOREIGN KEY(category_id)
  --     REFERENCES category(category_id)
)
-- table for shoe size and color
-- shoe color -> shoe id then create size id

-- 10 million shoes, category id as foreign key is okay, shoe should be primary, different options can be additional tables color(having varying options of colors), size, join table with shoe id color id size id.   shoe sizes - 10 different sizes    color sizes - 10 different colors     averages 1/3 of each type of shoe  should be 300 million join tables