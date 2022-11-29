// Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding values 'b'.
// Return the object.

function myFunction(a, b) {

  //const x = {}
  //a.forEach((key, i) => (x[key] = b[i]))

  // reduce((accumulator, currentValue, currentIndex, array) => { /* … */ }, initialValue)
  return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
}

console.log(myFunction(["a", "b", "c"], [1, 2, 3]));
console.log(myFunction(["w", "x", "y", "z"], [10, 9, 5, 2]));
console.log(myFunction([1, "b"], ["a", 2]));
