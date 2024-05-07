<script> 
  let { book } = $props();
</script>

<!--
<h1>Viewing a book:</h1>

<p>Name: {book.name}</p>
<p>Number of pages: {book.pages}</p>
<p>ISBN: {book.isbn}</p>

{#if book.cover_url && book.cover_url !== ""}
  <img src={book.cover_url} alt="cover of the book">
{:else}
  <p>Cover of the book not available!</p>
{/if}
-->


<div class="flex w-full">
  <div class="w-1/2">
    {#if book.cover_url && book.cover_url !== ""}
      <img src={book.cover_url} alt="cover of the book" class=" mt-16 mx-32">
    {:else}
      <p>Cover of the book not available!</p>
    {/if}
  </div>

  <div class="w-1/2">
    <div class="flex">
      <h1 class="text-4xl font-bold border-b border-[#888888] mt-16">{book.name}</h1>
    </div>
    <p class="font-bold text-lg text-[#9EB1C4] my-4">{book.author}</p>
    <p class="text-[#888888] text-sm font-bold">{book.isbn}</p>
    <h2 class="mt-10 font-bold text-lg">Sinopsis</h2>
    <div class="flex flex-col items-center">
      <button class="my-28 font-bold text-black bg-[#D9D9D9] hover:bg-[#888888] focus:outline-none rounded-full text-sm px-12 py-3 text-center me-2">CLEAR BOOK</button>
    </div>
  </div>
</div>

