var timeBegin = 0;
var timeEnd = 0;
var actualTime = 0;
var yourTime = 0;

document.getElementById("startTimer_btn").disabled  = true;
document.getElementById("result").style.visibility  = 'hidden';


function genTime(){
	document.getElementById("getTime").remove();
	document.getElementById('time').style.visibility  = 'visible';
	actualTime = Math.floor(Math.random() * 9 + 1);
	document.getElementById("time").innerHTML = actualTime;
	document.getElementById("startTimer_btn").disabled = false;
}

function startTime(){
	timeBegin = new Date();

	var btn = document.getElementById("startTimer_btn");
	btn.classList.remove("btn-success");
	btn.classList.add("btn-danger");
	btn.innerHTML = "STOP";
	btn.setAttribute('onclick','stopTime()')
	btn.id = "stopTimer_btn";
}

function stopTime(){
	timeEnd = new Date();
	yourTime = (timeEnd - timeBegin) / 1000;
	showResult();
}

function showResult(){
	document.getElementById("result").style.visibility  = 'visible';

	document.getElementById("actualTime").innerHTML = actualTime;
	document.getElementById("yourTime").innerHTML = yourTime;	
}

function closeResult(){
	document.getElementById("result").style.visibility  = 'hidden';
	document.getElementById("game").style.visibility  = 'visible';

	var btn = document.getElementById("stopTimer_btn");
	btn.classList.remove("btn-danger");
	btn.classList.add("btn-success");
	btn.innerHTML = "START";
	btn.setAttribute('onclick','startTime()')
	btn.id = "startTimer_btn";


}

function saveScore(){
	window.location = "save.html";  
}