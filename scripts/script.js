$(document).ready( function() {
	

//answer object - to create answers with hints
function Answer(answer, hint){
	this.answer = answer.toUpperCase();
	this.answerArray = answer.split("");
	this.hint = hint
}

//instances of answers
// var round1 = new NewAnswer("PONG", "Early Arcade Game")
// var round2 = new NewAnswer("JAVASCRIPT", "Dynamic Programming Language")
// var round3 = new NewAnswer("LOVELACE", "Early Computer Programmer");

// console.log("Round 1 " + round1.answer + round1.hint);
// console.log("Round 2 " + round2.answer + round2.hint);
// console.log("Round 3 " + round3.answer + round3.hint);




//function to generate round: words with hint
// function round(word, hint){
// 	this.wordArray = word
// 	// for (var i = 0; i < word.length; i++) {
// 	//   wordArray = wordArray + (word[i]);
// 	this.hint = hint;
// }
function Game(){
	//update board and answers
	//maybe have answers in an array and then iterate through it???
	var self = this;

	var currentIndex = null;
	this.answers = [];
	var addHint = $('#addHint');
	var addWord = $('#addWord');
	var guess = $('#guess');

	this.addAnswer = function addAnswer(answer, hint){
		if (!currentIndex) {
			currentIndex = 0;
		}; 
		this.answers.push(new Answer(answer, hint));
		console.log(this.answers);
	}// close addAnswer

	this.addEventListeners = function addEventListeners(){
		//event listeners - these will ultimtely run function to check for letter and add/deduct points
	//letters
		$('#a').click( function() {guessLetter("A");});
		$('#b').click( function() {guessLetter("B");});
		$('#c').click( function() {guessLetter("C");});
		$('#d').click( function() {guessLetter("D");});
		$('#e').click( function() {guessLetter("E");});
		$('#f').click( function() {guessLetter("F");});
		$('#g').click( function() {guessLetter("G");});
		$('#h').click( function() {guessLetter("H");});
		$('#i').click( function() {guessLetter("I");});
		$('#j').click( function() {guessLetter("J");});
		$('#k').click( function() {guessLetter("K");});
		$('#l').click( function() {guessLetter("L");});
		$('#m').click( function() {guessLetter("M");});
		$('#n').click( function() {guessLetter("N");});
		$('#o').click( function() {guessLetter("O");});
		$('#p').click( function() {guessLetter("P");});
		$('#q').click( function() {guessLetter("Q");});
		$('#r').click( function() {guessLetter("R");});
		$('#s').click( function() {guessLetter("S");});
		$('#t').click( function() {guessLetter("T");});
		$('#u').click( function() {guessLetter("U");});
		$('#v').click( function() {guessLetter("V");});
		$('#w').click( function() {guessLetter("W");});
		$('#x').click( function() {guessLetter("X");});
		$('#y').click( function() {guessLetter("Y");});
		$('#z').click( function() {guessLetter("Z");});

	//solve puzzle button - function that will look for match with answer and users input
		$('#submit').click( function(e) {
			e.preventDefault();
			solvePuzzle();
		});
		$('#addAnswer').click( function(){
			self.addAnswer(addWord.val(), addHint.val());
		});

	//start a new game
		$('#wheel').click( function() {newGame(round1.answer, round1.hint);});

	}; //close addEventListeners

	//returns answer objact that is current answer/hint combo
	this.getCurrentAnswer = function getCurrentAnswer(){
		return this.answers[currentIndex];
	}

	this.solvePuzzle = function solvePuzzle() {
		if (solutionGuess.val().toUpperCase() === self.getCurrentAnswer().answer) {
			alert("You Win!");
		}
		console.log(solutionGuess);
	}
	// document.getElementById('answer').innerText = "_ _ _ _";
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

} //close newGame


//this function will be called with event handler, letter will correspond to letterboard element
function guessLetter(letter){
	console.log("You guessed letter: " + letter);
	//alter appearance of letter on letterboard
	//iterate though answer array to find match
	//if matches display letter on board

}
//function guessLetter, eventhandler will be attached to each letter in the letter bank, 
//compare guess to word by iterating through word's array, award points based on # correct 
// and display correct letters
// guessLetter function(letter, ){
// 	var testArray = 
// }

// Game instantiation
game = new Game();

//function buyVowel, compare guess to word, deduct points $250

var solutionGuess = ""
console.log(solutionGuess);



//function solvePuzzle attached to input field that will compare input with array, 
//all caps converts string to array



//BONUS: function spinWheel - generate random point values, bankrupt

}); //close ready function