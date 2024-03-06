import { json } from "@sveltejs/kit";
import { sql } from "../database.js";

export const DELETE = async ({ params }) => {
  console.log("Params: ", params);

  const { id } = params;

  console.log("Id: ", id);

  if (!id || isNaN(parseInt(id))) {
    return json({ message: "Invalid id parameter" }, { status: 400 });
  }
  await sql`DELETE FROM books WHERE id = (${id})`;

  console.log("Book deleted successfully");

  return json({ message: "Book deleted successfully" }, { status: 200 });
};
