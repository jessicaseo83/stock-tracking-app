DROP TABLE IF EXISTS stocks CASCADE;

CREATE TABLE stocks (
  id SERIAL PRIMARY KEY NOT NULL,
  symbol VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  last_price FLOAT NOT NULL
)