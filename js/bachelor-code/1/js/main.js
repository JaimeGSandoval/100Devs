document.querySelector('#finalRose').addEventListener('click', hide);
const claire = document.querySelector('#claire');
const sharleen = document.querySelector('#sharleen');
const chosenText = document.querySelector('#chosenText');

function hide() {
  claire.style.display = 'none';
  sharleen.style.display = 'none';

  chosenText.innerText = 'Someone was chosen';
}
