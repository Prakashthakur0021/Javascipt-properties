/* 
fill :- the array fill method changes all the elements inside an array with provided
        value
*/

console.clear();

function fillNo(n) {
  return Array(n)
    .fill(0)
    .map((_, idx) => idx + 1);
}

console.log(fillNo(20));

/*
const numbers = [1, 2, 3, 4, 5];
numbers.fill(0, 1, 4);
console.log(numbers);
*/

/*
const numbers = [1, 2, 3, 4, 5];
numbers.fill(20);
console.log(numbers);
*/
