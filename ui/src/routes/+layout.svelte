<script>
  import { onMount } from 'svelte';
  import { initBooks } from '../stores/books.svelte.js';
  
  onMount(() => {
    initBooks();

    document.body.classList.add('ready-for-testing');
  });
</script>

<slot />