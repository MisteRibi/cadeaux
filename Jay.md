# Gifts list for Jay
<div class="list"></div>
<script>
const div = document.getElementById("list");
const listURL = "./assets/jay.json";
const list = new Request(listURL);
const wishlist = await fetch(list);
const WL = await wishlist.json();
if (div) div.innerHTML = WL
</script>