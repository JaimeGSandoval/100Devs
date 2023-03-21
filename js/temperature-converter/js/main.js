//Write your pseduo code first!

// only on click
document.querySelector('#convert').addEventListener('click', run);

function run() {
  // get value out of input
  let temp = document.querySelector('#temp-input').value;

  // convert the value
  temp = temp * (9 / 5) + 32;

  // convert value
  document.querySelector('#temp').innerText = temp;

  if (temp <= 32) {
    document.querySelector('#brrText').innerText = "Oh my god it's soo cold!!!";
  } else {
    document.querySelector('#brrText').innerText = '';
  }
}
