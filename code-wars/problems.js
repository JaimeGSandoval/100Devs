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

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {
  const sorted = numbers.sort((a, b) => a - b);
  return sorted[0] + sorted[1];
}

// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
  return array.reduce((acc, curr) => acc + curr, 0) % 2 === 0 ? 'even' : 'odd';
}

// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list. Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

// Write a function which takes a list of strings and returns each line prepended by the correct number. The numbering starts at 1. The format is n: string. Notice the colon and space in between.

var number = function (array) {
  return array.map((el, i) => `${i + 1}: ${el}`);
};

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

function capitals(word) {
  const result = [];

  word.split('').forEach((char, i) => {
    if (char === char.toUpperCase()) result.push(i);
  });

  return result;
}
