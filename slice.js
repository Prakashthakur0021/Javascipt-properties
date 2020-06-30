console.clear();

// Its slice item from the array and retrun it to new array. It doesn't affect the given array
// array.slice(initialIndex,finalIndex(excluded))

const arr = [1, 2, 3, 4, 5];
const participats = ["prakash", "kameslh", "ramesh"];

const arr2 = arr.slice(2, 4);
const par = participats.slice(1);

console.log(arr);
console.log(arr2);
console.log(par);
