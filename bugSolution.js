function foo(a, b) {
  // Type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Inputs must be numbers';
  }
  return a + b; 
}

console.log(foo(1, '1')); // Output: Error: Inputs must be numbers
console.log(foo(1, 1)); // Output: 2

//Alternative: Explicit Type Conversion
function foo2(a, b) {
  return Number(a) + Number(b);
}
console.log(foo2(1, '1')); //Output: 2