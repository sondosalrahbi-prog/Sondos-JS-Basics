// Task 9: isPrime (Medium)
// Check if a number is prime.(عدد أولي)
//
// - A prime number is greater than 1 and divisible only by 1 and itself.
// - Numbers below 2 are not prime.
  console.log("____________09______________")

function isPrime(n) {

  if (n < 2) return false;
  if (n % 1 === 0 && n % n === 0) return true;
  else return false;
  // your code
}

// Expected output:
console.log(isPrime(-3));   // false
console.log(isPrime(1));    // false
console.log(isPrime(2));    // true
console.log(isPrime(7));    // true
console.log(isPrime(9));    // false
console.log(isPrime(13));   // true
console.log(isPrime(100));  // false
