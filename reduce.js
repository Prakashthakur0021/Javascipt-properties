const arr = [1, 20, 3, 4, 50, 6, 7];

// return a single value (reduce)
const sum = arr.reduce((accumulator, item) => {
  return accumulator > item ? accumulator : item;
}, -Infinity);

console.log(arr);
console.log(sum);
