const { fuchsia } = require("color-name");

/*
the array sort method sorts the elements of an array by manupulating the array 
the default sort array is acending it will convert the elements from the array 
to strings and then it will convert their sequences of utf-16 code unit values.

*/
console.clear();

const sales = [
  {
    name: "zaptop",
    price: 52000,
  },
  {
    name: "mobile",
    price: 10000,
  },
  {
    name: "tv",
    price: 32000,
  },
];

// for price according sort
// sales.sort((a, b) => a.price - b.price);

//for name according sort
const name = sales.map((item) => item.name);
name.sort();
console.log(name);

/* 
for Numbers we have to compare no because sort convert no to strings '53' and then compare it to utf-16
const numbers = [53, 2, 23, 1, 4, 2, 67, 3, 10, 3];

numbers.sort(compareFunction);

function compareFunction(a, b) {
  // 1. <0 ...... a comes first
  // 2. =0 ...... nothing will be changed
  // 3. >0 ...... b comes first
  return a - b;
}
console.log(numbers);
*/

/*
let names = ["prakash", "kamlesh", "atul", "sameer"];
names.sort();
console.log(names);
*/
