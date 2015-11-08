
//Each and filter, notes from class
function filter(collection, predicate){
  var results = [];
  each(collection, function(currentEl){
    if(predicate(currentEl)){
      results.push(currentEl);
    }
  });
  return results;
}

function each(collection,callback){
  for (var i = 0; i < collection.length; i++){
    callback(collection[i]);
  }
}

var testArr = [1,2,3,4,5];
function evenNumber(currentEl){
  return currentEl % 2 === 0;
}
var evenNumArr = filter(testArr, evenNumber);
console.log(evenNumArr);


//EXERCISE 3
// part a
function each(collection, callbackFunction) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      callbackFunction(collection[i]);
    }
  } else {
    for (var key in collection) {
      callbackFunction(collection[key]);
    }
  }
}

var myObj = {
  name: "object",
  shape: "squircle",
  color: "coquelicot",
  heightInCM: 20.4,
  exists: true
};

function octo(key) {
  console.log("#" + key);
}

var octokey = each(myObj, octo);

//part b
var mySea = ["What's", "a", "pirate's", "favorite", "letter?"];

var oneLine = "";

each(mySea, function(currentEl) {
  oneLine += " " + currentEl;
});

console.log(oneLine);

//EXERCISE 4
//part a
var numbersR = [36, 81, 3481, 1681];


var sqrt = map(numbersR, Math.sqrt);
console.log(sqrt);

//part b
var mice = [
  {name: "Longtail"},
  {name: "Sharpteeth"},
  {name: "Smellypee"},
  {name: "Twinkle Fingers"}
];

var marriedMice = map(mice, function(currentEl) {
  return "Mrs. " + currentEl.name;
});

console.log(marriedMice);

//EXERCISE 5
// part a
var people = ["Monica", "Erica", "Rita", "Tina", "Sandra", "Mary", "Jessica"];

function longer6(name) {
  return (name.length >= 6);
}

var invitees = filter(people, longer6);
console.log(invitees);
//part b
var people = ["Monica", "Erica", "Rita", "Tina", "Sandra", "Mary", "Jessica"];

var coolerPeople = filter(people, function(name) {
  var asciiTotal = 0;
  for (var i = 0; i < name.length; i++) {
    asciiTotal += name.charCodeAt(i);
  }
  return asciiTotal <= 400;

});
console.log(coolerPeople);


//EXERCISE 6
//part a
var n = 3;
var nArr = [];
for (var i = 1; i <= n; i ++) {
  nArr.push(i);
}

var factorial = reduce(nArr, function(a,b) {
  return a * b;
});

console.log(factorial);

//part b
var proc = [
  2000000000, 2600000000, 2300000000, 2500000000, 2200000000, 10
];

var giga = 1000000000;

function processorMax(speed1, speed2) {
  if (speed2 > speed1) {
    return speed2;
  } else
    return speed1;
}

var fastest = reduce(proc, processorMax);
console.log(fastest/giga);
