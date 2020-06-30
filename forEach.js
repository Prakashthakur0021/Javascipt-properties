var list1 = [1, 2, 3, 4, 5];

// It run function for each item in array
// It doesn't return anything
list1.forEach((item, index) => {
  console.log("arr[" + index + "] = " + item * index);
});

// list1.forEach(item, index, (arr) => {
//   console.log("arr[" + index + "] = " + item);
// });
