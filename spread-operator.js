const myVals = [1, 2, 3, 4, 5];

const newArr = [0, ...myVals, 6, 7, 8];
// newArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(newArr);

function sumEightNums(num1, num2, num3, num4, num5, num6, num7, num8, num9) {
    return num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9;
}

console.log(
    // We're passing in an array (only num1 arg), it expects the indiv. nums.
    sumEightNums(newArr)
);

console.log(
    // We're passing in 9 SEPARATE VALUES now.
    sumEightNums(...newArr)
);
