PRAGMA foreign_keys = OFF;

BEGIN;

INSERT INTO
    fruits (id, title, image_path, price, fruit_description, fruit_type)
VALUES
    (1, 'Orange', '/images/orange.png', 1.50, 'A great natural deodorizer. Simply throw the orange peels in a bin or in a stinky place and the smell is gone!', 1),
    (2, 'Lemon', '/images/lemon.png', 1.80, 'Great hair toner. Keep away from eyes.', 1),
    (3, 'Lime', '/images/lime.png', 1.20, 'Keep away from UV light if handling the juice - the skin can become blistered, swollen or darker in colour.', 1),
    (4, 'Goji berries', '/images/goji.png', 2.50, 'Do not eat more than 8 a day or else you get lead poisoning', 2),
    (5, 'Blackberry', '/images/blackberry.png', 2.20, 'Does not come with BBM unfortunately', 2),
    (6, 'Banana pack of 6', '/images/banana.png', 1.00, 'Yes they are berries', 2) 
    ON CONFLICT DO NOTHING;

INSERT INTO fruit_types (id, name)
VALUES (1, 'Citrus'),
    (2, 'Berries') 
    ON CONFLICT DO NOTHING;

COMMIT;
