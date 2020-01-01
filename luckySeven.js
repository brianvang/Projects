function validateItems() {
    var num1 = document.forms["luckySeven"]["num1"].value;
    if (num1 == "" || isNaN(num1)) {
        alert("Starting bet must be entered.");
        document.forms["luckySeven"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["luckySeven"]["num1"].focus();
        return false;
   }
    play();
    return false;
}

function play() {
    var num1 = document.forms["luckySeven"]["num1"].value;
    var bet = num1
    var betsArray = [];
    
    while (bet > 0) {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        var diceRoll = dice1 + dice2;
        if (diceRoll != 7) {
            bet--;
        }
        else {
            bet = bet + 4;
        }
        betsArray.push(bet);
    var rollCounter = betsArray.length;
    var highestAmount = Math.max.apply(Math, betsArray);
    var highestPosition = betsArray.indexOf(highestAmount);
    var rollsFromHighest = rollCounter - highestPosition;
}
    
    document.getElementById("results").style.display = "block";
    document.getElementById("submitButton").innerText = "Play Again";
    document.getElementById("startingBet").innerText = "$" + num1;
    document.getElementById("rollCount").innerText =   rollCounter;
    document.getElementById("moneyHigh").innerText = "$" + highestAmount;
    document.getElementById("countAtHigh").innerText = rollsFromHighest;

    // We are returning false so that the form doesn't submit 
    // and so that we can see the results
    return false;
}
