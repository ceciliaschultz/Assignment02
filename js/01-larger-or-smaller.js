// Assignment 02
// Maria Cecilia Schultz

function largerOrSmaller() {
    
// Create an application that accepts two integers within two separate prompts. 
// Then, display only the larger of the two within the browser window.
// Don’t forget to handle the fact that the two could be equal.

  let int1 = parseInt(prompt('Enter the first integer: '));
  let int2 = parseInt(prompt('Enter the second integer: '));

  if (isNaN(int1) || isNaN(int2)) {
    alert('Please enter only integer numbers!');
    return;
  }
    
  // find the max
  let max = (int1>int2 ? int1 : int2);
  let resultMessage=`The max between ${int1} and ${int2} is: ${max}`;

  if (int1 == int2) {
      alert(`${resultMessage} (both numbers are max because they are the same!)`)
  } else {
    alert(`${resultMessage}`);
  }

}

