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
    let cards = 0;
    let total = [];
    if (list.lengh == 0) noList();
    else list.forEach(gift => {
      let card = [];
      if (cards == 0) {
        card.push('<div class="grid">');
      }
      card.push('<article class="card">');
      // head
      card.push('<header>'+gift.name+'</header>');
      // body
      if (gift.note) card.push('<p>'+gift.note+'</p>');
      if (gift.picture) card.push('<img src="'+gift.picture+'" alt="Image de '+gift.name+'">');
      // foot
      if (gift.price || gift.link) {
        card.push('<footer>');
        if (gift.price) card.push('<kbd class="price">'+gift.price+'</kbd>')
        else card.push('<span></span>');
        if (gift.link) card.push('<a href="'+gift.link[0]+'" target="_blank" rel="noopener noreferrer">'+gift.link[1]+'</a>');
        card.push('</footer>');
      };
      card.push('</article>');
      cards += 1;
      if (cards == 2) {
        card.push('</div>');
        cards = 0;
      };
      total.push(card.join(''));
    });
    div.setAttribute("aria-busy","false");
    div.innerHTML += total.join('');
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
