
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
