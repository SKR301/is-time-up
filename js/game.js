var timeBegin = 0;
var timeEnd = 0;
var actualTime = 0;
var yourTime = 0;
var totalScore = 0;

document.getElementById("startTimer_btn").disabled  = true;
// document.getElementById("result").style.visibility  = 'hidden';
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
	document.getElementById("game").style.visibility  = 'hidden';

	actualTime_p = document.createElement("P");
	actualTime_p.classList.add("display-4");
	actualTime_p.classList.add("p-2");
	actualTime_p.classList.add("mt-2");
	actualTime_p.classList.add("border");
	actualTime_p.classList.add("bg-light");
	actualTime_p.classList.add("rounded-circle");
	actualTime_p.classList.add("circle-sm");
	actualTime_p.id = "actualTime";

	yourTime_p = document.createElement("P");
	yourTime_p.classList.add("display-4");
	yourTime_p.classList.add("p-2");
	yourTime_p.classList.add("mt-2");
	yourTime_p.classList.add("border");
	yourTime_p.classList.add("bg-light");
	yourTime_p.classList.add("rounded-circle");
	yourTime_p.classList.add("circle-sm");
	yourTime_p.id = "yourTime";

	col11_div = document.createElement("DIV");
	col11_div.classList.add("col");

	col12_div = document.createElement("DIV");
	col12_div.classList.add("col");

	row1_div = document.createElement("DIV");
	row1_div.classList.add("row");
	row1_div.classList.add("p-2");

	actualTimeLabel_p = document.createElement("H2");
	actualTimeLabel_p.classList.add("mt-2");
	actualTimeLabel_p.innerHTML = "Actual Time";

	yourTimeLabel_p = document.createElement("H2");
	yourTimeLabel_p.classList.add("mt-2");
	yourTimeLabel_p.innerHTML = "Actual Time";

	col21_div = document.createElement("DIV");
	col21_div.classList.add("col");

	col22_div = document.createElement("DIV");
	col22_div.classList.add("col");

	row2_div = document.createElement("DIV");
	row2_div.classList.add("row");
	row2_div.classList.add("p-2");





	container_div = document.createElement("DIV");
	container_div.classList.add("container");

	replay_btn = document.createElement("BUTTON");
	replay_btn.innerHTML = "Next Round";
	replay_btn.classList.add("btn");
	replay_btn.classList.add("btn-primary");
	replay_btn.classList.add("mt-3");
	replay_btn.classList.add("p-2");
	replay_btn.classList.add("mb-2");
	replay_btn.setAttribute('onclick','closeResult()');

	center_ele = document.createElement("CENTER");

	result = document.getElementById('result');

	col11_div.appendChild(actualTime_p);
	col12_div.appendChild(yourTime_p);
	row1_div.appendChild(col11_div);
	row1_div.appendChild(col12_div);

	col21_div.appendChild(actualTimeLabel_p);
	col22_div.appendChild(yourTimeLabel_p);
	row2_div.appendChild(col21_div);
	row2_div.appendChild(col22_div);
	container_div.appendChild(row1_div);

	center_ele.appendChild(replay_btn);

	result.appendChild(container_div);
	result.appendChild(center_ele);
	result.classList.add("border-secondary");
	result.classList.add("border");
	result.style.marginTop = "500px";

	document.getElementById("actualTime").innerHTML = actualTime;
	document.getElementById("yourTime").innerHTML = yourTime;	
}

//close result box
function closeResult(){
	document.getElementById("result").remove();
	document.getElementById("game").style.visibility  = 'visible';

	var time = document.getElementById("getTime");
	time.classList.add("btn");
	time.classList.add("btn-primary");
	time.classList.add("rounded");
	time.setAttribute('onclick','genTime()');
	time.classList.remove("text-primary");
	time.classList.remove("font-50");
	time.innerHTML = "Get Time";
}

//-----------------------------------------Need to change the scoring pattern;
//calculate score
function calcScore(){
	score = (10 - Math.abs(actualTime - yourTime)).toFixed(2);
	totalScore += score;
	document.getElementById('score').innerHTML = "SCORE : " + totalScore;
}

//redirect to save.html
function saveScore(){
  	sessionStorage.setItem("totalScore", totalScore);
	window.location = "save.html";
}