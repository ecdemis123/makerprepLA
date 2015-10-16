console.log("This is my first upload");

// INITIAL NOTES
var car ={};

var userProp = prompt("what property?");
var value = prompt("what value?");

car[userProp] = value;

console.log(car.speed);

//"FOR IN" LOOP
counter = 0;
for (var prop in car) {
  console.log(car[prop]);
if (counter === 3) {
  break;
}
counter++;
}

// objects within objects
car.seats = {
  material: "leather",
  heated: true,
  armrest: {
    comfy: true
  }
};
