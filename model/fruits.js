import db from '../database/db.js';

const select_all_fruits = db.prepare(
  /*sql*/
  `
  SELECT 
    fruits.id,
    fruits.title,
    fruits.image_path,
    fruits.price,
    fruits.fruit_description,
    fruit_types.name AS ftype 
    FROM fruits JOIN fruit_types 
    ON fruits.fruit_type = fruit_types.id
`
);

const select_fruit_by_id = db.prepare(
  /*sql*/
  `
SELECT 
  fruits.id,
  fruits.title,
  fruits.image_path,
  fruits.price,
  fruits.fruit_description,
  fruit_types.name AS ftype 
  FROM fruits JOIN fruit_types 
  WHERE fruits.id = ?
`
);

const select_fruit_by_type = db.prepare(
  /*sql*/
  `
SELECT 
  fruits.id,
  fruits.title,
  fruits.image_path,
  fruits.price,
  fruits.fruit_description,
  fruit_types.name AS ftype 
  FROM fruits JOIN fruit_types 
  ON fruits.fruit_type = fruit_types.id
  WHERE fruit_types.name = ?
`
);

const select_all_ids = db.prepare(
  /*sql*/
  `
  SELECT 
    id
    FROM fruits 
`
);

export function getAllFruits() {
  return select_all_fruits.all();
}

export function getAllIds() {
  return select_all_ids.all();
}

export function getFruitById(id) {
  return select_fruit_by_id.get(id);
}

export function getFruitByType(type) {
  return select_fruit_by_type.all(type);
}
