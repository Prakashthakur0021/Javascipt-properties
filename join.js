/* 
 join :- The array join method creates a string from an array by 
         contatinating all the elements from an array.
         By default it uses ','(comma) as a separator but you can specify 
         what separator you want to be added btw the items.
*/
console.clear();

const countries = ["India", "USA", "S.Korea"];

const res = countries.join(", ");

console.log(" I want to visit to " + res);

// const res = countries.slice(0, -1).join(", ");
// console.log(countries);

// console.log("I want to visit to " + res + " and " + countries.splice(-1));
