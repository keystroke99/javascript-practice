// Write a function called lucky_sevens which takes an array of integers and returns true if any three consecutive elements sum to 7.

let intArry = [1, 2, 4, 2, 3, 2, 2, 5, 9, 4, 2, 1];

function lucky_sevens() {
    // for loops
    for (let i = 0; i < intArry.length; i++) {
        if (i >= 2) {
            console.log(`Interarion ${i} == ${intArry[i]}`)
            console.log(`Sum of ${intArry[i - 2]}, ${intArry[i - 1]}, ${intArry[i]}  === `, intArry[i - 2] + intArry[i - 1] + intArry[i])
            if ((intArry[i - 2] + intArry[i - 1] + intArry[i]) === 7) {
                console.log(true);
                return null;
            }
        }
    }
}

lucky_sevens();