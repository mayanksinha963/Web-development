const a = [4,1,6,-2,-5,3,2,-8,6,7];

const firstneg = (num) => num<0;

// const result = a.find(firstneg);
const result = a.findIndex(firstneg);

console.log(result);

a.forEach((num, i)=>{
    console.log("array num", num, i);
});