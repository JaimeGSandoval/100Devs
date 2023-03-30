const catImg = document.querySelector('img');
document.querySelector('button').addEventListener('click', getCatImage);

function getCatImage() {
  let catQuote = document.querySelector('input').value;

  if (catQuote.includes(' ')) {
    catQuote = catQuote.split(' ').join('%20');
  }

  const url = `https://cataas.com/cat/says/${catQuote}!`;

  fetch(url)
    .then((res) => res)
    .then((data) => {
      console.log(data);
      catImg.src = data.url;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
