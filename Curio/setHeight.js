function setHeight (){
let divWidth = document.getElementById('titlebox').offsetWidth;
let divHeight = divWidth * 0.666 + 'px';
document.getElementById('titlebox').style.height = divHeight;
}

window.onload = "setHeight()";
window.onresize = "setHeight()";
