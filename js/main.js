//redirects to game page
function startGame(){
	window.location = "play.html";  
}

function hoverOnFill(ele){
	if(ele.classList.contains("border-secondary")){
		ele.classList.add("bg-secondary");
		ele.classList.add("text-light");
	}
	if(ele.classList.contains("border-primary")){
		ele.classList.add("bg-primary");
		ele.classList.add("text-light");
	}
	if(ele.classList.contains("border-dark")){
		ele.classList.add("bg-dark");
		ele.classList.add("text-light");
	}
	if(ele.classList.contains("border-success")){
		ele.classList.add("bg-success");
		ele.classList.add("text-light");
	}
	if(ele.classList.contains("border-warning")){
		ele.classList.add("bg-warning");
		ele.classList.add("text-dark");
	}
	if(ele.classList.contains("border-info")){
		ele.classList.add("bg-info");
		ele.classList.add("text-dark");
	}
	if(ele.classList.contains("border-danger")){
		ele.classList.add("bg-danger");
		ele.classList.add("text-light");
	}
}

function hoverOffFill(ele){
	if(ele.classList.contains("border-secondary")){
		ele.classList.remove("bg-secondary");
		ele.classList.remove("text-light");
	}
	if(ele.classList.contains("border-primary")){
		ele.classList.remove("bg-primary");
		ele.classList.remove("text-light");
	}
	if(ele.classList.contains("border-dark")){
		ele.classList.remove("bg-dark");
		ele.classList.remove("text-light");
	}
	if(ele.classList.contains("border-success")){
		ele.classList.remove("bg-success");
		ele.classList.remove("text-light");
	}
	if(ele.classList.contains("border-warning")){
		ele.classList.remove("bg-warning");
		ele.classList.remove("text-dark");
	}
	if(ele.classList.contains("border-info")){
		ele.classList.remove("bg-info");
		ele.classList.remove("text-dark");
	}
	if(ele.classList.contains("border-danger")){
		ele.classList.remove("bg-danger");
		ele.classList.remove("text-light");
	}
}