let input;
let count = 0;
let sum = 0;

do {
  input = +prompt("Enter a number:");

  if (!isNaN(input) && input !== 0) {
    sum += input;
    count++;
  } else if (isNaN(input) && input == 0) {
  }
  const average = count === 0 ? 0 : sum / count;
  console.log(sum, average);
} while (!isNaN(input) && input !== 0);
