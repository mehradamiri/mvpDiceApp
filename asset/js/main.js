var slider = document.getElementById("myRange");
var output = document.getElementById("Dcustom");
var diceNum = document.getElementById("diceNum")
let mainNum = 0 ;
let sliderNum
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
function push(max){
  if(mainNum != 0){
    document.getElementById("diceNum").style.fontSize = "20px";
    document.getElementById("diceNum").style.color = "#ffff";
  }
  // mainNum = Math.floor(Math.random() * max) + 1; 
  diceNum.innerHTML =  diceNum.innerHTML + "+" + max + "D" ;
  mainNum = mainNum + Math.floor(Math.random() * max) + 1;
  
}
function getNull() {
  diceNum.innerHTML = ""
  mainNum = 0 ;
}

function rollBtn() {
  document.getElementById("diceNum").style.fontSize = "32px";
  document.getElementById("diceNum").style.color = "red";
  diceNum.innerHTML = mainNum ;
}

function pushcustom() {
sliderNum = parseInt(slider.value)
push(slider.value)
}