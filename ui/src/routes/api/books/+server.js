import { json } from "@sveltejs/kit";
import { sql } from "./database.js";

export const GET = async () => {
  const books = await sql`SELECT * FROM books`;
  return json(books);
};

export const POST = async ({ request }) => {
  const body = await request.json();
  if (!body.name || !body.pages || !body.isbn) {
    return json({ error: "Missing required fields" }, { status: 400 });
  }

  const book = {
    name: body.name,
    pages: body.pages,
    isbn: body.isbn,
  };

  const result =
    await sql`INSERT INTO books (name, pages, isbn, cover_url) VALUES (${book.name}, ${book.pages}, ${book.isbn}, '#') RETURNING id`;

  const insertedBook = { id: result[0].id, ...book };

  console.log("Book object: ", book);
  console.log("Book added!");

  return json(insertedBook, { status: 200 });
};
