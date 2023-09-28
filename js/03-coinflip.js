// Assignment 02
// Maria Cecilia Schultz

function coinFlip() {

    let choice = prompt("h=Heads, t=tails (anything else will default to tails): ");

    // simulate a coin flip with a random number between 1 and 100 
    let coinFlip = Math.floor(Math.random() * 100) + 1;
 
    // Use a conditional to check the result of the coin flip. 
    // If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails.
    // Using 50 to determine whether the coin is heads or tails
    let flipCode = (coinFlip>50 ? "h" : "t");
    
    if (choice == flipCode) {
        if (choice == "h") {
            resultMessage="The flip was heads and you chose heads... you win!"; 
        } else {
            resultMessage="The flip was tails and you chose tails... you win!"; 
        }
     } else {
         if (choice == "h") {
            resultMessage="The flip was tails and you chose heads... you lose!"; 
        } else {
            resultMessage="The flip was heads and you chose tails... you lose!"; 
        }

    }

    // show message
    alert(resultMessage);
   
}


