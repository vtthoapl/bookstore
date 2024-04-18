<script>
  import { createBook } from "../../http-actions/books-api.js";

  let name = $state("");
  let authorName = $state("");
  let pages = $state("");
  let isbn = $state("");
  let imageUrl = $state("");

  const addBook = async () => {
    const book = { name, authorName, pages, isbn, imageUrl };
    const response = await createBook(book);
    if (response.error) {
      console.log(response.error);
      return;
    }

    name = "";
    authorName = "";
    pages = "";
    isbn = "";
    imageUrl = "";

    console.log("Book added!");
  };
</script>

<style>
  /* Form container */
  .form-container {
    max-width: 500px;
    margin: 50px auto;
    padding: 25px 50px;
    background-color: #faf6f6;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(199, 198, 198, 0.1);
    color: rgb(8, 8, 8);
    font-family: Roboto, HelveticaNeue, Helvetica Neue, Helvetica, Arial, sans-serif;
  }

.title {
  text-align: center;
  font-weight: bold;
  margin-bottom: 1rem;
}

  /* Input fields */
  .input-field {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1.5rem;
    border: 1px solid #9c9494;
    border-radius: 8px;
    background-color: rgb(251, 249, 249);
    font-weight: bold;
  }

  /* Submit button */
  .submit-button {
    background-color:rgb(251, 249, 249);
    color: #0d0c0c;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 14px;
    cursor: pointer;
    margin: 0 auto;
    display: block;
    box-shadow: 0 4px 8px rgba(199, 198, 198, 10); /* Add box-shadow for depth effect */
  }

  .submit-button:hover {
    background-color: #d3d4d7;
  }
</style>

<div class="form-container">
  <h1 class="title">ADD A BOOK</h1>
  <label for="name" class="block mb-2 font-bold">Book Name:</label>
  <input type="text" id="name" name="name" class="input-field" bind:value={name} required />
  <label for="authorName" class="block mb-2 font-bold">Author Name:</label>
  <input type="text" id="authorName" name="authorName" class="input-field" bind:value={authorName} reqiured />
  <label for="pages" class="block mb-2 font-bold">Number of Pages:</label>
  <input type="number" id="pages" name="pages" class="input-field" bind:value={pages} required />
  <label for="isbn" class="block mb-2 font-bold">ISBN:</label>
  <input type="text" id="isbn" name="isbn" class="input-field" bind:value={isbn} required />
  <label for="imageUrl" class="block mb-2 font-bold">Image URL:</label>
  <input type="text" id="imageUrl" name="imageUrl" class="input-field" bind:value={imageUrl} required/>
  <button class="submit-button font-bold" on:click={addBook}>Add Book</button>
</div>
