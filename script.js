const img = document.querySelector('img');
const button = document.querySelector('button');
const search = document.querySelector('input');
const div = document.querySelector('.wrapper');
const controls = document.querySelector('#controls');
const spans = document.querySelectorAll('span');
const first = document.querySelector('#first-letter');
const heading = document.querySelector('.heading');
const main = document.querySelector('main');
const body = document.querySelector('body');
const icon = document.querySelector('i');
let url = 'https://api.giphy.com/v1/gifs/translate?api_key=HoD2pa83gqhBgOyTwrRksdv4jRni17Mv&s=';

button.addEventListener('click', () => {
  if (search.value === '') return;
  url = `https://api.giphy.com/v1/gifs/translate?api_key=HoD2pa83gqhBgOyTwrRksdv4jRni17Mv&s=${search.value}`;
  fetch(url, { mode: 'cors' })
    .then(response => response.json())
    .then(response => img.src = response.data.images.original.url)
    .then(landscape);
})
function landscape() {
  img.style.display = 'block';
  spans.forEach(span => span.style.fontSize = '40px');
  first.style.fontSize = '50px';

  if (body.clientWidth > 800) {
    div.style.cssText = 'flex-direction:row; justify-content: center;';
    controls.style.cssText = 'flex-direction: row;'
    icon.style.top = '0px';
    icon.style.right = '0px';
    icon.style.left = '65px';
  }
}
heading.addEventListener('click', () => {
  location.reload();
})