DROP KEYSPACE IF EXISTS sidebar;

CREATE KEYSPACE IF NOT EXISTS sidebar WITH REPLICATION {'class': 'SimpleStrategy', 'replication_factor': '1'} AND durable_writes = 'true';

USE sidebar;

CREATE TABLE shoes_by_id (
  shoe_id INT,
  name VARCHAR,
  category TEXT,
  numberOfReview SMALLINT,
  price SMALLINT,
  PRIMARY KEY (shoe_id)
);

// 3 level listing - theres a shoe, every shoe has a color, every color has size option

CREATE TABLE colors_by_shoe (
  shoe_id INT,
  name VARCHAR,
  price SMALLINT,
  thumbnailPC TEXT,
  color_name TEXT,
  PRIMARY KEY (shoe_id, color_name)
);



--  maybe shoe_id here?
CREATE TABLE sizes_by_color (
  color_name TEXT,
  shoe_id INT,
  size DECIMAL,
  quantity TINYINT,
  PRIMARY KEY (shoe_id, color_name, size)
);

COPY shoes_by_id from '/Users/tomnguyen/Desktop/SDC Project/addidas-sidebar-service/newDatabase/Cassandra/shoesIdCassandra.csv' with HEADER = true;

COPY colors_by_shoe from '/Users/tomnguyen/Desktop/SDC Project/addidas-sidebar-service/newDatabase/Cassandra/colorsCassandra.csv' with HEADER = true;

COPY sizes_by_color from '/Users/tomnguyen/Desktop/SDC Project/addidas-sidebar-service/newDatabase/Cassandra/sizesCassandra.csv' with HEADER = true;

should have one primary query
then follow up queries for color and size