var wins = 0;
var losses = 0;
var guessesLeft = 10;

var randomLetters= ["b", "c", "h", "l", "m", "s", "w", "o"];

console.log (randomLetters);

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    
    for (i=0; i<randomLetters.length; i++){
        te
    }
    
    if(userGuess === randomLetters){
        wins++;
    }
    
    else{
        guessesLeft--;
    }

    if(guessesLeft === 0){
        losses++
        alert("game over");
    }

    var html =

    "<p>Guesses Left:" + guessesLeft + "</p>" +
    "<p>Wins:" + wins + "</p>" +
    "<p>Losses:" + losses + "</p>";

    document.getElementById("game").innerHTML=html;


    /*document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;*/
}
