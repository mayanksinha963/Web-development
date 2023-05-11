console.log("Hello");
setTimeout(function() {
    console.log("This will execute later");
}, 3000);

console.log("World");



// const sq = square (4);
const num = 5;
const later = setTimeout(function () {
    console.log(num*num);
}, 3000);

// function square (num)
// {
//     console.log(num*num);
// }

console.log(later);