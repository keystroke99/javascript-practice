`use strict`
/* 
        The spread(...) syntax allows an interable, such as an array or string, to be expanded in places
where zero or more arguments (for function calls ) or elements (for array literals) are expected.
*/

function sum(x, y, z) {
    return x + y+ z;
}

const numbers = [1,2,3];

// pass arguments to function using spread operator
console.log(sum(...numbers));

// pass arguments to fucntion using apply() method
console.log(sum.apply(null, numbers));

// Copying an Array
let fruits = ['apple', 'orrange', 'banana'];
let newFruitArray = [...fruits];
console.log(newFruitArray);

// Spreading elements together with an Individual element
newFruitArray = ['cherry', ...fruits];
console.log(newFruitArray);

// Concatenating Arrays
let arr1 = ['a', 'b', 'c'];
let arr2 = ['d', 'e', 'f'];
console.log([...arr1,...arr2]);

// Spreading elements on function calls
const getFruits = (f1,f2,f3,f4) => {
    console.log(`Fruits: ${f1}, ${f2}, ${f3}, ${f4}`);
}
getFruits(...newFruitArray);

// Spread syntax for object literals
const obj1 = {
    name: 'Rohini Kumar Damuluri',
    age: 30
};

const obj2 = {
    location: 'Hyderabad',
    pinCode: 500090
};

console.log({...obj1, ...obj2});
