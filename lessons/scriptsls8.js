// n = 0;
// while (n <= 50) {
//   console.log(n);
//   n += 2;
// }

// EXERCISE 2
// var i = 1;
// var string = "";
// while (i <= 5) {
//
//   string += i;
//   if ( i < 5) {
//     string += ", ";
//   }
//   i++;
// }
// console.log(string);

//EXERCSIE 3
// var i = 1;
// var result = 1;
// while (i <= 5) {
//   result = i * result;
//   i++;
// }
// console.log(result);

//EXERCISE 4
// i = 1;
// while (1 <= 100){
//   if (i % 3 === 0 && 1 % 5 === 0){
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 9) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
// i++;
// };

//EXERCISE 5
// var i = 1;
// var n = 5;
// var j;
// var message = "";
//
// while (i <= n){
//   message += (i);
//   j = 1;
//   while (j < i){
//     message += (j)
//     j++
//   }
//   console.log(message);
//   message = "";
//   i++;
// }

// EXERCISE 8
// var userInput;
// var compInput;
// var goAgain = true;
//
// while (goAgain){
//   userInput = prompt("would you like to be rock, paper, or scissors?");
//   compInput = Math.floor(Math.random() * 3);
//   // 0 = rock, 1= paper, 2=scissors
//   if ( userInput != ("rock"|| "paper" || "scissors")) {
//     userInput = prompt("please type either rock, paper, or scissors");
//   } else {
//     if (userInput === "rock"){
//       switch(compInput) {
//         case 0:
//         alert("Tie");
//         break;
//         case 1:
//         alert("computer was paper, you lose");
//         break;
//         case 2:
//         alert("computer was scissors, you win!");
//         break;
//       }
//     }
//     if (userInput === "paper"){
//       switch(compInput) {
//         case 0:
//         alert("computer was rock, you win!");
//         break;
//         case 1:
//         alert("computer was paper, tie");
//         break;
//         case 2:
//         alert("computer was scissors, you lose!");
//         break;
//       }
//     }
//     if (userInput === "rock"){
//       switch(compInput) {
//         case 0:
//         alert("computer was rock, you tie!");
//         break;
//         case 1:
//         alert("computer was paper, you lose");
//         break;
//         case 2:
//         alert("computer was scissors, you win!");
//         break;
//       }
//     }
//   }
//
//   goAgain = confirm("would you like to play again?");
//
// }

// EXERCISE 9
// var maxNum = parseInt(prompt("what will the max guessing number be?"));
// var guessNum = Math.floor(Math.random() * (maxNum - 2)) + 2;
// var userGuess = parseInt(prompt("i'm thinking of a number between 1 and " + maxNum + ".  what is it?"));
//
// var guesses = 0;
// 
//
// while (userGuess !== guessNum) {
//     if (userGuess < guessNum) {
//         console.log("toolow");
//     } else {
//         console.log("toohigh");
//     }
//   userGuess = parseInt(prompt("give a new number"));
//     guesses++;
//   //noprotect
// }
//
// console.log("congrats, the number was " + guessNum);
