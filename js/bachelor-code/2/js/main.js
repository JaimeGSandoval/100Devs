const andi = document.querySelector('#andi');
const claire = document.querySelector('#claire');
const sharleen = document.querySelector('#sharleen');
const chosen = document.querySelector('#winner');

document.querySelector('#andiNext').addEventListener('click', andiNext);
document.querySelector('#claireNext').addEventListener('click', claireNext);
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext);

function andiNext() {
  chosen.innerText = 'Andi';

  claire.classList.add('hidden');
  sharleen.classList.add('hidden');
  andi.classList.toggle('hidden');
}

function claireNext() {
  chosen.innerText = 'Claire';

  andi.classList.add('hidden');
  sharleen.classList.add('hidden');
  claire.classList.toggle('hidden');
}

function sharleenNext() {
  chosen.innerText = 'Sharleen';

  claire.classList.add('hidden');
  andi.classList.add('hidden');
  sharleen.classList.toggle('hidden');
}
