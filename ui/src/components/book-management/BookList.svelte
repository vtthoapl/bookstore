<script>
  import Book from './Book.svelte';
  import { useBookStore } from '../../stores/books.svelte.js';
  import { deleteBook } from '../../http-actions/books-api';

  let selectedBook = $state(null); 
  const bookStore = useBookStore();

</script>

<h1>Books</h1>

{#if bookStore.books.length === 0}
  <p>No books added yet!</p>
{:else}
  <ul>
    {#each bookStore.books as book}
      <li>
        {book.name} <button on:click={() => selectedBook = book}>View</button><button on:click={() => deleteBook(book.id)}>Delete</button>
      </li>
    {/each}
  </ul>
{/if}

{#if selectedBook}
  <Book book={selectedBook} />
  <button on:click={() => selectedBook = null}>Clear</button>
{/if}
