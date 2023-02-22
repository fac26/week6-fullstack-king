BEGIN;

CREATE TABLE IF NOT EXISTS fruits (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  image_path TEXT,
  price DECIMAL,
  fruit_description TEXT,
  fruit_type INTEGER REFERENCES fruit_types(id)
  
);

CREATE TABLE IF NOT EXISTS fruit_types(
  id TEXT PRIMARY KEY,
  name TEXT 
);


COMMIT;