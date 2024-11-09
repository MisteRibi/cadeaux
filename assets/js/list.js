export default function (name) {
  list(name);
};
async function list(name) {
  const listURL = "./assets/"+name+".json";
  const list = new Request(listURL);
  const response = await fetch(list);
  if (response.ok) {
    const wishlist = await response.json();
    createList(wishlist);
  } else noList();
};

function createList(list) {
  console.log('createList');
  const div = document.getElementById("list");
  if (div) {
    div.setAttribute("aria-busy","false");
    if (list.lengh == 0) noList();
    else list.forEach(gift => {
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

function noList() {
  console.log('noList');
  const div = document.getElementById("list");
  if (div) {
    div.setAttribute("aria-busy","false");
    div.innerHTML = '<article>Liste vide</article>';
  }
};
