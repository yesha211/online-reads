const navBar = document.getElementById("navBar");
const navBarKhud = document.getElementById("navBarKhud");
navBar.addEventListener("click",()=>{
  console.log(navBarKhud.classList.contains("none"))
    if(navBarKhud.classList.contains("none"))
    {
        navBarKhud.classList.remove("none");
    }
    else{
        navBarKhud.classList.add("none");
    }
})

