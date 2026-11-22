// Task 5: getShippingCost (Easy)
// Calculate the shipping price (use switch).
//
// - "OM" costs 2, "AE" costs 5, any other country costs 15.
// - Express delivery doubles the price.

function getShippingCost(country, isExpress) {

  const multipler = isExpress ? 2 : 1;

  switch (country) {
    case "OM": return 2 * multipler;
    case "AE": return 5 * multipler;
    default: return 15 * multipler;
  }
  // your code
}

// Expected output:
console.log(getShippingCost("OM", false));  // 2
console.log(getShippingCost("AE", false));  // 5
console.log(getShippingCost("US", false));  // 15
console.log(getShippingCost("OM", true));   // 4
console.log(getShippingCost("US", true));   // 30
