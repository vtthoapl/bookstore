<script>
  import Book from './Book.svelte';
  import { useBookStore } from '../../stores/books.svelte.js';
  import { deleteBook } from '../../http-actions/books-api';

  let selectedBook = null; 
  const bookStore = useBookStore();

  const selectBook = (book) => {
  console.log("Book selected:", book);
  selectedBook = book;
  }

</script>

<div class=" bg-[#F5F5F5]">
<h1 class="text-[#000000] pt-10 pl-10 pb-3">LIST OF BOOKS</h1>

{#if bookStore.books.length === 0}
  <p class="text-[#9EB1C4] font-semibold p-5">No books added yet!</p>
{:else}
  <ul>
    {#each bookStore.books as book}
    <div class="flex w-full border-t-2 border-[#9EB1C4] last:border-b-2">
      <li class="text-[#9EB1C4] font-semibold p-5 w-3/6">
        {book.name}
      </li>
       <button on:click={() => { console.log("Button clicked"); selectBook(book); }} type="button" class="bg-[#D9D9D9] hover:bg-[#c5c4c4] h-8 rounded text-[#888888] font-bold self-center mr-3 w-2/6">View Book</button>
       <button on:click={() => deleteBook(book.id)} type="button" class="text-[#888888] bg-red-100 hover:bg-red-200 font-bold rounded text-sm p-2.5 text-center inline-flex items-center me-2 h-8 self-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
        <span class="sr-only">Icon description</span>
        </button>
    </div>
    {/each}
  </ul>
{/if}

{#if selectedBook}
  <div class="w-3/4"><Book book={selectedBook} /></div>
  <div class="w-1/4"><BookList/></div>
{/if}

</div>
