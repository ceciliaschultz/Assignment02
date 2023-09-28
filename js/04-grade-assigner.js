// Assignment 02
// Maria Cecilia Schultz

function gradeAssigner() {
    
  let score = parseInt(prompt('Enter the first integer: '));

  /*
If the score is between 60 and 69, write out “You received a D” into the console.
If the score is between 70 and 79, write out “You received a C” into the console.
If the score is between 80 and 89, write out “You received a B” into the console.
If the score is between 90 and 100, write out “You received an A” into the console.
If the score is less than 60, write out “You received an F” into the console.
  */
  let resultMessage;
  switch (true) {
    case (score <1 || score > 100 || isNaN(score)): 
        resultMessage="Only numbers between 1 and 100 are accepted!";
        break;
    case (score <60): // less than 60 
        resultMessage="You received an F";
        break;
    case (score <= 69): // 60 to 69
        resultMessage="You received a D";
        break;
    case (score <= 79):  // 70 to 79 
        resultMessage="You received a C";
        break;
    case (score <= 89):  // 80 to 89 
        resultMessage="You received a B";
        break;
    default: // 90 to 100
        resultMessage="You received an A";
        break;
  }
  console.log(resultMessage);
}
