//I did true and false questions.
//start button needs to start game and timer (1sec delay? not sure).
//The player will have a limited amount of time to finish the quiz.
//Game ends when the time runs out or player clicks finish-button.
//Page will reveal the number of questions that players answer correctly and incorrectly.
//Player can only pick one answer per question.
//Timer needs to count down.
//If I have time try to do restart-button as well.
$(document).ready(function(){

var correct = 0;
var incorrect = 0;
var incomplete = 0;
var seconds = 77;
var intervalId;

$("#finish-button").click(finish);

function start(){
	intervalId = setInterval(timedecrease, 1000);
}

function timedecrease(){
	seconds--;
	$("#timer").html("<h1>Time Left: " + seconds + "</h1>" );
		if (seconds === 0){

        	finish();
	}
}


function finish() {
	clearInterval(intervalId);
	var answers = $("input[type='checkbox']").filter(":checked");
	for (i = 0; i < answers.length; i++){
		
		if ($(answers[i]).hasClass("correct")){
	 		correct++;
	 	}

	 	if ($(answers[i]).hasClass("incorrect")){
	 		incorrect++;
		}


	$("#questions").html("Correct: " + correct + "<br>");
	$("#questions").append("Incorrect: " + incorrect + "<br>");
	$("#questions").append("Incomplete: " + (7 - correct - incorrect) + "<br>");
	$("#questions").append("<img src=assets/images/saggyboobs.png>");
	}
}

start();

});




