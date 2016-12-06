$(document).ready( function() {
	

//object to create answers with hints
function NewAnswer(answer, hint){
	this.answer = answer.split("");
	this.hint = hint
}

//instances of answers
var round1 = new NewAnswer("PONG", "Early Arcade Game")
var round2 = new NewAnswer("JAVASCRIPT", "Dynamic Programming Language")
var round3 = new NewAnswer("LOVELACE", "Early Computer Programmer");

console.log("Round 1 " + round1.answer + round1.hint);
console.log("Round 2 " + round2.answer + round2.hint);
console.log("Round 3 " + round3.answer + round3.hint);

//event listeners - these will ultimtely run function to check for letter and add/deduct points
//letters
	$('#a').click( function() { alert("You guessed letter A");});
	$('#b').click( function() { alert("You guessed letter b");});
	$('#c').click( function() { alert("You guessed letter c");});
	$('#d').click( function() { alert("You guessed letterd");});
	$('#e').click( function() { alert("You guessed lettere");});
	$('#f').click( function() { alert("You guessed letterf");});
	$('#g').click( function() { alert("You guessed letterg");});
	$('#h').click( function() { alert("You guessed letterh");});
	$('#i').click( function() { alert("You guessed letteri");});
	$('#j').click( function() { alert("You guessed letterj");});
	$('#k').click( function() { alert("You guessed letterk");});
	$('#l').click( function() { alert("You guessed letterl");});
	$('#m').click( function() { alert("You guessed letterm");});
	$('#n').click( function() { alert("You guessed lettern");});
	$('#o').click( function() { alert("You guessed lettero");});
	$('#p').click( function() { alert("You guessed letterp");});
	$('#q').click( function() { alert("You guessed letterq");});
	$('#r').click( function() { alert("You guessed letterr");});
	$('#s').click( function() { alert("You guessed letters");});
	$('#t').click( function() { alert("You guessed lettert");});
	$('#u').click( function() { alert("You guessed letteru");});
	$('#v').click( function() { alert("You guessed letterv");});
	$('#w').click( function() { alert("You guessed letterw");});
	$('#x').click( function() { alert("You guessed letterx");});
	$('#y').click( function() { alert("You guessed lettery");});
	$('#z').click( function() { alert("You guessed letterz");});

//solve puzzle button - function that will look for match with answer and users input
	$('#submit').click( function() {alert("You're guess is...");});

//start a new game
	$('#wheel').click( function() {newGame(round1.answer, round1.hint);})
//function to generate round: words with hint
// function round(word, hint){
// 	this.wordArray = word
// 	// for (var i = 0; i < word.length; i++) {
// 	//   wordArray = wordArray + (word[i]);
// 	this.hint = hint;
// }
function newGame(answer, hint){
	//update board and answers
	//maybe have answers in an array and then iterate through it???
	this.currentAnswer = answer;
	this.currentHint = hint;
	document.getElementById('answer').innerText = "_ _ _ _";
	document.getElementById('hint').innerText = "Hint: " + currentHint;
	console.log(currentAnswer);
	console.log(currentHint);


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

} //close newGame




//function guessLetter, eventhandler will be attached to each letter in the letter bank, 
//compare guess to word by iterating through word's array, award points based on # correct 
// and display correct letters
// guessLetter function(letter, ){
// 	var testArray = 
// }

//function buyVowel, compare guess to word, deduct points $250

//function solvePuzzle attached to input field that will compare input with array, 
//all caps converts string to array



//BONUS: function spinWheel - generate random point values, bankrupt

}); //close ready function