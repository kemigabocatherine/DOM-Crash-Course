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

// const list = document.querySelector("#list");
// console.log(list);

// const lis = document.querySelectorAll("li");
// console.log(lis);

const heading = document.getElementById('heading');
heading.style.color = "red";
heading.style.backgroundColor = "#000";

const lis = document.querySelectorAll('li');
console.log(lis);

// lis[1].style.backgroundColor = "red";

for(let i = 0; i < lis.length; i++){
    lis[i].style.backgroundColor = "skyblue";
}

// css text property
lis[0].style.cssText = "background-color: bisque; color: purple; font-size: 25px";