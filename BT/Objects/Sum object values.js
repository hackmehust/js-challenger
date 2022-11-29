// Write a function that takes an object (a) as argument. Return the sum of all object values.

function myFunction(a) {
  let sum = 0;
  for (const key in a) {
    sum += a[key];
  }
  return sum;
//   return Object.values(a).reduce((sum, cur) => sum + cur, 0);
}

console.log(myFunction({ a: 1, b: 2, c: 3 }));
console.log(myFunction({ j: 9, i: 2, x: 3, z: 4 }));
console.log(myFunction({ w: 15, x: 22, y: 13 }));
