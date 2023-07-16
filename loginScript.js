const username = document.getElementById("username");
const password = document.getElementById("password");
const btn = document.getElementById("btnn");
let formdata;
btn.addEventListener("click",(e) =>{
  e.preventDefault();
  formdata = {
    username: username.value,
    password: password.value,
  };
  console.log("login info.", formdata);

  if (localStorage.getItem(`${formdata.username}`)) {
    const data = JSON.parse(localStorage.getItem(`${formdata.username}`));

    if(formdata.username===data.username){

        if(formdata.password===data.password){
            
          
            window.location.assign("collection.html");
          
            
            username.value="";
            password.value="";
            return;
        }
        else
        {
          alert("password wronge");
        }
        }
    else{
            alert("wrong username");
        }
  }
  else{
    alert("kindly signup");
  }
});
