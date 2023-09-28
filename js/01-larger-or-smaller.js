// Assignment 02
// Maria Cecilia Schultz

function largerOrSmaller() {
    
// Create an application that accepts two integers within two separate prompts. 
// Then, display only the larger of the two within the browser window.
// Don’t forget to handle the fact that the two could be equal.

  let int1 = parseInt(prompt('Enter the first integer: '));
  let int2 = parseInt(prompt('Enter the second integer: '));

  if (int1 == int2) {
    alert('Sorry, the two numbers are the same!');
    return;
  }
  // if numbers are different, find the max
  let max = (int1>int2 ? int1 : int2);
  alert(`The max between ${int1} and ${int2} is: ${max}`)

}

