import { useBookStore } from "../stores/books.svelte.js";

const getBooks = async () => {
  const response = await fetch("/api/books");
  //const response = await fetch("http://localhost:8000");
  return await response.json();
};

const createBook = async book => {
  const response = await fetch("/api/books", {
    //const response = await fetch("http://localhost:8000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });

  const data = await response.json();
  if (!data.error) {
    const bookStore = useBookStore();
    bookStore.addBook(data);
    //data variables stores an object with the book properties
  }

  return data;
};

const deleteBook = async id => {
  const response = await fetch(`/api/books/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();
  if (data.error) {
    console.error(data.error);
  } else {
    const bookStore = useBookStore();
    bookStore.deleteBook(id);
  }
};

export { getBooks, createBook, deleteBook };
