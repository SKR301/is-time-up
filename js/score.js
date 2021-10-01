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

            colUser.innerHTML = userName;
            colScore.innerHTML = userScore + " pts.";
            row--;
        });
	});
}

function saveScore(){
    score = sessionStorage.getItem("totalScore");
    name = document.getElementById("username").value;
    age = document.getElementById("userAge").value;

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

}