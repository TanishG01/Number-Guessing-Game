let maximum, targetNum, attempts;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("startBtn").addEventListener("click", startGame);
    document.getElementById("guessBtn").addEventListener("click", checkGuess);

    document.getElementById("guessInput").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkGuess();
        }
    });
});

function startGame() {
    maximum = parseInt(document.getElementById("maxNum").value);
    if (!maximum || maximum <= 0) {
        alert("Please enter a valid maximum number!");
        return;
    }
    targetNum = Math.floor(Math.random() * maximum) + 1;
    attempts = 0;
    document.getElementById("maxDisplay").innerText = maximum;
    document.getElementById("setup").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("guessInput").focus(); 
}

function checkGuess() {
    let guess = parseInt(document.getElementById("guessInput").value);
    attempts++;
    if (guess === targetNum) {
        document.getElementById("feedback").innerText = `🎉 Correct! It took you ${attempts} attempts!`;
        alert(`🎉 Correct! The number was ${targetNum}. It took you ${attempts} attempts!`);
    } else if (guess > targetNum) {
        document.getElementById("feedback").innerText = "Too high! Try again.";
    } else if (guess < targetNum) {
        document.getElementById("feedback").innerText = "Too low! Try again.";
    } else {
        document.getElementById("feedback").innerText = "Please enter a valid number!";
    }
    
    document.getElementById("guessInput").value = "";
}
