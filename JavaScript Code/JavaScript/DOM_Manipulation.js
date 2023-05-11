// const myBody = document.body;
// // myBody.style.backgroundColor = "Red";
// console.log(myBody);


// const box2 = document.getElementById('box-2');

// // box2.style.backgroundColor = "orange";
// console.log(box2);

// const div = document.getElementsByTagName('div');
// console.log(div);

// const boxes = document.getElementsByClassName('box');
// console.log(boxes);

// const random = document.querySelector('.container #box-1');
// console.log(random);


//.................................................................

const box = document.getElementById('box-1');
console.log(box.classList);
box.classList.add('round-border');

const box2 = document.getElementsByClassName('box');

for(let i =0; i<box2.length; i++)
{
    box2[i].classList.add('color');
}

box.classList.remove('color');

const newParagraph = document.createElement('p');
newParagraph.innerText = "This is brand new";

const container = document.getElementById('container');
container.appendChild(newParagraph);
// box.style.color ='blue';
// box.innerHTML = "<h3>Hello Everyone</h3>";
