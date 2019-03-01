
var LetterChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var computerGuess = LetterChoices[Math.floor(Math.random() * LetterChoices.length)];


var success = 0;
var fail = 0;
var attemptsleft = 10;
var userGuess = [];


document.onkeyup = function(event) {

    var userGuess = event.key;
    var userUpper = userGuess.toUpperCase();
    var computerGuess = LetterChoices[Math.floor(Math.random() * LetterChoices.length)];


if(LetterChoices.indexOf(userUpper)!== -1){


    if(userUpper === computerGuess) {
        success ++;
        attemptsleft = 10;
        userGuess = [];
    } else {
       (userUpper != computerGuess);
    attemptsleft --;
    }

    if(attemptsleft === 0) {
    fail ++;
    attemptsleft = 10;
    userGuess = [];
}
    userGuess.push(event.key)   
} 

var html =
"<p>win: " + success + "</p>" +
"<p>lose: " + fail + "</p>" +
"<p>attempts left: " + attemptsleft + "</p>" +
"<p>user guess: " + userGuess + "</p>"
;

document.querySelector("#game").innerHTML = html;

}