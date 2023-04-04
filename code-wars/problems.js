// 1. Make Number Negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  return num < 0 ? num : -num;
}

makeNegative(1);
makeNegative(-5);
makeNegative(0);

// 2. Copy Paperwork
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}

paperwork(5, 5);
paperwork(5, -5),
  // 3. Remove First and Last character
  function removeChar(str) {
    return str.slice(1, -1);
  };

removeChar('eloquent');
removeChar('country');

//4. Basic Mathematical Operations
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).

// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
  var cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2,
  };

  return cases[operation];
}

// 5. Reversed Sequence
// Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = (n) => {
  const result = [];

  while (n > 0) {
    result.push(n);
    n--;
  }

  return result;
};

// Sum mix
function sumMix(x) {
  return x.reduce((acc, curr) => acc + Number(curr), 0);
}

// Points
function points(games) {
  let result = 0;

  games.forEach((score) => {
    if (score[0] > score[2]) {
      result += 3;
    } else if (score[0] === score[2]) {
      result += 1;
    }
  });

  return result;
}

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr ** 2, 0);
}

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result += str[i].repeat(2);
  }
  return result;
}

function doubleChar(str) {
  return str.split('').reduce((acc, curr) => acc + curr.repeat(2), '');
}

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

function grow(x) {
  return x.reduce((acc, curr) => (acc *= curr), 1);
}
