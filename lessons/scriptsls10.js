// EXERCISE 1
function dateFunction(){
  console.log("Hello " + new Date());
}
dateFunction();
dateFunction();
dateFunction();

function enthusiastic(){
  alert("enthusiastic string of text");
}
enthusiastic();


//EXERCISE 2
function random_number(){
  return Math.floor((Math.random() * 10) + 1);
}
// var new_random_number = random_number();
// console.log(random_number());

count = 0;

while (count < 11){
  console.log(random_number());
  count++;
}

//EXERCISE 3
function tripler(input){
  return input * 3;
}

function multiply(n1,n2) {
  return n1 * n2;
}

function divide(n1,n2) {
  return n1 / n2;
}

function remainder(n1,n2) {
  return n1 % n2;
}

console.log(remainder(divide(multiply(tripler(5),12),2),3));

//EXERCISE 4
function factorial_of_n(N) {
  counter = 1;
  fact = 1;
  while (counter <= N) {
    fact *= counter;
    counter++;
  }
  return(fact);
}
console.log(factorial_of_n(5));

//
function count_by_n(countBy, countTo) {
  counter = 1;
  while (counter*countBy <= countTo) {
    console.log(counter*countBy);
    counter++;
  }
}
count_by_n(2,10);

//EXERCISE 5
function thisthat(word1, word2, countTo, fizzNum, buzzNum){
  i = 1;
  while (i <= countTo){
    if (i % fizzNum ===0 && i % buzzNum === 0){
      console.log(word1 + word2);
    } else if (i % fizzNum === 0) {
      console.log(word1);
    } else {
      console.log(i);
    }
    i++;
  }
}
thisthat("fuck", "shit", 30, 2, 5);

//EXERCISE 6
function fibFinder(N) {
  var prevNum = 0;
  var currNum = 1;
  var nexNum;
  counter = 1;
  while (counter < N){
    nexNum = prevNum + currNum;
    prevNum = currNum;
    currNum = nexNum;
    counter++;
  }

  return currNum;
}
console.log(fibFinder(6));

//EXTRA CREDIT
function calculator(n1,n2, operation){
  switch (operation) {
    case 'sum':
      return sum(n1,n2);

    case 'multiply':
      return multiply(n1,n2);

    case 'divide':
      return divide(n1,n2);

    case 'remainder':
      return remainder(n1,n2);

      default:
      return "fuck";
  }
}

console.log(calculator(2,3,"sum"));

//NIGHTMARE MODE
