$(document).ready(function() {

//-----------------------------------------------------------------------------------------------------
function intro() {
	introScreen = "<p class='text-center main-button-container'><a class='btn start-button btn-lg btn-block btn-danger'>Let the horror begin...</a></p>";
	$(".mainArea").html(introScreen);
}

intro();

function resetGame() {
	questionCounter = 0;
	rightAnswers = 0;
	wrongAnswers = 0;
	unanswered = 0;
	counter = 15;
	questionInfo();
	timer();
}

//-----------------------------------------------------------------------------------------------------------
//Start Button triggors the following...
$("body").on("click", ".start-button", function(event){
	audio1.play(); 
	clickSound.play();
	questionInfo();
	console.log(questionInfo);
	timer();
}); 


$("body").on("click", ".answer", function(event){

	//Create placeholder for correct answer data.
	selectedAnswer = $(this).text();
	console.log(selectedAnswer);
	console.log(choices[questionCounter]);
	console.log(answers[questionCounter]);


	if(selectedAnswer === answers[questionCounter]) {
		clearInterval(theClock);
		Win();
		clickSound2.play();
	}

	else {
		clearInterval(theClock);
		Loss();
		clickSound3.play();
	}
}); 


$("body").on("click", ".reset-button", function(event){
	clickSound2.play();
	resetGame();
}); 
}); 


//-----------------------------------------------------------------------------------------------------------
function TimedOut() {
	unanswered++;
	newQuestion = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + answers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(newQuestion);
	//$("#background").html(backgroundArray[questionCounter]);
	setTimeout(wait, 5000);  
}

function Win() {
	rightAnswers++;
	newQuestion = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>YES!!! The answer is: " + answers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(newQuestion);
	//$("#background").html(backgroundArray[questionCounter]);
	setTimeout(wait, 5000); 
}

function Loss() {
	wrongAnswers++;
	newQuestion = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>NOOOOOOOOOOOO!!!!!!!! The correct answer is: "+ answers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='images/array/wrong.gif'>";
	$(".mainArea").html(newQuestion);
	//$("#background").html(backgroundArray[questionCounter]);
	setTimeout(wait, 5000); 
}

function questionInfo() {
	newQuestion = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>15</span></p><p class='text-center'>" + questions[questionCounter] + "</p><p class='first-answer answer'>A. " + choices[questionCounter][0] + "</p><p class='answer'>B. "+choices[questionCounter][1]+"</p><p class='answer'>C. "+choices[questionCounter][2]+"</p><p class='answer'>D. "+choices[questionCounter][3]+"</p>";
	$(".mainArea").html(newQuestion);
}

function wait() {
	if (questionCounter < 9) {
	questionCounter++;
	questionInfo();
	counter = 15;
	timer();
	}
	else {
		finalScreen();
	}
}

function timer() {
	theClock = setInterval(fifteenSeconds, 1000);
	function fifteenSeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			TimedOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {

	newQuestion = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Your results oh brave one..." + "</p>" + "<p class='summary-correct'>Evasions: " + rightAnswers + "</p>" + "<p>Stab Wounds: " + wrongAnswers + "</p>" + "<p>Unanswered: " + unanswered + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-danger btn-lg reset-button' href='#' role='button'>Reset the Horror</a></p>";
		$(".mainArea").html(newQuestion);
}

//---VARIABLES--------------------------------------------------------------------------------------------------------
var clickSound = new Audio("assets/audio/imhere.mp3");
var clickSound2 = new Audio("assets/audio/heartbeat.mp3");
var clickSound3 = new Audio("assets/audio/wickedwitchlaugh.mp3");
var audio1 = new Audio("assets/audio/suspiria.m4a");
audio1.volume = 0.2;
clickSound.volume = 0.1;
clickSound2.volume = 0.5;
clickSound3volume = 0.2;

var introScreen;
var questionInfo;
var counter = 15;

var questions= ["In 1974, Stephen King's first novel was published. What was it?", "King has been known to write books under what pseudonym?", "What was the clown's name from 'It'?", "Stephen King hates the adaptation of this book, and doesn't particularly care if everyone else seems to like it.", "What was Stephen King's job before he was a full-time writer?", "In 1999, Stephen King was hospitalized for nearly a month (and thought at first to be near death) after what happened?", "Which spelling is the one used for the book?", "The villain Randall Flagg has appeared in several of King's novels, but his name first appeared in what book?", "The short story 'The Body' was eventually adapted into what movie?", "King doesn't JUST write horror novels. He's also written a highly-regarded book about the writing process called..."];
var choices = [["Full Dark, No Stars", "The Stand", "The Shining", "Carrie"], ["Richard Bachman", "Edgar Allen Podunk", "Joe Hill", "R.L. Stein"], ["Bozo", "Squishy", "Pogo", "Pennywise"], ["The Shining", "Carrie", "Christine", "Misery"], ["Mechanic", "Teacher", "Journalist", "Chemist"], ["He was accidentally shot by a hunter", "He was struck by a minivan", "His single-engine aircraft crashed", "He had a stroke"], ["Pet Symmatary", "Pet Cemetery", "Pet Sematary", "Pet Semetery"], ["Carrie", "The Stand", "Salem's Lot", "Tommyknockers"], ["Golden Years", "Shawshank Redemption", "Stand By Me", "Secret Window"], ["The Write Stuff", "It's Good To Be King", "On Writing", "The Elements Of Style"]];
var answers = ["D. Carrie", "A. Richard Bachman", "D. Pennywise", "A. The Shining", "B. Teacher", "B. He was struck by a minivan", "C. Pet Sematary", "B. The Stand", "C. Stand By Me", "C. On Writing"];

var imageArray = ["<img class='center-block img-right' src='assets/images/array/carrie.gif'>", "<img class='center-block img-right' src='assets/images/array/bachman.gif'>", "<img class='center-block img-right' src='assets/images/array/pennywise.gif'>", "<img class='center-block img-right' src='assets/images/array/shinings.gif'>", "<img class='center-block img-right' src='assets/images/array/teacher3.gif'>", "<img class='center-block img-right' src='assets/images/array/crash.gif'>", "<img class='center-block img-right' src='assets/images/array/pet.gif'>","<img class='center-block img-right' src='assets/images/array/randall.gif'>", "<img class='center-block img-right' src='assets/images/array/standbyme.gif'>", "<img class='center-block img-right' src='assets/images/array/bachman2.gif'>"];

//var backgroundArray = ["<img src='images3/doll.gif'>", "<img src='images3/moon.gif'>", "<img src='images3/cereal.gif'>", "<img src='images3/cakebaby.gif'>", "<img src='images3/spider.gif'>", "<img src='images3/dog.gif'>", "<img src='images3/demon.gif'>", "<img src='images3/adultbaby.gif'>", "<img src='images3/bw.gif'>", "<img src='images3/rogers.gif'>", "<img src='images3/eye.gif'>"];


var rightAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;

var questionCounter = 0;
var selecterAnswer;
var theClock = 15;




