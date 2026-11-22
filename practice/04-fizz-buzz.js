// Task 4: fizzBuzz (Easy)
// Build an array of the numbers from 1 to n, with a twist.
//
// - Multiple of 3: use "Fizz". Multiple of 5: use "Buzz". Both: use "FizzBuzz".
// - Any other number stays as it is.

function fizzBuzz(n) {
  // your code
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) { arr.push("FizzBuzz") }
    else if (i % 3 === 0) { arr.push("Fizz") }
    else if (i % 5 === 0) { arr.push("Buzz") }
    else arr.push(i)

  }
  return arr;
}

// Expected output:
console.log(fizzBuzz(0));   // []
console.log(fizzBuzz(3));   // [1, 2, "Fizz"]
console.log(fizzBuzz(7));   // [1, 2, "Fizz", 4, "Buzz", "Fizz", 7]
console.log(fizzBuzz(15));  // [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
