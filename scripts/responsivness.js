let ham = document.querySelector(".hamburger")
let nav = document.querySelector(".navbar2-list")
let count = 0;

nav.addEventListener("click", ()=>{
    nav.classList.toggle("display-block-class");
    ham.innerHTML = "&#9776;"
    count++;
})
ham.addEventListener("click", ()=>{
    if(count % 2 == 0){
        ham.innerHTML = "&#10006;"
    }
    else{
        ham.innerHTML = "&#9776;"
    }
    count++;
    nav.classList.toggle("display-block-class");
})