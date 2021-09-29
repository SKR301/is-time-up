var timeBegin = 0;
var timeEnd = 0;
var actualTime = 0;
var yourTime = 0;
var totalScore = 0;

document.getElementById("startTimer_btn").disabled  = true;
document.getElementById("result").style.visibility  = 'hidden';
document.getElementById('game').style.visibility  = 'hidden';

//close instruction
function closeInstruction(){
	document.getElementById('instruction').remove();
	document.getElementById('game').style.visibility  = 'visible';
}

//generate time
function genTime(){
	var time = document.getElementById("getTime");
	time.classList.remove("btn");
	time.classList.remove("btn-primary");
	time.classList.remove("rounded");
	time.setAttribute('onclick','');
	time.classList.add("text-primary");
	time.classList.add("font-50");

	actualTime = Math.floor(Math.random() * 9 + 1);
	time.innerHTML = actualTime + " secs";
	document.getElementById("startTimer_btn").disabled = false;
}

//start timer
function startTime(){
	timeBegin = new Date();

	var btn = document.getElementById("startTimer_btn");
	btn.classList.remove("btn-success");
	btn.classList.add("btn-danger");
	btn.innerHTML = "STOP";
	btn.setAttribute('onclick','stopTime()');
	btn.id = "stopTimer_btn";
}

//stop timer
function stopTime(){
	timeEnd = new Date();
	yourTime = (timeEnd - timeBegin) / 1000;
	showResult();

	var btn = document.getElementById("stopTimer_btn");
	btn.classList.remove("btn-danger");
	btn.classList.add("btn-success");
	btn.innerHTML = "START";
	btn.setAttribute('onclick','startTime()');
	btn.id = "startTimer_btn";
	btn.disabled = true;

	calcScore();
}

//display result box
function showResult(){
	document.getElementById("result").style.visibility  = 'visible';

	document.getElementById("actualTime").innerHTML = actualTime;
	document.getElementById("yourTime").innerHTML = yourTime;	
}

//close result box
function closeResult(){
	document.getElementById("result").style.visibility  = 'hidden';
	document.getElementById("game").style.visibility  = 'visible';

	var time = document.getElementById("getTime");
	time.classList.add("btn");
	time.classList.add("btn-primary");
	time.classList.add("rounded");
	time.setAttribute('onclick','genTime()');
	time.classList.remove("text-primary");
	time.innerHTML = "Get Time";
}

//-----------------------------------------Need to change the scoring pattern;
//calculate score
function calcScore(){
	score = Math.round(10 - Math.abs(actualTime - yourTime)).toFixed(3);
	totalScore += score;
	document.getElementById('score').innerHTML = "SCORE : " + totalScore;
}

//redirect to save.html
function saveScore(){
  	sessionStorage.setItem("totalScore", totalScore);
	window.location = "save.html";
}