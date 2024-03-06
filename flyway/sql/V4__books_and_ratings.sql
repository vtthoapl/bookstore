CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
 /*  author TEXT NOT NULL, */
  pages INTEGER NOT NULL,
  isbn TEXT NOT NULL,
  cover_url TEXT
);

CREATE TABLE book_ratings (
  id SERIAL PRIMARY KEY,
  book_id INTEGER NOT NULL REFERENCES books(id),
  rating INTEGER NOT NULL,
  feedback TEXT
);

INSERT INTO books (name, pages, isbn, cover_url) VALUES ('Harry Potter and the Philosophers Stone', 200, '123', 'https://s2.adlibris.com/images/7003163/harry-potter-and-the-philosophers-stone.jpg');
INSERT INTO books (name, pages, isbn, cover_url) VALUES ('Harry Potter and the Chamber of Secrets', 250, '124', 'https://s1.adlibris.com/images/6899947/harry-potter-and-the-chamber-of-secrets.jpg');
INSERT INTO books (name, pages, isbn, cover_url) VALUES ('Harry Potter and the Prisoner of Azkaban', 300, '125', 'https://s2.adlibris.com/images/6234668/harry-potter-and-the-prisoner-of-azkaban.jpg');
INSERT INTO books (name, pages, isbn, cover_url) VALUES ('Harry Potter and the Goblet of Fire', 350, '126', 'https://s2.adlibris.com/images/7708045/harry-potter-and-the-goblet-of-fire.jpg');
INSERT INTO books (name, pages, isbn, cover_url) VALUES ('Harry Potter and the Order of the Phoenix', 400, '127', 'https://s2.adlibris.com/images/12235167/harry-potter-and-the-order-of-the-phoenix.jpg');
INSERT INTO books (name, pages, isbn, cover_url) VALUES ('Harry Potter and the Half-Blood Prince', 450, '128', 'https://s1.adlibris.com/images/41455330/harry-potter-ja-puoliverinen-prinssi.jpg');
INSERT INTO books (name, pages, isbn, cover_url) VALUES ('Harry Potter and the Deathly Hallows', 500, '129', 'https://s2.adlibris.com/images/12275437/harry-potter-and-the-deathly-hallows.jpg');


