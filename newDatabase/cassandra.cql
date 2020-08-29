DROP KEYSPACE IF EXISTS sidebar;

CREATE KEYSPACE IF NOT EXISTS sidebar WITH REPLICATION {'class': 'SimpleStrategy', 'replication_factor': '1'} AND durable_writes = 'true';

USE sidebar;

CREATE TABLE category_by_id (
  id, INT
  categoryName VARCHAR,
  thumbnailPC TEXT
  PRIMARY KEY (categoryName)
);

// 1 to many = category to shoe

CREATE TABLE shoeInfo (
  shoe_id INT
  name VARCHAR,
  category_id INT,
  numberOfReview SMALLINT,
  color VARCHAR,
  size TINYINT,
  quantity TINYINT,
  price SMALLINT,
  thumbnailPC TEXT,
  PRIMARY KEY (name)
);

CREATE TABLE shoeSize (
  size_id INT
)

CREATE TABLE shoeColor (
  color_id INT,
  color VARCHAR
)

CREATE TABLE join_table (
  size_id INT,
  color_id VARCHAR,
  size_id INT
)


should have one primary query
then follow up queries for color and size