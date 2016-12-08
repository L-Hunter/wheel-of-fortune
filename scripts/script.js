// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

$(document).ready( function() {


// //generate letter divs lines 6 - 51
// function createAlphabetSection(){
// 	$('.wrapper').append("<div class='letter-bank'>Choose a letter to make your guess.</div>")
// }

// createAlphabetSection();

// function createAlphabetRows(){
// 	for (var i = 0; i < 1; i++) {
// 		$('.letter-bank').append("<div class='row alphabet'></div>")
// 	};
// }
// createAlphabetRows();

// function createAlphabetLetters(){
// 	for (var i = 0; i < alphabet.length; i++){
// 		var letterDiv = "<div id='";
// 		letterDiv += alphabet[i];
// 		letterDiv += "' class='col-sm-2'>";
// 		letterDiv += alphabet[i].toUpperCase();
// 		letterDiv += "</div>";
// 		$('.alphabet').first().append(letterDiv);
// 		// $('.alphabet').append('<div id="a" class="col-sm-2">A</div>')
// 	};
// }

// createAlphabetLetters();
//answer object - to create answer, hints, generate hidden answer for display

//if have time - try to fix these event listeners
// function attachListenersToLetters() {
// 	for (var i = 0; i < alphabet.length; i++){
// 		var identity = "'#";
// 		identity += alphabet[i];
// 		identity += "'";
// 		console.log(identity);
// 		$('#a').click( function() {
// 			console.log("hi");
// 		// self.guessLetter("A");
// 		// self.updateSelectedLetters('#a');
// 			// $('#a').css('background-color', '#E0E0E0')
// 		});
// 	}
// };

// attachListenersToLetters();

function Answer(answer, hint){
	this.answer = answer.toUpperCase();
	this.answerArray = answer.split("");
	this.hint = hint;
	this.hiddenAnswer = [];
	//generate hidden answer unique to answer
	for(var i = 0; i < this.answerArray.length; i++) {
		//add if statement for space, true push space into array
		this.hiddenAnswer.push("_ ");
	}
	//returns updating string version of hidden answer while playing
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

	//returns answer objact that is current answer/hint combo
	this.getCurrentAnswer = function getCurrentAnswer() {
		return this.answers[currentIndex];
	}

	this.guessLetter = function guessLetter(letter) {
		//currentAnswer is a copy of the RESULT of getcurrentanswer
		// var currentAnswer = self.getCurrentAnswer();
		var hasLetter = false;
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

		//if statement to check if entire word is revealed
		// this.answers[currentIndex] = currentAnswer;
		display.html(self.getCurrentAnswer().showCompleted());
	} //close guessLetter


	//function to change letter appearance on click
	// this.updateSelectedLetters = function updateSelectedLetters(id) {
	// 	$(id).css("color", "#E0E0E0");
	// 	console.log(id);
	// }

	this.addEventListeners = function addEventListeners(){
		//select a letter to guess
		// $('#a').click( function() {self.guessLetter("A");});
		// with function to change letter
		$('.letter').click(function(e) {
			//seeking for the element's '#a' etc
			var $this = $(this);
			//pulls out the div's conetent such as A etc
			self.guessLetter($this.html());
			//adds class selected  which contains the grey font color
			$this.addClass('selected');
		});
		// $('#a').click( function() {
		// 	self.guessLetter("A");
		// 	self.updateSelectedLetters('#a');
		// });
		//with function to hide letter
		// $('#a').click( function() {
		// 	self.guessLetter("A");
		// 	$('#a').hide();
		// // });
		// $('#b').click( function() {self.guessLetter("B");});
		// $('#c').click( function() {self.guessLetter("C");});
		// $('#d').click( function() {self.guessLetter("D");});
		// $('#e').click( function() {self.guessLetter("E");});
		// $('#f').click( function() {self.guessLetter("F");});
		// $('#g').click( function() {self.guessLetter("G");});
		// $('#h').click( function() {self.guessLetter("H");});
		// $('#i').click( function() {self.guessLetter("I");});
		// $('#j').click( function() {self.guessLetter("J");});
		// $('#k').click( function() {self.guessLetter("K");});
		// $('#l').click( function() {self.guessLetter("L");});
		// $('#m').click( function() {self.guessLetter("M");});
		// $('#n').click( function() {self.guessLetter("N");});
		// $('#o').click( function() {self.guessLetter("O");});
		// $('#p').click( function() {self.guessLetter("P");});
		// $('#q').click( function() {self.guessLetter("Q");});
		// $('#r').click( function() {self.guessLetter("R");});
		// $('#s').click( function() {self.guessLetter("S");});
		// $('#t').click( function() {self.guessLetter("T");});
		// $('#u').click( function() {self.guessLetter("U");});
		// $('#v').click( function() {self.guessLetter("V");});
		// $('#w').click( function() {self.guessLetter("W");});
		// $('#x').click( function() {self.guessLetter("X");});
		// $('#y').click( function() {self.guessLetter("Y");});
		// $('#z').click( function() {self.guessLetter("Z");});

		//solve puzzle button - function that will look for match with answer and users input
		$('#submit').click(function() {
			self.solvePuzzle();
		});
		//add new answers/hints
		$('#addAnswer').click(function() {
			self.addAnswer(addWord.val(), addHint.val());
			self.resetNewRounds();
		});

		//click wheel to start a new game
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

		//display hidden word at start of game
	this.displayMystery = function displayMystery(){
		display.html(self.getCurrentAnswer().hiddenAnswer);
		displayHint.html(self.getCurrentAnswer().hint);
		$('.letter').each(function(index) {
			$(this).removeClass('selected');
		});
	}

	//solve the puzzle - expand with else statement
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
	
	//function buyVowel, compare guess to word, deduct points $250

} //close newGame

// Game instantiation
game = new Game();
game.addAnswer("PONG", "Early Arcade Game");
game.addAnswer("JAVASCRIPT", "Dynamic Programming Language");
game.addAnswer("LOVELACE", "Early Computer Programmer");


//BONUS: function spinWheel - generate random point values, bankrupt

}); //close ready function

