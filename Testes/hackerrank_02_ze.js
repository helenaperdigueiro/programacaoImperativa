/* 'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
} */

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/

// function getSecondLargest(nums) {
//     let biggest = null;
//     let secondBiggest = null;
    
//     nums.forEach(num => {
//         if (biggest <= num) {
//             if (biggest != num) { 
//             secondBiggest = biggest;
//             }
//             biggest = num;
//         } else if (secondBiggest== null || secondBiggest < num){            
//             secondBiggest = num
//         }
//     })
//     return secondBiggest;
// }


function getSecondLargest(nums) {
    let biggest = 0;
    let secondBiggest = 0;

    nums.forEach(num => {
        if (biggest < num && biggest != num) {
            secondBiggest = biggest;
            biggest = num;
        } else if (secondBiggest < num && num != biggest) {
            secondBiggest = num
        }
    })
    return secondBiggest;
}

console.log(getSecondLargest([2, 3, 6, 6, 5]))
console.log(getSecondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(getSecondLargest([10, 9, 9, 8, 8, 11, 8, 0, 9, 1]))
console.log(getSecondLargest([1, 2, 3, 4, 5]))

/* function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);

    console.log(getSecondLargest(nums));
} */