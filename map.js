var arr = [1, 2, 3, 4, 5];

// return a whole new array by mapping through each item in given array(map)
const arr2 = arr.map((item, index) => {
  return arr.indexOf(item);
});

console.log(arr);
console.log(arr2);
