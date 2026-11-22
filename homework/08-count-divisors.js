// Task 8: countDivisors (Easy)
// Count how many numbers from 1 to n divide n without a remainder.
//
// - The divisors of 6 are 1, 2, 3 and 6, so the answer is 4.
  console.log("____________08______________")

function countDivisors(n) {
  // your code
  let total = 0
  for (let i = 1; i <= n; i++) {
    if (n%i==0){total=total+1}

  } return total;
}

// Expected output:
console.log(countDivisors(1));   // 1
console.log(countDivisors(6));   // 4
console.log(countDivisors(7));   // 2
console.log(countDivisors(12));  // 6
console.log(countDivisors(36));  // 9
