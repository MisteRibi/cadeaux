# Gifts list for Jay
<div class="list"></div>
<script>
const div = document.getElementById("list");
async function list() {
  const listURL = "./assets/jay.json";
  const list = new Request(listURL);
  const wishlist = await fetch(list);
  const WL = await wishlist.json();
  return WL;
};
  const gifts = list();
  console.log(gifts);
  if (div) div.innerHTML = gifts;

</script>