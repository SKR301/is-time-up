window.onload = function(){
    if(window.location.href.includes("index")){
        displayHighScore();
    }

    if(sessionStorage.length != 0 && window.location.href.includes("index")){
        if(sessionStorage.getItem("isSaved")){
            document.getElementById('savedSuccessfulMsg').style.display = "block";
            document.getElementById('savedFailurefulMsg').style.display = "none";
        }else{
            document.getElementById('savedSuccessfulMsg').style.display = "none";
            document.getElementById('savedFailurefulMsg').style.display = "block";
        }
        sessionStorage.clear();
    }
}

function displayHighScore(){
	var row = 3;
	ref.orderByChild('score').limitToLast(3).once('value', (snapshot) => {
		snapshot.forEach(function (childSnapshot) {
            var userName = childSnapshot.val().name;
            var userScore = childSnapshot.val().score;

            var colUser = document.getElementById("highScore"+row+"User");
            var colScore = document.getElementById("highScore"+row+"Score");

            colUser.innerHTML = (userName.length <= 10)?userName: userName.substring(0,10) + "...";
            colScore.innerHTML = userScore;
            row--;
        });
	});
}

function saveScore(){
    score = parseFloat(sessionStorage.getItem("totalScore")).toFixed(2);
    name = document.getElementById("username").value;
    age = document.getElementById("userAge").value;

    if(validateData(score, name, age)){
        ref.push({
        "score": score,
        "age": age,
        "name": name
        }).then( res => {
            sessionStorage.setItem("isSaved", 1);
            window.location = "index.html";
        }).catch( error => {
            sessionStorage.setItem("isSaved", 0);
            window.location = "index.html";
        });
    } else {
        document.getElementById("username").value = "";
        document.getElementById("userAge").value = "";
        document.getElementById("invalidDataAlert").style.display = "block";
    }
}

function validateData(score, name, age){
    if(!(/^[0-9a-zA-Z_._ @]+$/.test(name))){
        document.getElementById("invalidDataAlert").innerHTML = "username is not valid";
        return false;
    }
    if(!(/^[0-9]+$/.test(age))){
        document.getElementById("invalidDataAlert").innerHTML = "age is not valid";
        return false;
    }
    if(isNaN(score)){
        document.getElementById("invalidDataAlert").innerHTML = "Some unfortunate error";
        return false;
    }

    return true;
}