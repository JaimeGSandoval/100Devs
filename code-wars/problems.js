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
