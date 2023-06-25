// try {
//     console.log(age);
// } catch(err)
// {
//     console.log(err.name);
//     console.log(err.message);
// }

// const a = 2 * 4;
// console.log("Important", 8);

try {
    const res = prompt('Are you a robot ?');
    if (res === 'Y') {
        // throw {
        //     name: 'MAYANK',
        // }

        throw new Error('Robot found')
    }
}
catch (error) {
    // console.log(error);
    console.log(error.name, error.message);
}
finally{
    console.log("From finally");
}