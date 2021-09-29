window.onload = function(){
    if(window.location.href.includes("index")){
        displayHighScore();
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
    });

}