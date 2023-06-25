// import { multiply } from "./utility.js";

// const result = multiply(2,3,4);
// console.log(result)

// import { multiply as mul, subtraction, plus } from "./utility.js";



// const result = mul(12,334,53);

// const subt = subtraction(23, 43);

// const add = plus(34, 54);
// console.log(result, subt, add);

import * as utility from "./utility.js"

const result = utility.multiply(1,2,3);

const sub = utility.subtraction(32,54);

const add = utility.plus(23,32);

console.log(result, sub, add);