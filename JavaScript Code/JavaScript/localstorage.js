const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const save = document.getElementById('save');
const temp = document.getElementById('ddata');




save.addEventListener("click", (event)=>
{
    saveData(event);
    
});


function saveData(event)
{
    const rate = '@';
    const last = '.com';
    
    
    if(!name.value || !email.value || !phone.value || !email.value.includes(rate) || !email.value.includes(last) )
    {
        alert("Please fill the form");
        event.preventDefault();
        // window.stop();
    }
    else{
    let data = JSON.parse(localStorage.getItem('user-define')) ?? [];
    let checkstatus = 0;
    for (let v of data) {
        if(email.value === v.email || phone.value === v.phone)
        {
            checkstatus = 1;
        }
    }

    if(checkstatus == 1)
    {
        alert("Email id or phone is already exist");
    }
    else
    {
    data.push({
        'name' : name.value,
        'email' : email.value,
        'phone' : phone.value,
    })
   
    localStorage.setItem('user-define', JSON.stringify(data));
    blindData();
    }
    }
    

    // let data = JSON.parse(localStorage.getItem('user-define')) ?? [];
    // data.push({
    //     'name' : name.value,
    //     'email' : email.value,
    //     'phone' : phone.value,
    // })
    // console.log('hello');
    // localStorage.setItem('user-define', JSON.stringify(data));
    // blindData();
    
    event.preventDefault();
}

function blindData()
{
    const cardclone = temp.content.cloneNode(true);
    const nameid = cardclone.querySelector("#nameid");
    const emailid = cardclone.querySelector('#emailid');
    const phoneid = cardclone.querySelector('#phoneid');
    const data = document.querySelector('.data');

    
    nameid.innerHTML = name.value;
    emailid.innerHTML = email.value;
    phoneid.innerHTML = phone.value;

    data.appendChild(cardclone);
}

// cross.addEventListener("click", ()=>
// {
    
//     cardclone.remove();
// })







