


//function to get a random number
function getRandom(max){
  return Math.floor(Math.random() * Math.floor(max));

}

//random color selector for name of opening page
let bigNameColors = ['#eb4335', '#fcc0d0']
let randomN = getRandom(bigNameColors.length);
document.getElementById('bigName').style.color = "" + bigNameColors[randomN]+ "";

//get welcome text corresponding color depneding on opening header color
if (bigNameColors[randomN] == "#eb4335"){
  document.getElementById('desc').style.color = "#fcc0d0";
}
else{
  document.getElementById('desc').style.color = "#eb4335";
}
