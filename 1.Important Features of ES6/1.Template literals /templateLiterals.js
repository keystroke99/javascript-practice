/* ** Template literals  or Template strings **
    Template literals are string literals allowing embedded expressions
    Benefits:
        1.String interpolation
        2.Embedded expressions
        3.Multiline strings without hacks
        4.String formatting
        5.String tagging for safe HTML escaping, localization and more
*/

console.log(`Hello World!!!`);

// Multi line
console.log(`test for \nmultiline`);
console.log(`testing for 
multiline
strings`)

// Compare
console.log(`\`` === "`");
console.log(`\${1}` === "${1}")


// String Interpolation
const a = 5;
const b = 6;
// Old method for string concatenate
console.log("Addition of a+b is " + (a+b) +" and \nmultiplcation is " + (a*b));
// with template literals
console.log(`Addition of a+b is ${a+b} and \nmultiplication is ${a*b}`);


