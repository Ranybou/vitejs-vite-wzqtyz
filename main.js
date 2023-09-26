import * as bootstrap from 'bootstrap';
import './style.scss';
import { data } from './data';
import { nav } from './nav';
const listearticles = (articles) => {
  let html = '';
  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    let articleCard = `
      <a class="card col-5 col-md-3" href="/personne/?id=${article.id}">
        <img src="${article.image}" class="card-img-top" alt="avatar de ${article.titre}">
        <div class="card-body">
          <h5 class="card-title">${article.titre}</h5>
        </div>
      </a>
    `;
    html += articleCard;
  }
  return html;
};
let articles = data.sort();
document.querySelector('#app').innerHTML = `
  <main>
    ${nav}
    <div class="container-fluid my-4">
      <input type="text" id="search" class="d-flex  mx-auto mb-3" />
      <div id="liste" class="d-flex gap-3 flex-wrap justify-content-center">
        ${listearticles(articles)}
      </div>
    </div>
  </main>
`;
const inputSearch = document.querySelector('#search');
inputSearch.addEventListener('input', function (event) {
  const recherche = event.target.value;
  console.log(recherche);
  articles = data.sort().filter(function (article) {
    return (
      article.titre.toLowerCase().includes(recherche) ||
      article.contenu.toLowerCase().includes(recherche)
    );
  });
  document.querySelector('#liste').innerHTML = `
        ${listearticles(articles)}
`;
});
