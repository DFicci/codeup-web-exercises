"use strict";
 /* ########################################################################## */
/**
  * TODO:
  * Create a function named `analyzeColor` that accepts a string that is a color
  * name as input. This function should return a message which relates to the
  * color stated in the argument of the function. For colors you do not have
  * responses written for, return a string stating so
  *
  * Example:
  *  > analyzeColor('blue') // returns "blue is the color of the sky"
  *  > analyzeColor('red') // returns "Strawberries are red"
  *
  *
  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
  *
  * You should use an if-else-if-else block to return different messages.
  *
  * Test your function by passing various string literals to it and
  * console.logging the function's return value
  */
//----------------------------------------------------------------------------------------------------------------------
let colorCode = prompt("what is your favorite color?");
analyzeColor(colorCode);

 function analyzeColor(color){
    switch (color){
         case "blue":
             alert("blue is the color of the sky");
             break;
         case "red":
            alert("Strawberries are red");
             break;
        case "cyan":
             alert("i don't know anything about cyan");
             break;
     }
}
//----------------------------------------------------------------------------------------------------------------------
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
// will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
//----------------------------------------------------------------------------------------------------------------------
 /**
  * TODO:
  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
  * You should see a different message every time you refresh the page
  */
 //analyzeColor(randomColor);
//----------------------------------------------------------------------------------------------------------------------
/**
  * TODO:
  * Comment out the code above, and refactor your function to use a switch-case statement
  */
//----------------------------------------------------------------------------------------------------------------------
/**
  * TODO:
  * Prompt the user for a color when the page loads, and pass the input from the
  * user to your `analyzeColor` function. Alert the return value from your
  * function to show it to the user.
  */
/* ########################################################################## */
/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
//----------------------------------------------------------------------------------------------------------------------
function calculateTotal(luckyNumber, totalAmount){
    if (luckyNumber === 0){
        return totalAmount
    } else if (luckyNumber ===1){
        return totalAmount * .90;
    }else if (luckyNumber === 2) {
        return totalAmount * .75;
    } else if (luckyNumber === 3){
        return totalAmount * .65;
    } else if (luckyNumber === 4){
        return totalAmount * .50;
    } else if (luckyNumber === 5){
        return 0;
    }
}
console.log(calculateTotal(5,10));
//----------------------------------------------------------------------------------------------------------------------
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
 var luckyNumber = Math.floor(Math.random() * 6);
 let customerBill = prompt("What is the total amount of your bill?")
 let actualtotal = calculateTotal(luckyNumber,customerBill)
 alert("your lucky number is " + luckyNumber)
 alert("Your price is " + "$" + actualtotal + ".")
//----------------------------------------------------------------------------------------------------------------------
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
//Function that initiates the sequence of events for this exercise------------------------------------------------------
startEvent()
function startEvent(){
    if (confirm("Would you like to analyze your number?") === true){
        promptUser()
    }
}
//Prompts user to input a number----------------------------------------------------------------------------------------
function promptUser(){
    let userInput =  prompt("Type in a number!");
    analyzeInput(userInput);
}
//If user puts in string instead of value it sends them back to prompt user, if value was an input----------------------
//---->then functions proceed to evaluate the number.-------------------------------------------------------------------
function analyzeInput (inputToAnalyze){
    let parsedInput = parseInt(inputToAnalyze);
    if (isNaN(parsedInput)){
        alert("Please enter a value and not a string");
        promptUser()
    } else{
        evenOrOdd(inputToAnalyze);
    }
}
//Determines whether the input is odd or even.--------------------------------------------------------------------------
function evenOrOdd (x) {
    if (x%2 === 0){
        alert("Your number is even!")
        addOneHundred(x)
    } else
        alert("Your number is odd!")
        addOneHundred(x)
}
//Adds 100 to the value of the number-----------------------------------------------------------------------------------
function addOneHundred (oneHundredToValue){
    let parsedInput = parseInt(oneHundredToValue)
    alert("Your number plus one hundred is " + (100 + parsedInput) + "!")
    isNegativeOrPositive(oneHundredToValue)
}
//determines if the number is negative or positive----------------------------------------------------------------------
function isNegativeOrPositive (negOrPos){
    if (negOrPos < 0){
        return ("Your number is negative")
    } else{
        return ("Your number is positive")
    }

}
//----------------------------------------------------------------------------------------------------------------------

