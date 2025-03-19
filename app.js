var stoplight = document.getElementById("stoplight");
var readylight = document.getElementById("readylight");
var golight = document.getElementById("golight");

function btn1(){
    stoplight.style.backgroundColor = "red";  
    readylight.style.backgroundColor = "rgb(189, 162, 162)";
    golight.style.backgroundColor = "rgb(189, 162, 162)";
}

function btn2(){
    readylight.style.backgroundColor = "yellow"; 
    stoplight.style.backgroundColor = "rgb(189, 162, 162)";
    golight.style.backgroundColor = "rgb(189, 162, 162)";
}

function btn3(){
    golight.style.backgroundColor = "green";  
    stoplight.style.backgroundColor = "rgb(189, 162, 162)";  
    readylight.style.backgroundColor = "rgb(189, 162, 162)";
}