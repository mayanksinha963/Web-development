const a = 10;
const b = 15;
sum(a,b);
function sum (a,b)
{
    console.log("The result is", a+b);
}

const c = 100;
const d = 500;
sum(c,d);

const square = function(num)
{
    return num *num;
};

console.log(square);

console.log(square(5));

function addSquare (a, b)
{
    const sa = square(a);
    const sb = square (b);
    function square(num)
    {
        return num*num;
    }
    return sa + sb;
}

console.log(addSquare(3,5));