/* Splice
 the splice method changes an given array by removing or replacing existing
 elements from it, it gets a starting index, a count(meaning how many elements you
 want to remove) and optionally new elements which will be placed inside of the array 
 in the end it will the change the array it will called upon and it will return an 
 array with the removed items
*/
console.clear();

const arr = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [1, 2, 3, 4, 5];

const deleted = arr.splice(2, 1);
arr2.splice(4, 0, 23, 45);

console.log(arr);
console.log(deleted);
console.log(arr2);
