const foxImg = document.querySelector('img');
const foxImgLink = document.querySelector('a');
document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
  const url = 'https://randomfox.ca/floof/';

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      foxImg.src = data.image;
      foxImgLink.href = data.link;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
