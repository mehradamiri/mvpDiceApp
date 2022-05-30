var slider = document.getElementById("myRange");
var output = document.getElementById("Dcustom");
var diceNum = document.getElementById("diceNum")
let mainNum = 0 ;
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = "D"+ this.value;
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

var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}