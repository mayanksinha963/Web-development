let p = fetch("https://goweather.herokuapp.com/weather/peris");

p.then((value1)=>
{
    return value1.json();
}).then((value2) =>
{
    console.log(value2);
})

let options = {
    method : "POST",
    headers : {
            "Content-type" : "application/json"
    },
    body : JSON.stringify(
        {
            title: "foo",
            body : 'bar',
            userId : '1',
        }
    )
}

fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then((response) => response.json())
  .then((json) => console.log(json));