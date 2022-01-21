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

// NESTING FOR LOOPS

function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }

    return product;
}

var product = multiplyAll([1,2],[3,4],[5,6,7]);
console.log(product);

// Do while loop
var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
}while(i < 5)

console.log(i, myArray);


// Random fraction
function randomFraction() {
    return Math.random();
}

console.log(randomFraction());

// Random whole numbers
var randomNumberBetween0and19 = Math.floor(Math.random()*20);

function randomWholeNum() {
    return Math.random()*20;
}

console.log(randomWholeNum());

// Random whole numbers in a range
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(5, 15));

// parseInt --> converts a string to an integer
function convertToInteger(str) {
    return parseInt(str);
}
console.log(convertToInteger("3456"));

// parseInt with a Radix -->tells the base of the number
function convertToInteger(str) {
    return parseInt(str, 2);
}
console.log(convertToInteger("10011"));

// Ternary operator
// function CheckEqual(a, b) {
//     if(a === b) {
//         return true;
//     }
//     else {
//         return false;
//     }
// } --> inplace of this 

function CheckEqual(a, b) {

    return a === b ? true : false;
   
} 

console.log(CheckEqual(2, 2));

// multiple ternary(conditional) operators
function CheckSign(num) {

    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
   
} 

console.log(CheckSign(0));

/* NB : let --> can't allow you to declare a variable twice
    --> limitedto the block in which it is declared 
const --> is read only
*/

// mutate const variables --> use bracket notation
const s = [5, 7, 2];
function editInPlace() {
    "use strict";

    // s = [2, 5, 7];
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}

editInPlace();
console.log(s);

// Prevent object mutation
//--> Use Object.freeze(object);

// ARROW FUNCTIONS -> to write anonymous functions
var magic = function() {
    return new Date;
};  // anonymous function

//const magic = () => new Date; // same function 

// arrow fuctions with parameters
// var myConcat = function(arr1, arr2) {
//     return arr1.concat(arr2);
// }

// console.log(myConcat([1, 2], [3, 4, 5]));
// arrow
var myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));


// Arrow functions for higher end functions
// Higher end functions --> map, filter, reduce

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
}

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


