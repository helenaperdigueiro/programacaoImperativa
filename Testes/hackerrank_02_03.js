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

function getSecondLargest(nums) {
    // Complete the function
    let maxInt = 0;
    let secondMaxInt = 0;
    if (nums.length >= 1 && nums.length <= 10) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] >= 0 && nums[j] <= 100) {
                if (nums[j] > maxInt && nums[j] != maxInt) {
                    secondMaxInt = maxInt
                    maxInt = nums[j]
                } else if (nums[j] > secondMaxInt && nums[j] != maxInt) {
                    secondMaxInt = nums[j]
                }
            } else {
                return 'Numero nao pode ser maior que 100'
            }
        }
    } else {
        return 'Array nao pode ter mais que 10 posicoes'
    }
    return secondMaxInt
}

console.log(getSecondLargest([1, 2, 3, 4, 5]))
console.log(getSecondLargest([2, 3, 6, 6, 5]))
console.log(getSecondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(getSecondLargest([10, 9, 9, 8, 8, 11, 8, 0, 9, 1]))
console.log(getSecondLargest([10, 9, 9, 8, 8, 11, 8, 0, 9, 150]))
console.log(getSecondLargest([10, 9, 9, 8, 8, 11, 8, 0, 9, 1, 5]))

/* function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);

    console.log(getSecondLargest(nums));
} */