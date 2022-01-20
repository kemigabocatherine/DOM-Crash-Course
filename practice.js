/*function ourFunction(){
    console.log("Hello World");
}

ourFunction();

function ourTunction(a,b){
    console.log(a-b);
}

ourTunction(10,5);

function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr));

function testLogicalOr(val) {
    if (val < 10 || val > 20){
        return "Outside";
    }
    return "Inside";
}

console.log(testLogicalOr(2)); */

const { arrayBuffer } = require("stream/consumers");

// Switch statement
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        default:
            answer = "stuff";
            break;

    }
    return answer;
}

var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    var holdbet = 'Hold'
    if (count > 0) {
        holdbet = 'Bet';
    }
    return count + " " + holdbet;
}

cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(4));

var myDog = {
    "name": "Quincy",
    "legs": 4,
    "friends": "Cathy"
};
myDog.name = "Camper";
myDog.bark = "bow-wow";
//delete myDog.bark; 
// Dot notation
var nameValue = myDog.name;
var legsValue = myDog.legs;

console.log(legsValue);
console.log(nameValue);
console.log(myDog);


// BRACKET NOTATION -->necessary if the property names have spaces eg "an entree"
var friendsValue = myDog["friends"];
console.log(friendsValue);

function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "frank"
    };
    result = lookup[val];


    return result;
}
console.log(phoneticLookup("echo"));

// Check if object has property
 
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
    
};

function checkObj(checkProp){
    if(myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    }else {
        return "Not found";
    }
}

console.log(checkObj("gift"));

// WHILE LOOP
var myArray = [];

var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);

// FOR LOOP
var ourArray = [];

for(var i = 1; i < 6; i++) {
    ourArray.push(i);
}
console.log(ourArray);
// Odd numbers with for loop
var ourArray = [];

for(var i = 0; i < 13; i += 2) {
    ourArray.push(i);
}
console.log(ourArray);

var myArray = [];
for(var i = 0; i < 13; i += 3) {
    myArray.push(i);
}
console.log(myArray);

// iterate through an array using for loop
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}
console.log(ourTotal);

