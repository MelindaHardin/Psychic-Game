var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersRight=[];

var lettersGuessed;
var lettersWrong=[];



var randomLetters= ["b", "c", "h", "l", "m", "s", "w", "o"];

for (i=0; i<randomLetters.length; i++){
    console.log(randomLetters[i]);
}

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    
    
    if(randomLetters.indexOf(userGuess) !==-1){
        console.log(userGuess);
        wins++;
        lettersRight.push(userGuess);
    }
    
    else{
        guessesLeft--;
        lettersWrong.push(userGuess);
        
    }

    if(guessesLeft === 0){
        losses++;
        var nextGame = confirm("Want to play agian?");
        if (nextGame === true){
            

        }
        else{
            alert ("See you next time!");
            
        }
    }

    

    var html =

    "<p>Letters Guessed:" + lettersWrong + "</p>" + 
    "<p>Guesses Left:" + guessesLeft + "</p>" +
    "<p>Letters Right:" + lettersRight + "</p>" +
    "<p>Wins:" + wins + "</p>"  +
    "<p>Losses:" + losses + "</p>";

    document.getElementById("game").innerHTML=html;


}
