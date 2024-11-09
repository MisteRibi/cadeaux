# Gifts list for Jay
<div id="list" aria-busy="true"></div>
<script>
async function list() {
  const listURL = "./assets/jay.json";
  const list = new Request(listURL);
  const wishlist = await fetch(list);
  const WL = await wishlist.json();
  createList(WL);
};

function createList(list) {
  console.log('createList');
  const div = document.getElementById("list");
  if (div) {
    div.setAttribute("aria-busy","false");
    div.innerHTML = list;
  };
};

list();
</script>