//EXERCISE 1
//write a function that takes a function as an input, runs it and console logs the return value from that function
function adder(n1,n2){
  return n1 + n2;
}

function answer_logger(callback){
  console.log(callback);
}

answer_logger(adder(5,4));

answer_logger(function(){
  return "I should be console logged";
}); // testing to make sure that it works, yez it dooz.


//EXERCISE 2
// write a function called answer collector that takes an array of functions as an input and returns each of them in turn. each time you run a function, capture its value and push it to a results array. return the results array
function happy(){
  return "happy";
}

function sad(){
  return "sad";
}

function whatev(){
  return "whatev";
}

var functionsArray = [happy, sad, whatev];

function answerCollector(collection){
  var resultsArray = [];
  for (var i = 0; i < collection.length; i++){
  resultsArray.push(collection[i]());
  }
  return resultsArray;
}

var blah = answerCollector(functionsArray);
console.log(blah);

//EXERCISE 3
// create a function that returns another function. it should accept one parameter when it is invoked and return 5 + parameter
