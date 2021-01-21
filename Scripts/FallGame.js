var character = document.getElementById("character");
var interval;
var both = 0;

function moveLeft(){
    var left =
     window.getComputedStyle(character).getPropertyValue("left");
    character.style.left = left + 2 + "px";
}

function moveRight(){
    var left =
     window.getComputedStyle(character).getPropertyValue("left");
     character.style.left = left - 2 + "px";
}

document.addEventListener("keydown", event => {
    if(both==0){
        both++;
    if(event,key==="ArrowLeft"){
        interval = setInteraval(moveLeft, 1);
    }
    if(event,key==="ArrowRight"){
      interval = setInterval(moveRight, 1)  
    }
});

document.getEventListener("keyup", event =>{
    clearInterval(interval);
});