
var icon =document.getElementById("mode-change");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(icon.className=="bx bx-sun"){
        icon.className="bx bx-moon"; 
    }else{
        icon.className="bx bx-sun"; 
    }
}

///toogle class active
const navbarNav = document.querySelector('.header-nav');

//menu clicked
document.querySelector('#menu').onclick=()=> navbarNav.classList.toggle('active');


// click other side to delete

const menu = document.querySelector('#menu');

document.addEventListener('click',function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});