//redirects to game page
function startGame(){
	window.location = "play.html";  
}

//close instruction
function closeInstruction(){
	document.getElementById('instruction').remove();
	document.getElementById('game').style.visibility  = 'visible';
}