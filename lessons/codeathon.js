// HERE WE GOOOOOOOOOO
// duh duh duh dn dn duh duh duh dee dee dee dee (song that plays in spacejam when they are about to fight the MonSTARs)

//EXERCSIE 1: HOLES IN TEXT
var sentence = "how many holes does this sentence have?";

var HL = ["A", "a", "B", "b", "D", "d", "g", "O", "o", "P", "p", "Q", "q", "R"];

function hasHole(letter) {
  index = 0;
  while (index < HL.length) {
    if (letter === HL[index]) {
      return true;
    } else {
      index++;
    }
  }
  return false;
}

var sentHoles = filter(sentence, hasHole);
console.log("Your sentence has " + sentHoles.length + " holes, which are: " + sentHoles);

//EXERCISE 2
// part a) return all sidekicks whose superhero is batman
var sidekicks = [
  {name: "Robin",           hero: "Batman"   },
  {name: "Supergirl",       hero: "Superman" },
  {name: "Fatman",          hero: "Mister America"},
  {name: "Oracle",          hero: "Batman"   },
  {name: "Doiby Dickles",   hero: "Green Lantern" },
  {name: "BatGirl",         hero: "Batman"},
  {name: "Pieface",         hero: "Green Lantern" }
];


function Batman(object) {
  return object.hero === "Batman";
}

var batLovers = filter(sidekicks, Batman);
console.log(batLovers);


// part b) return names of sidekicks who love green lantern
function greenLan(object) {
  return object.hero === "Green Lantern";
}


function greenLanNames(object) {
  return object.name;
}

var Names = map(filter(sidekicks,greenLan), greenLanNames);
console.log(Names);

//EXERCISE 3
function contains(bug, collection) {

  return reduce(collection, function(currAccum,currEl) {
    if(currEl === bug) {
      return true;
    } else {
      return currAccum;
    }
  }, false);
}

var contain = contains(5, [44,65,4,3,45]);
console.log(contain);

//EXERCISE 4
//exchange coins from makersquare dollars to american dollars
var coins = [12, 2];


var exchange = map(coins, function(coin) {
  var total = 0;
  for (var i = 2; i <=4; i++) {
    total += Math.floor(coin/i);
  }
  return total;
});

console.log(exchange);

//EXERCISE 6
var numberofTweets = 5;

var postClicks = [1, 4];

function createEmptyArray(num) {
  var empty = [];
  for (var i = 0; i <= num; i++) {
    empty[i] = 0;
  }
  return empty;
}

function allOpen(array) {
  var arr = map(array, function(currEl) {
    return 1;
  });
  return arr;
}

function allClosed(array) {
  var arr = map(array, function(currEl) {
    return 0;
  });
  return arr;
}

function openerCloser(array) {
  var zerosArray = [0, 0, 0, 0, 0];

  each(array, function(currentEl) {

    if (typeof currentEl === "number") {

      if (zerosArray[currentEl - 1] === 0) {
        zerosArray[currentEl - 1] = 1;
      } else  {
        zerosArray[currentEl - 1] = 0;
      }

    } else if (typeof currentEl === "string") {

      switch (currentEl) {
        case "c":
        zerosArray = allClosed(zerosArray);
        break;
        case "o":
        zerosArray = allOpen(zerosArray);
        break;
        case "default":
        break;

      }
    }

  });

  return zerosArray;
}

var counter = reduce(arr, function(prevEl,currEl) {
  return prevEl + currEl;
},0);


//alphabeta soup
//this function takes an array of strings and then puts them in alphabetical order... sort of.  going to retry it using map, which I think will be more appropriate than reduce

function alphabetSoup(strArray) {

  return reduce(strArray, function(accum, currentEl){

    // for the first iteration
    if (accum === "") {
      return currentEl;
    }

    for (var i = 0; i < accum.length; i++) {
      if (currentEl[i] < accum[i][0]) { // insert currentEl before accum[i]
        accum = [accum.slice(0, i*accum.length) + currentEl + accum.slice(i*accum.length)].join("");
        return accum;
      }
    }

    // if currentEl is > any letter in accum append it to the end of accum
    return accum += currentEl;

  }, "");

}
var strArray = ["days", "all", "cat", "bad", "all"];
var soup = alphabetSoup(strArray);
