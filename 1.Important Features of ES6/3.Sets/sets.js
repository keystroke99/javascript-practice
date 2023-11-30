`use strict`
/* 
    Set is a collection of unique values. Each value can occur only once in a set.
    The values in a set can be either primitves like strings or intergets, but more complex object types like object literals or arrays can also be a part of set.
*/

let numbers = new Set([1,2,3,4,5]);
console.log(numbers);
console.log(typeof numbers);
// add a value to the Set
numbers.add(6);
console.log(numbers)
// check if a value exits in the Set
console.log(numbers.has(6));
console.log(numbers.size);
// delete an element from Set
numbers.delete(6);
console.log(numbers);

// Interating Sets
for (const item of numbers) {
    console.log(item);
}

// Relation to arrays
const myArray = ['value1', 'value2', 'value3'];
    // use the regular Set constructor to transform an Array into a Set
    const mySet = new Set(myArray);
    console.log(myArray);
    console.log(mySet.has('value1'));

// Remove duplicate elements from an Array
    const newArr = [1,2,3,3,4,5,5,6,6,7,7,7,7,7,8,];
    console.log([...new Set(newArr)]);

// Relation to Strings
    // case sensitve (Set will contain both Capital and Small letter which is repated)
    console.log(new Set("Aeroplane"));
    console.log(new Set("aeroplane")); // in the output second a will be removed

// create Set with strings and objects
let newSet = new Set(['a', {b:'c'}, {name: 'rohini kumar', age: 30}, 5, 6,7,8]);
console.log(newSet);
console.log(...newSet);