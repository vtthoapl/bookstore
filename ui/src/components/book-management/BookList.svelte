<script>
  import Book from './Book.svelte';
  import { useBookStore } from '../../stores/books.svelte.js';
  import { deleteBook } from '../../http-actions/books-api';

  let selectedBook = $state(null); 
  const bookStore = useBookStore();

</script>

<style>
  /* Styles for buttons */
  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  ol {
    padding-left: 20px; /* Adjust this value as needed */
  }

  /* Style for view button */
  .view-button {
    color: rgb(19, 18, 18);
    margin-right: 0.5rem;
    border: 1px solid #9c9494;
    border-radius: 8px;
    background-color: rgb(251, 249, 249);
    font-weight: bold;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
  }

  /* Style for delete button */
  .delete-button, .clear-button{
    color: rgb(19, 18, 18);
    border: 1px solid #9c9494;
    border-radius: 8px;
    background-color: rgb(251, 249, 249);
    font-weight: bold;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
  }

  /* Hover effect for buttons */
  button:hover {
    opacity: 0.8; /* Reduce opacity on hover */
  }
</style>

<!--<h2> Book </h2> --->

{#if bookStore.books.length === 0}
  <p>No books added yet!</p>
{:else}
  <ol>
    {#each bookStore.books as book, i (book.id)}
      <li>
       {i+1}.{book.name} <button class="view-button" on:click={() => selectedBook = book}>View</button><button class="delete-button" on:click={() => deleteBook(book.id)}> Delete</button>
      </li>
    {/each}
  </ol>
{/if}

{#if selectedBook}
  <Book book={selectedBook} />
  <button class="clear-button" on:click={() => selectedBook = null}>Clear</button>
{/if}
