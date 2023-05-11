const words = ["Mayank", "Devang", 12, { name: "Mayank" }, function hello (){console.log("Hello World")},
];

console.log(words);

words[1] ="Saurabh";

console.log(words);

const newwords = words;

words[0] ="Dhruv";

console.log(words);

const nums = [5, 7, 11, 1015];
// console.log(nums.indexOf(10));
// console.log(nums.indexOf(100));
// console.log(nums.includes(15));

// nums.push("Mayank");
// console.log(nums);
// nums.unshift("Sinha");
// console.log(nums);
// nums.pop();
// console.log(nums);

// nums.shift();
// console.log(nums);

nums.sort();
console.log(nums);

const num1 = [5, 7, 9, 8];

num1.sort();
console.log(num1);

// const Subarray = nums.slice(1,4);

// console.log(Subarray);