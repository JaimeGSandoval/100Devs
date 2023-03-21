document.querySelector('#yell').addEventListener('click', run);

function run() {
  const fName = document.querySelector('#firstName').value;
  const fMidName = document.querySelector('#firstMiddle').value;
  const lMidName = document.querySelector('#lastMiddle').value;
  const lName = document.querySelector('#lastName').value;
  const fullName = document.querySelector('#placeToYell');
  const yellText = document.querySelector('#secondPlaceToYell');

  //Add what you should be doing - conditionals go here
  if (fName && fMidName && lMidName && lName) {
    fullName.innerText = `${fName} ${fMidName} ${lMidName} ${lName}`;
    yellText.innerText = "You've done messed child";

    return;
  }

  yellText.innerText = "Okay, you're in trouble, but not much trouble";
}
