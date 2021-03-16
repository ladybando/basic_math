

alert("Let's get ready to MATH!");
// 3. Create a variable and use the prompt() method to collect a number from a visitor

let numOne = prompt("Select a number from 1 - 10");

// 4. Convert that value from a string to a floating point number
 numOne = parseFloat(numOne);
//5. Repeat steps 3 and 4 to create a second variable and collect a second number
let numTwo = prompt("Select a number from 1 - 10");
numTwo = parseFloat(numTwo);

message = `<h1>Math with the numbers ${numOne} and ${numTwo}:</h1><br>

<p>
  ${numOne} + ${numTwo} = ${numOne + numTwo} <br>
  ${numOne} - ${numTwo} = ${numOne - numTwo} <br>
  ${numOne} * ${numTwo} = ${numOne * numTwo}<br>
  ${numOne} / ${numTwo} = ${numOne / numTwo}<br>
</p>`;


document.write(message);
