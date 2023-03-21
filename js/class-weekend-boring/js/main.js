//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check);
const textOutput = document.querySelector('#placeToSee');

function check() {
  const day = document.querySelector('#day').value.toLowerCase();

  if (day === 'tuesday' || day === 'thursday') {
    textOutput.innerText = 'YOU HAVE CLASS';
  } else if (day === 'saturday' || day === 'sunday') {
    textOutput.innerText = 'Its The Weekend';
  } else if (day === 'humpday') {
    textOutput.innerText = 'HUUUUMPDAYYYY';
  } else {
    textOutput.innerText = 'BORING';
  }
}
