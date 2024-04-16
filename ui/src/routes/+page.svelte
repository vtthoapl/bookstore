<script>
  import BookList from '../components/book-management/BookList.svelte';
  import AddBook from '../components/book-management/AddBook.svelte';
  import NavBar from '../components/navbar/NavBar.svelte';
</script>

<NavBar />
<AddBook /> 
<BookList/>

<style>
  *{
    color: #222;
  }
  body{
    font-family: Roboto, HelveticaNeue, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-weight: 400;
    background: #ffffff;
  }
</style>