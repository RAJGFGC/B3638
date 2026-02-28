const nums = [1, 2, 3, 4, 5];

// const exponentialNumber = nums.map(function (num) {
//   return num * num;
// });

// lets do it in normal way
const exponentialNumber = [];
for (let i = 0; i < nums.length; i++) {
  exponentialNumber.push(nums[i] * nums[i]);
}

console.log(exponentialNumber);
