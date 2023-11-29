`use strict`
/* 
    A Map holds key-value pairs where the keys can be any datatype.
    A Map remembers the original insertion order of the keys.
*/

// create a Map
const fruits = new Map([['apples', 500], ['oranges', 300]]);

// get value from Map
console.log(fruits.get('apples'));

// check if value is present in Map
console.log(fruits.has('apples'));

// set value from a Map
fruits.set('bananas', 1000);
console.log(fruits);

// Iterate through all the Keys
for (const iterator of fruits.keys()) {
    console.log('iterator keys ', iterator)
}

// Iterate through all the Values of the Keys
for (const iterator of fruits.values()) {
    console.log('iterator values ', iterator);
}

// Iterate through the whole Map elements
for (const iterator of fruits.entries()) {
    console.log('entries ', iterator);
}

// delete an element from a Map
fruits.delete('bananas');
console.log(fruits);

// delete all elements from a Map
fruits.clear();
console.log(fruits);

// Type of Map
console.log(typeof fruits);

