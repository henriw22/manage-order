DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS users CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(32),
  password VARCHAR(255) NOT NULL
);

-- CREATE TABLE order_items (
--   id SERIAL PRIMARY KEY NOT NULL,
--   name VARCHAR(255) NOT NULL,
--   description VARCHAR(255) NOT NULL,
--   img_url VARCHAR(255) NOT NULL,
--   order_quantity INTEGER  NOT NULL DEFAULT 1,
--   created_at TIMESTAMP,
--   order_date TIMESTAMP
-- );

-- CREATE TABLE locations (
--   id SERIAL PRIMARY KEY NOT NULL,
--   item_id INTEGER REFERENCES order_items(id) ON DELETE CASCADE,
--   name VARCHAR(255) NOT NULL
-- );

-- CREATE TABLE time (
--   id SERIAL PRIMARY KEY NOT NULL,
--   item_id INTEGER REFERENCES order_items(id) ON DELETE CASCADE,
--   time TIMESTAMP
-- );

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP,
  pick_up_time TIMESTAMP,
  quantity INTEGER  NOT NULL DEFAULT 1,
  location VARCHAR(255) NOT NULL
);