const contestants = document.querySelectorAll('.contestant');
const winner = document.querySelector('#winner');

Array.from(contestants).forEach((element) => element.addEventListener('click', checkForRose));

function checkForRose(e) {
  document.querySelector('#nikki').classList.add('hidden');

  if (e.target.classList.contains('rose')) {
    winner.innerText = 'Correct, Nikki won!';
    document.querySelector('#nikki').classList.toggle('hidden');
  } else {
    winner.innerText = 'Incorrect! Try again';
  }
}
