const text = document.querySelector("#textid");
console.log(text.value)

text.addEventListener('focus', () =>
{
    console.log(text.value.lastIndexOf("."));
    text.setSelectionRange(0, text.value.lastIndexOf("."));
})

// document.querySelector("#textid").addEventListener("focus", function()
// {
//     console.log(this.value.lastIndexOf("."));
// })