$(document).ready( function() {

function Answer(answer, hint){
	this.answer = answer.toUpperCase();
	this.answerArray = answer.split("");
	this.hint = hint;
	this.hiddenAnswer = [];
	//generate hidden answer unique to answer
	for(var i = 0; i < this.answerArray.length; i++) {
		//to do: add if statement for spaces, if true push space into array
		this.hiddenAnswer.push("_ ");
	}
	//returns updating string version of hidden answer while playing
	this.showCompleted = function showCompleted() {
		return this.hiddenAnswer.join('');
	}
} //close Answer

function Game(){
	var self = this;

	var currentIndex = null;
	this.answers = [];

	var addHint = $('#addHint');
	var addWord = $('#addWord');
	var guess = $('#guess');
	var display = $('#display');
	var displayHint = $('#hint');

	//this calls the answer object up above
	this.addAnswer = function addAnswer(answer, hint){
		if (!currentIndex) {
			currentIndex = 0;
		}; 
		this.answers.push(new Answer(answer, hint));
		console.log(this.answers);
	}// close addAnswer

	//returns answer object that is current answer/hint combo
	this.getCurrentAnswer = function getCurrentAnswer() {
		return this.answers[currentIndex];
	}

	this.guessLetter = function guessLetter(letter) {
		// hasletter address wrong letter notice appearing multiple times
		var hasLetter = false;
		//check for letter
		for (var i = 0; i < this.answers[currentIndex].answerArray.length; i++) {
			if (letter.toUpperCase() === this.answers[currentIndex].answerArray[i].toUpperCase()) {
				//if keeping score, add here
				this.answers[currentIndex].hiddenAnswer[i] = letter;
				hasLetter = true;
			}
		}

		if (hasLetter === false) {
			console.log("There is no " + letter + ". Guess Again!");
		}

		//to do: if statement to check if entire word is revealed
		display.html(self.getCurrentAnswer().showCompleted());
	} //close guessLetter

	this.addEventListeners = function addEventListeners(){
		//select a letter to guess, add class to change letter's appearance
		$('.letter').click(function(e) {
			//looking for the element's '#a' etc
			var $this = $(this);
			//pulls out the div's conetent such as A etc
			self.guessLetter($this.html());
			//adds class selected which contains the grey font color
			$this.addClass('selected');
		});

		//solve puzzle button - function that will look for match with answer and users input
		$('#submit').click(function() {
			self.solvePuzzle();
		});
		
		//add new answers/hints
		$('#addAnswer').click(function() {
			self.addAnswer(addWord.val(), addHint.val());
			self.resetNewRounds();
		});

		//click wheel to start a new game, clears solution box, resets letter colors
		$('#wheel').click(function() {
			self.displayMystery();
			self.resetControls();
		});
	} //close addEventListeners

	//reset solution answer box to empty
	this.resetControls = function resetControls() {
		guess.val('');
	}

	//reset adding new answer/hints to empty boxes
	this.resetNewRounds = function resetNewRounds() {
		addWord.val('');
		addHint.val('');
	}

	//display hidden word/hint at start of game
	this.displayMystery = function displayMystery(){
		display.html(self.getCurrentAnswer().hiddenAnswer);
		displayHint.html(self.getCurrentAnswer().hint);
		$('.letter').each(function(index) {
			$(this).removeClass('selected');
		});
	}

	//solve the puzzle
	this.solvePuzzle = function solvePuzzle() {
		if (guess.val().toUpperCase() === self.getCurrentAnswer().answer) {
			display.html(self.getCurrentAnswer().answerArray);
			alert("Congratualtations, you win! Click the wheel to play again!");
			currentIndex++;
		} else {
			alert("Incorrect!");
		}
	}

	this.addEventListeners();
	
	//to do: function buyVowel, compare guess to word, deduct points $250

} //close newGame

// Game instantiation
game = new Game();
game.addAnswer("PONG", "Early Arcade Game");
game.addAnswer("JAVASCRIPT", "Dynamic Programming Language");
game.addAnswer("LOVELACE", "Early Computer Programmer");


//BONUS: function spinWheel - generate random point values, bankrupt

}); //close ready function

