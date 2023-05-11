const calculate = (a, b, operation) =>
{
    return operation(a, b);

}

const result = calculate(3,4, function(num1, num2)
{
    return num1+num2;
});

console.log(result);


const subtraction = (a,b) => a-b;

const subResult = calculate(7,5, subtraction);

console.log(subResult);

function multiply (num1, num2)
{
    return num1 * num2;
}

const multiplyresult = calculate(4, 5, multiply);

console.log(multiplyresult);

function getCheese (later)
{
    setTimeout(() => {
        const cheese = "🧀";
        console.log("here is cheese", cheese);
        later(cheese);
    }, 2000);
};

// getCheese((paneer) =>
// {
//     console.log("got the cheese", paneer);
// });

function makeDough (cheese, callback)
{
    setTimeout(() =>{
        const dough = cheese + "🍩";
        console.log("here is the dough", dough);
        callback (dough);
    }, 2000);
}

getCheese((cheese) =>
{
    makeDough(cheese, (dough)=>
    {
        console.log("got my dough", dough);
    });
});