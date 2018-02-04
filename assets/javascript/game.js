var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersRight=[];

var lettersGuessed;
var lettersWrong=[];

var alphabet = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var randomLetters = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    
    
    if(randomLetters.indexOf(userGuess) !==-1){
        console.log(userGuess);
        wins++;
        lettersRight.push(userGuess);
        alert ("Good guess!");  
    }
    
    else{
        guessesLeft--;
        lettersWrong.push(userGuess);
    }

    if(guessesLeft === 0){
        losses++;
        var nextGame = confirm("Want to play agian?");
        if (nextGame === true){
            guessesLeft = 10;
            lettersRight=[];
            lettersWrong=[];
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
