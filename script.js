
//get screen height so parallax will fill whole page
console.log("height: " + window.innerHeight);
//so that it will be slightly bigger to fit everything
height = window.innerHeight + 250;
//size parallax to users window
document.querySelector(".parallax").style.height = "" + height + "px";


//function to get a random number
function getRandom(max){
  return Math.floor(Math.random() * Math.floor(max));

}

//random color selector for name of opening page
let bigNameColors = ['#e2bad4', '#7fb8d4']
let randomN = getRandom(bigNameColors.length);
document.getElementById('bigName').style.color = "" + bigNameColors[randomN]+ "";

//get welcome text corresponding color depneding on opening header color
if (bigNameColors[randomN] == "#e2bad4"){
  document.getElementById('welcome-info').style.color = "#7fb8d4";
}
else{
  document.getElementById('welcome-info').style.color = "#e2bad4";
}
