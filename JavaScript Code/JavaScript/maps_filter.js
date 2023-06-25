let students = [
    { id: "001", name: 'Anish', sports: 'Cricket' },
    { id: '002', name: 'Smriti', sports: 'Basketball' },
    { id: '003', name: 'Rahul', sports: 'Cricket' },
    { id: '004', name: 'Bakul', sports: 'Basketball' },
    { id: '005', name: 'Nikita', sports: 'Hockey' }
]

const newArray = students.filter((curValue) => {
    if (curValue.id % 2 == 0) return true;
    else return false;
})

// const names = students.map((curValue) =>
// {
//     return curValue.name;
// })

// const names = students.map((curValue) =>
// {
//     return `<li>${curValue.name}</li>`;
// });

const names = students
    .filter(curvalue => curvalue.sports === 'Cricket')
    .map((curValue) => {
        return `<li>${curValue.name}</li>`;
    });

const div = document.getElementById('container');

div.innerHTML = `<ul>${names.join("")}</ul>`;

console.log("New array here ...");
console.log(newArray);

console.log(names);