$(document).ready( function() {
	

//answer object - to create answer, hints, generate hidden answer for display
function Answer(answer, hint){
	this.answer = answer.toUpperCase();
	this.answerArray = answer.split("");
	this.hint = hint;
	this.hiddenAnswer = [];
	//generate hidden answer unique to answer
	for(var i = 0; i < this.answerArray.length; i++) {
		this.hiddenAnswer.push("_ ");
	}
	this.showCompleted = function showCompleted() {
		return this.hiddenAnswer.join('');
	}
} //close Answer


function Game(){
	//update board and answers
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


	this.guessLetter = function guessLetter(letter) {
		var currentAnswer = self.getCurrentAnswer();
		for (var i = 0; i < currentAnswer.answerArray.length; i++) {
			if (letter.toUpperCase() === currentAnswer.answerArray[i].toUpperCase()) {
				//if keeping score, add here
				currentAnswer.hiddenAnswer[i] = letter;
			}	
		}
		//if statement to check if entire word is revealed
		this.answers[currentIndex] = currentAnswer;
		display.html(self.getCurrentAnswer().showCompleted());
	} //close guessLetter


	this.addEventListeners = function addEventListeners(){
		//select a letter to guess
		$('#a').click( function() {self.guessLetter("A");});
		$('#b').click( function() {self.guessLetter("B");});
		$('#c').click( function() {self.guessLetter("C");});
		$('#d').click( function() {self.guessLetter("D");});
		$('#e').click( function() {self.guessLetter("E");});
		$('#f').click( function() {self.guessLetter("F");});
		$('#g').click( function() {self.guessLetter("G");});
		$('#h').click( function() {self.guessLetter("H");});
		$('#i').click( function() {self.guessLetter("I");});
		$('#j').click( function() {self.guessLetter("J");});
		$('#k').click( function() {self.guessLetter("K");});
		$('#l').click( function() {self.guessLetter("L");});
		$('#m').click( function() {self.guessLetter("M");});
		$('#n').click( function() {self.guessLetter("N");});
		$('#o').click( function() {self.guessLetter("O");});
		$('#p').click( function() {self.guessLetter("P");});
		$('#q').click( function() {self.guessLetter("Q");});
		$('#r').click( function() {self.guessLetter("R");});
		$('#s').click( function() {self.guessLetter("S");});
		$('#t').click( function() {self.guessLetter("T");});
		$('#u').click( function() {self.guessLetter("U");});
		$('#v').click( function() {self.guessLetter("V");});
		$('#w').click( function() {self.guessLetter("W");});
		$('#x').click( function() {self.guessLetter("X");});
		$('#y').click( function() {self.guessLetter("Y");});
		$('#z').click( function() {self.guessLetter("Z");});

		//solve puzzle button - function that will look for match with answer and users input
		$('#submit').click(function() {
			self.solvePuzzle();
		});
		//add new answers/hints
		$('#addAnswer').click(function() {
			self.addAnswer(addWord.val(), addHint.val());
		});

		//click wheel to start a new game
		$('#wheel').click(function() {
			self.displayMystery();
		});
	} //close addEventListeners

	//returns answer objact that is current answer/hint combo
	this.getCurrentAnswer = function getCurrentAnswer() {
		return this.answers[currentIndex];
	}

		//display hidden word at start of game
	this.displayMystery = function displayMystery(){
		display.html(self.getCurrentAnswer().hiddenAnswer);
		displayHint.html(self.getCurrentAnswer().hint);
	}

	//solve the puzzle - expand with else statement
	this.solvePuzzle = function solvePuzzle() {
		if (guess.val().toUpperCase() === self.getCurrentAnswer().answer) {
			alert("You Win!");
			currentIndex++;
		}
	}
	// document.getElementById('display').innerText = "_ _ _ _";
	// document.getElementById('hint').innerText = "Hint: " + currentHint;
	// console.log(currentAnswer);
	// console.log(currentHint);


	//function update hiddenword
	//hide and display answer, update board's answers and blanks
	// var answerBlanks = new Array(currentAnswer.length);
	// console.log(answerBlanks);
	// //hide each letter in the answer with an _
	// function hideAnswer(){
	// 	for (var i = 0; i < answerBlanks.length; i++){
	// 		answerBlanks[i] = "_ ";
	// 	}
	// 	console.log(answerBlanks);
	// }//end hideAnswer

	this.addEventListeners();
	// this.displayMystery();
	//function guessLetter
	
	//function buyVowel, compare guess to word, deduct points $250

} //close newGame

// Game instantiation
game = new Game();
game.addAnswer("PONG", "Early Arcade Game");
game.addAnswer("JAVASCRIPT", "Dynamic Programming Language");
game.addAnswer("LOVELACE", "Early Computer Programmer");

//BONUS: function spinWheel - generate random point values, bankrupt

}); //close ready function