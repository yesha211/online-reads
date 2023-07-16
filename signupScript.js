const email = document.getElementById("email");
const username = document.getElementById("username");
const pass = document.getElementById("password");
const conpwd = document.getElementById("confirmpwd");
const course = document.getElementById("course");
const check = document.getElementById("check1");

//user which fields checked 
const sci = document.getElementById("sci");
const act = document.getElementById("act");
const adv = document.getElementById("adv");
const crime = document.getElementById("crime");
const horror = document.getElementById("horror");
const bio = document.getElementById("bio");
const cook = document.getElementById("cook");
const T = document.getElementById("true");
btn.addEventListener("click",(e)=>{
    let checkArray =[];
    if(sci.checked)
    {
        checkArray.push("sci");
    }
    if(act.checked)
    {
        checkArray.push("act");
    }
    if(adv.checked)
    {
        checkArray.push("adv");
    }
    if(crime.checked)
    {
        checkArray.push("crime");
    }
    if(horror.checked)
    {
        checkArray.push("horror");
    }
    if(bio.checked)
    {
        checkArray.push("bio");
    }
    if(cook.checked)
    {
        checkArray.push("cook");
    }
    if(T.checked)
    {
        checkArray.push("true");
    }

    if(checkArray.length===0)
    {
        alert("please choose atleast one intrest");
        return;
    }
    e.preventDefault();

    var user = {
        email : email.value,
        username : username.value,
        password : pass.value,
        confirmpwd : conpwd.value,
        course : course.value,
        check : checkArray
    };

    if(user.password!==user.confirmpwd)
    {
        alert("password dose not match");
        return;
    }

    if(localStorage.getItem(`${user.username}`))
    {
        alert("This username is alredy used!");
        return;
    }

    const json = JSON.stringify(user);
    localStorage.setItem(`${user.username}`,json);
    console.log('user added');
    email.value="";
    username.value="";
    pass.value="";
    conpwd.value="";
    course.value="";
    check.value="";
    sci.checked=false;
    act.checked=false;
    adv.checked=false;
    crime.checked=false;
    horror.checked=false;
    bio.checked=false;
    cook.checked=false;
    T.checked=false;
});