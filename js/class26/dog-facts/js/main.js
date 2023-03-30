const URL = 'https://dog-api.kinduff.com/api/facts';

document.querySelector('button').addEventListener('click', getDogFacts);

function getDogFacts() {
  const dogFactText = document.querySelector('#dog-fact');

  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      dogFactText.innerText = data.facts[0];
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
