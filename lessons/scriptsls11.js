// EXERCISE 2
var bucketlist = [];
bucketlist[0] = "kick a bucket";
bucketlist[1] = "say fuckit";
bucketlist.push("eat ice cream", "have a wet dream");
// console.log(bucketlist);
bucketlist.unshift("see rage against the machine", "learn how to scream");
console.log(bucketlist);
var dyingWish = bucketlist.pop();
console.log(dyingWish);
var doItNow = bucketlist.shift();
console.log(doItNow);
console.log(bucketlist);

//EXERCSIE 4
var arr1 = [1,2,3,4,5];
var reversedArr = [];
function reverser(array) {
  for (var i = 0; i < 5; i++) {
    reversedArr[i] = array.pop();
  }
  return reversedArr;
}

//EXERCISE 5
var numArr = [34,5,21,1];
var sort = [0,0];
for (var i = 0; i < numArr.length; i++){
  if (numArr[i] === Math.max(...numArr)){
    sort[0] = numArr[i];
  } else if (numArr[i] == Math.min(...numArr)){
    sort[1] = numArr[i];
  }
}
console.log(sort);

// stupid way of doing exercise 5
var a = [34,5,21,1];
var sort = [];
var max = a[0];
var min = a[0];
for (var i = 0; i < a.length; i++) {
  if (a[i] > max) {
    max = a[i];
  } else {
    min = a[i];
  }

  sort = [max,min];

}
console.log(sort);

//EXERCISE 6
var originalArray = ["fuck", "you"];
var outputArray = [];
function arrayDuplicator(originalArray) {
  for (var i = 0; i < originalArray.length; i++) {
  outputArray[i] = originalArray[i];
}
  return outputArray;
}

var orig=[1,2,3,4];
var dup = arrayDuplicatorD(orig);
dup.pop();
dup.pop();
dup.pop();

console.log(orig,dup);
