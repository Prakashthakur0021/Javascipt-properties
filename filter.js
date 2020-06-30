const arr = [1, 4, 2, 4, 2, 5, 3, 63, 24, 32, 1, 2, 7];

// const arr2 = arr.filter((item, index, array) => {
//   return index === array.indexOf(item);
// });

// It returns if the given condition is True(filter). It usually gives us the
// item is required from the array and assign it to new array

const arr2 = arr
  .map((item, index, array) => {
    if (index === array.indexOf(item)) {
      return item;
    } else {
      return -1;
    }
  })
  .filter((item) => {
    return item !== -1;
  });

console.log(arr);
console.log(arr2);

/*
const arr = [
  {
    name: "Prakash",
    age: 20,
  },
  {
    name: "Ramesh",
    age: 18,
  },
  {
    name: "Kamlesh",
    age: 4,
  },
];

const arr2 = arr.filter((item) => item.age >= 18);

console.log(arr);
console.log(arr2);


let arr = [1, 2, 3, 4, 5];

let newArr = arr.filter((item) => {
  return item % 5 !== 0;
});

console.log(arr);
console.log(newArr);
*/
