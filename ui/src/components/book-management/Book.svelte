<script>
  let { book } = $props();
</script>

<h1>Viewing a book:</h1>

<p>Name: {book.name}</p>
<p>Number of pages: {book.pages}</p>
<p>ISBN: {book.isbn}</p>

{#if book.cover_url && book.cover_url !== ""}
  <img src={book.cover_url} alt="cover of the book">
{:else}
  <p>Cover of the book not available!</p>
{/if}