const nums = [1, 2, 3, 4, 5];

// <<1>>, <<2>>, 

let newArr = [];
for (const num of nums) {
    newArr.push(`<<${num}>>`);
}
console.log(newArr);


const mappedNums = nums.map(num => `<<${num}>>`);
console.log(mappedNums);
