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
    list.forEach(gift => {
      let card = ['<article>'];
      card.push('<header>'+gift.name+'</header>');
      card.push('<img src="'+gift.picture+'" alt="Image de '+gift.name+'">');
      card.push('<footer>');
      card.push('<span class="price">'+gift.price+'</span>');
      card.push('<a href="'+gift.links[0]+'" target="_blank">Lien</a>');
      div.innerHTML += card.join('');
    });
  };
};

list();
</script>