const box = document.getElementById('box-1');
box.addEventListener('click', ()=>
{
    console.log('click by event')
})

box.addEventListener('click', ()=>
{
    console.log('click by event 2')
})

const container = document.getElementById('container');

box.addEventListener('mousemove', (e)=>
{
    console.log('click by event', e.clientX, e.clientY);
})

const nameInput = document.getElementById('nameInput');
nameInput.addEventListener('keypress', (e) =>
{
    console.log('key', e.key)
})

nameInput.addEventListener('focus', (e) =>
{
    console.log('key', e);
})

container.addEventListener('click', () =>
{
    console.log('clicked on container');
},true);