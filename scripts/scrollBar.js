let totalHeight = document.documentElement.scrollHeight;

let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");

let box = [box1, box2, box3, box4, box5];

let sec = totalHeight / 5;
let index = 0;
box[index].innerHTML = "&#9671";
box[index].classList.add("rotate");




window.addEventListener("scroll", (event)=>{
    let scroll = this.scrollY;
    
    if(scroll < sec * 0.5){
        index = 0;
    }
    else if(scroll < sec*1){
        index = 1;
    }
    else if(scroll < sec*2){
        index = 2;
    }
    else if(scroll < sec*3){
        index = 3;
    }
    else if(scroll < sec*4){
        index = 4;
    }

    box[index].innerHTML = "&#9671";
    box[index].classList.add("rotate");
    for(let i = 0; i < box.length; i++){
        if(i == index) continue;
        box[i].innerHTML = "&#9670";
        box[i].classList.remove("rotate");
    }
})