        alert("I did try my best, but to be honest, i didn't write all the code myself, had to look up a bunch of stuff on the web, and look through gitLab folders.")
        alert("For some reason my entire page didn't work until i added <span> to all my p")
        var wins = 0;
        var losses = 0;
        var guessesLeft = 9;
        var lettersGuessed = [];
        var letters = ["q", "g", "a", "u", "h", "n", "z", "o", "l", "p", "s", "x",]
        var randomLetter = null;


        var newGuessesLeft = function() {
            document.querySelector("#guessesLeft").innerHTML = guessesLeft;
        };


        var newRandomLetter = function () {
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
        };

        var newLettersGuessed = function () {
            document.querySelector("#lettersGuessed").innerHTML = lettersGuessed.join(", ");
        };

        var reset = function () {
            guessesLeft = 9;
            lettersGuessed = [];
            newRandomLetter();
            newGuessesLeft();
            newLettersGuessed();
            console.log(randomLetter);
        };

        newRandomLetter();
        newGuessesLeft ();
        console.log(randomLetter);

        
        document.onkeyup = function (event) {
            guessesLeft--;
            var letter = String.fromCharCode(event.which).toLowerCase();
            lettersGuessed.push(letter);
            console.log(event);

        newGuessesLeft();
        newLettersGuessed();


        if (letter === randomLetter) {
            wins++;
            document.querySelector("#wins").innerHTML = wins;
            reset();
        }

        if (guessesLeft === 0) {
            losses++;
            document.querySelector("#losses").innerHTML = losses;
            reset();
        }
           
        }