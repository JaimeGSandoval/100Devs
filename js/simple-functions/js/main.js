//create a function that adds two numbers and alerts the sum
const addText = document.querySelector('#addOutput');
const productText = document.querySelector('#productOutput');
const divideText = document.querySelector('#divideOutput');

const calcText = 'Calculation is :';

function addTwoNumbers(num1, num2) {
  addText.innerText = `${calcText} ${num1 + num2}`;
}

addTwoNumbers(2, 4);

//create a function that multiplys three numbers and console logs the product
function multipliesThreeNums(a, b, c) {
  const product = a * b * c;
  productText.innerText = `${calcText} ${product}`;
}

multipliesThreeNums(2, 2, 2);

//create a function that divides two numbers and returns the ???
function dividesTwoNums(a, b) {
  divideText.innerText = `${calcText} ${a / b}`;
}

dividesTwoNums(6, 3);
