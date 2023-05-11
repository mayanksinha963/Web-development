function getCheese(callback)
{
    setTimeout(() => {
        const cheese = "🧀";
        console.log("Here is your cheese", cheese);
        callback (cheese);
    }, 2000);

}

function getdough (cheese, callback)
{
    setTimeout(() => {
        const dough = cheese + "🍩";
        console.log("Here is your dough", dough);
        callback (dough);
    }, 2000);
}

function getpizza (dough, callback)
{
    setTimeout(() => {
        const pizza = dough + "🍕";
        console.log("Here is your pizza", pizza);
        callback (pizza);
    }, 2000);
}

getCheese((cheese) =>
{
    console.log("Your Cheese is ready", cheese);
    getdough(cheese, (dough) =>
    {
        console.log("Your dough is ready", dough);
    
    getpizza(dough, (pizza)=> 
    {
        console.log("Your pizza is ready", pizza);

    });
});
})