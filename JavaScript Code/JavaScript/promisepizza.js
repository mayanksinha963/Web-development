function getCheese ()
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(()=>
        {
            const cheese = "🧀";
            resolve(cheese);
        }, 2000)
    }
)}

function getDough (cheese)
{
    return new Promise ((resolve, reject)=>
    {
        setTimeout(()=> {
            const Dough = cheese + "🍩";
            // resolve(Dough);
            reject("Due to bad cheese")
        }, 2000
        )
    })
}

function getPizza (Dough)
{
    return new Promise ((resolve, reject)=>
    {
        const pizza = Dough + "🍕";
        resolve(pizza);

    },2000); 
};

// getCheese().then((cheese)=>
// {console.log("Here is your Cheese", cheese);
//     return getDough(cheese);
// }).then((Dough)=>
// {
//     console.log("Here is your Dough", Dough);
//     return getPizza(Dough);
// }).then((Pizza)=>
// {
//     console.log("Here is your Pizza", Pizza);
// }).catch((data)=>
// {
//     console.log("Error occured", data);
// }).finally(()=>
// {
//     console.log("Process ended");
// })

async function orderPizza()
{
    try{
    const cheese = await getCheese();
    console.log("Here is your pizza", cheese);
    const Dough = await getDough(cheese);
    console.log("Here is your Dough", Dough);
    const pizza = await getPizza (Dough);
    console.log("Here is your pizza", pizza);
    } catch(err)
    {
        console.log("Error occured", err);
    }
}

orderPizza();
