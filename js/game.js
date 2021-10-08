var timeBegin = 0;
var timeEnd = 0;
var actualTime = 0;
var yourTime = 0;
var totalScore = 0;
var playTime = 0;

document.getElementById("startTimer_btn").disabled  = true;
document.getElementById('game').style.display  = 'none';

//close instruction
function closeInstruction(){
	document.getElementById('instruction').remove();
	document.getElementById('game').style.display  = 'block';
}

//generate time
function genTime(){
	var time = document.getElementById("getTime");
	time.classList.remove("btn");
	time.classList.remove("btn-primary");
	time.classList.remove("rounded");
	time.setAttribute('onclick','');
	time.classList.add("text-primary");

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

function showResult(){
	document.getElementById("game").style.visibility  = 'hidden';

	title_h1 = document.createElement("H1");
	title_h1.classList.add("display-1");
	title_h1.innerHTML = "Result";

	actualTime_p = document.createElement("P");
	actualTime_p.classList.add("display-4");
	actualTime_p.classList.add("pt-4");
	actualTime_p.classList.add("bg-light");
	actualTime_p.classList.add("border");
	actualTime_p.classList.add("circle-sm");
	actualTime_p.id = "Goal";
	actualTime_p.innerHTML = actualTime;

	colActualTime_div = document.createElement("DIV");
	colActualTime_div.classList.add("col");
	colActualTime_div.classList.add("d-flex");
	colActualTime_div.classList.add("justify-content-center");
	colActualTime_div.classList.add("rounded-circle");
	colActualTime_div.appendChild(actualTime_p);

	yourTime_p = document.createElement("P");
	yourTime_p.classList.add("display-4");
	yourTime_p.classList.add("pt-4");
	yourTime_p.classList.add("bg-light");
	yourTime_p.classList.add("border");
	yourTime_p.classList.add("circle-sm");
	yourTime_p.id = "Effort";
	yourTime_p.innerHTML = yourTime;

	colYourTime_div = document.createElement("DIV");
	colYourTime_div.classList.add("col");
	colYourTime_div.classList.add("d-flex");
	colYourTime_div.classList.add("justify-content-center");
	colYourTime_div.classList.add("rounded-circle");
	colYourTime_div.appendChild(yourTime_p);

	rowValue_div = document.createElement("DIV");
	rowValue_div.classList.add("row");
	rowValue_div.classList.add("p-2");
	rowValue_div.appendChild(colActualTime_div);
	rowValue_div.appendChild(colYourTime_div);

	actualTimeLabel_p = document.createElement("P");
	actualTimeLabel_p.classList.add("font-20");
	actualTimeLabel_p.classList.add("p-2");
	actualTimeLabel_p.id = "actualTimeLabel";
	actualTimeLabel_p.innerHTML = "actualTime";

	colActualTimeLabel_div = document.createElement("DIV");
	colActualTimeLabel_div.classList.add("col");
	colActualTimeLabel_div.appendChild(actualTimeLabel_p);

	yourTimeLabel_p = document.createElement("P");
	yourTimeLabel_p.classList.add("font-20");
	yourTimeLabel_p.classList.add("p-2");
	yourTimeLabel_p.id = "yourTimeLabel";
	yourTimeLabel_p.innerHTML = "yourTime";

	colYourTimeLabel_div = document.createElement("DIV");
	colYourTimeLabel_div.classList.add("col");	
	colYourTimeLabel_div.appendChild(yourTimeLabel_p);

	rowLabel_div = document.createElement("DIV");
	rowLabel_div.classList.add("row");
	rowLabel_div.classList.add("p-2");
	rowLabel_div.appendChild(colActualTimeLabel_div);
	rowLabel_div.appendChild(colYourTimeLabel_div);

	container_div = document.createElement("DIV");
	container_div.classList.add("container");
	container_div.appendChild(rowLabel_div);
	container_div.appendChild(rowValue_div);

	replay_btn = document.createElement("BUTTON");
	replay_btn.innerHTML = "Next Round";
	replay_btn.classList.add("btn");
	replay_btn.classList.add("btn-primary");
	replay_btn.classList.add("mt-3");
	replay_btn.classList.add("p-2");
	replay_btn.classList.add("mb-4");
	replay_btn.classList.add("font-30");
	replay_btn.setAttribute('onclick','closeResult()');

	center_ele = document.createElement("CENTER");
	center_ele.appendChild(replay_btn);

	displayResult = document.createElement("DIV");
	displayResult.id = "displayResult";
	displayResult.classList.add("border");
	displayResult.classList.add("border-secondary");
	displayResult.classList.add("rounded");
	displayResult.appendChild(title_h1);
	displayResult.appendChild(container_div);
	displayResult.appendChild(center_ele);

	result = document.getElementById("result");
	result.appendChild(displayResult);
}

//close result box
function closeResult(){
	document.getElementById("displayResult").remove();
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
	playTime++;
	roundScore = (10 - Math.abs(actualTime - yourTime)) * 10;
	totalScore += roundScore;
	score = totalScore / playTime;
	document.getElementById('score').innerHTML = "SCORE : " + score.toFixed(2);
}

//redirect to save.html
function saveScore(){
  	sessionStorage.setItem("totalScore", score);
	window.location = "save.html";
}