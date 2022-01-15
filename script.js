//DOM METHODS
// get element by id
// document.getElementById('heading');
// console.log(heading);
// console.log(typeof heading);

// // Changing html content //
// const list = document.getElementById("list");
// //list.textContent = "Hi there";
// console.log(list.textContent);

// list.innerHTML = "<h1>Hi there</h1>";

// console.log(list.innerHTML);

// // Qeury selector -->returns first element that matches specified css selector

const list = document.querySelector("#list");
console.log(list);

const lis = document.querySelectorAll("li");
console.log(lis);

