

/* TEST display

view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");
view.displayMiss("Testing, one... two...test") */




/* test whether game state updates display

model.fire("53");
model.fire("06");
model.fire("16");
model.fire("26");
model.fire("34");
model.fire("24");
model.fire("44");
model.fire("12");
model.fire("11");
model.fire("10"); */

/* test parse function

console.log(parseGuess("A0"));  // output: 00   
console.log(parseGuess("B6"));  // output: 16
console.log(parseGuess("G3"));  // output: 63
console.log(parseGuess("H0"));  // output: null
console.log(parseGuess("A7"));  // output: null
*/

/* test guess event handler

    controller.processGuess("A0");
    controller.processGuess("B6");
*/
