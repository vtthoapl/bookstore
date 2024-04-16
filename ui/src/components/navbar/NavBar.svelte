<script>
  import Login from "../login&register/Login.svelte";
  import Register from "../login&register/Register.svelte";
import BottomNavBar from "./BottomNavBar.svelte";
import MiddleNavBar from "./MiddleNavBar.svelte";
  import StickerBottom from "./StickerBottom.svelte";
  import StickerStart from "./StickerStart.svelte";



</script>
<div id="nav">
    <StickerStart/>
    <MiddleNavBar />
    <BottomNavBar />
    <StickerBottom />
    <Login />
    <Register />
</div>

<style>
#nav {
    font-size: 16px;
    font-weight: 700;
}
</style>

