
const ticket = new Promise (function(resolve, reject)
{
    const isBoarded = false;
    if(isBoarded)
    {
        resolve("You're not in the flight ");
    }
    else 
    {
        reject ("Your flight has cancelled");
    }
});

ticket 

    .then((data) =>
    {
    console.log("Ohh yaah", data);
    }
    )

    .catch((data) =>
    {
        console.log("oh no", data);
    }
    )

    .finally(() =>
    {
        console.log("I will always executed");
    })


