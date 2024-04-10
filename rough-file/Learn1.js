// const Product = {
//     fullName: "Mayur Ovhal",
//     age: 33,
//     isfollow: true,
//     percentage: 6
// };

// const { ObjectFlags } = require("typescript");

// const { getParseTreeNode } = require("typescript");

// const { data } = require("jquery");

// const { reject } = require("lodash");

// const { result } = require("lodash");

// const { forEach } = require("lodash");

// const { isBlock } = require("typescript");

// const { forEach } = require("lodash");

// const { valuesIn } = require("lodash");

// console.log (Product);

// Product.age  = Product.age + 2 ;
// Product["age"] = Product["age"] + 1;
// console.log (Product["age"]);

// Unary Operator
// let a = 5;
// let b = 2;

// {
//     console.log("++a =", ++a);
//     console.log("a =",  a);
 
// };

// {
//     console.log("--a =", --a);
//     console.log("a =", a);
// };
// {
//     console.log("a++ =", a++);
//     console.log("a =", a);

// };

// {
//     console.log("a-- =", a--);

//     console.log("a-- =", a);
// };
// 

// Assignment Operator

// let a = 5;
// let b = 2;

// a /= 4  // a = 5 / 4
// console.log("a /= 4 =", a);

// Logical Operator

// let a = 5;
// let b = 2;

// let cond1 = a > b;
// let cond2 = b < 1;

// console.log("!(a > b) =", !(a > b ))

// Operational Statment
// 1. If Statment

// let mode = "silver";
// let color;

// if (mode === "silver") {
//     color = "black";
// }
// console.log(color);

// 2. If else statement

// let mode = "silver";
// let color;

// if (mode === "light") {
//     color = "green";
// } else {
//     color = "white";
// }
// console.log(color);

// 3. else if statement
// let mode = "silver";
// let color;

// if (mode === "dark") {
//     color = "black";
// } else if(mode === "blue") {
//     color = "blue";
// } else if (mode === "green") {
//     color = "green";
// } else {
//     color = "gray"
// }
// console.log (color);

// Practice Questio:-
 
// let Score = 75;
// let grade;

// if (Score >= 90 && Score <= 100) {
//     grade = "A";
// } else if (Score >= 70 && Score <= 89) {
//     grade = "B";
// } else if (Score >= 60 && Score <= 69) {
//     grade = "C";
// } else if (Score >= 50 && Score <= 59) {
//     grade = "D";
// } else if (Score >=0 && Score <= 49) {
//     grade = "F";
// }
// console.log("According to your score your grade was :" , grade);

// let num = prompt("Enter a Number");

// if (num % 5 === 0) {
//     console.log(num, "this is a multile of 5");
// } else {
//     console.log (num, "this is not a multiple of 5");
// }

// let a = 4;
// let b = 2;
// let cond1 = a > b;
// let cond2 = a == 4;
// console.log("a = ", a , "& b =", b)
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % B =", a % b);
// console.log("a ** b =", a ** b);
// console.log("a += 4 =", a += 4);
// console.log("a **= 4 =", a ** 4);
// console.log("a /= 4 =", a /= 4);
// console.log("a %= 4 =", a %= 4);
// console.log("4 != 2 =", a != b);

// console.log("!(a >= b) =", !(4 >= 2));

// const student= {
//     name: "Mayur",
//     age: 33,
//     markes: 95,
//     ispass: true
// }
// console.log(student);
// console.log(student ["age"]);
// console.log(typeof student["name"])
// student["age"] = student["age"] + 1;
// console.log(student["age"]);

// let num = 25;
// let userNum = prompt("enter a number");


// console.log("You Enter A correct Number, Congratuation!");

// let num = prompt("Enter A number");

// if(num % 5 === 0) {
//     console.log(num, ": this num is multiple of 5");
// } else {
//     console.log(num, ": this num is not multiple of 5");
// }

// let score = prompt("Enter A Score");
// let grade;

// if (score >= 90 && score <= 100) {
//     grade = "A";
// } else if(score >=70 && score <= 89) {
//     grade = "B";
// } else if(score >= 60 && score <= 69) {
//     grade = "c";
// } else if(score >= 50 && score <= 59) {
//     grade = "D";
// } else if (score >=0 && score <= 49) {
//     grade = "F";
// }
// console.log("According to the score your garde is", grade);

// Print Even Number
// for (i=0; i<=100; i++) {
//     if(i % 2 === 0) {
//         console.log("i =", i);
//     }
// }

// Game Project
// let gameNum = 25;
// let userNum = prompt("Enter a game number");

// while(userNum != gameNum) {
//     userNum = prompt("You enetered a wrong number, guess again");
// }

// console.log("Congratulation you enetered a correct number");

// Eg of Escape Characters
// str = "Mayur\nOvhal";
// str2 = "Pooja\tOvhal";
// console.log(str);
// console.log(str2);
// console.log(str.length);
// console.log(str2.length);

// let str = "MayurOvhal";
// let str2 = "    Pooja Ovhal   ";
// str = str.toLowerCase();
// console.log(str);

// console.log(str2.trim());

// let str = "Mayur";
// console.log(str.slice(1));
// console.log(str.replace("Mayur", "Rajveer"));

// let str1 = "Mayur";
// let str2 = "Pooja";

// let res = str2.concat(str1);
// console.log(res);

// let fullName = "Mayur";
// console.log(fullName.replace("M", "A"));

// let str = "Mayur";
// str = str.replace("Ma", "A");
// console.log(str);

// let fullName = prompt("Enter a full Name");

// console.log("@" + fullName + fullName.length);

// let str = "Mayur";
// let str2 = "   Pooja Ovhal   ";
// let userName =  "Pooja";
// console.log(str.replace("M", "Mayur"));
// console.log(str.slice(0, 3));
// console.log(str2.trim());
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.concat(userName));

//  let fullName = "Pen";
//  let price = 10;
//  let output = `the price of ${fullName} is ${price} rupees`;
//  console.log(output);

// let i = 5;
// while (i <= 5){
//     console.log("Apna College");
//     i++;
// }

// for(let count=5; count<=5; count++) {
//     console.log("Apna College");
// }

// let b = 4;
// do {
//     console.log("Apna College");
//     b++;
// } while(b <= 5);

// let marks = [95, 94, 93, 92, 91]
// marks[2] = 90;
// console.log(marks);

// let marks = [85, 97, 44, 37, 76, 70];
// let sum = 0;

// for(let val of marks){
//     sum = sum + val;
// }
// let avg = sum / marks.length;

// console.log(`The avg of class is ${avg}`);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length);

// for(i = 1; i < arr.length; i++) {
// console.log("i =", i);
// }

// let fullName = "Mayur";
// for(let val of fullName) {
//     console.log(val);
// }

// let marks = [1, 2, 3, 4, 5];
// let sum = 0;

// for(let val of marks) {
//     sum = sum + val;
// }

// let avg = sum / marks.length;
// console.log(avg);

// let items = [250, 645, 300, 900, 50];
// let i = 0;

// for of loop
// for (let val of items){
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(items[i]);
//     i++
// }

// for loop
// for(let i=0; i<items.length; i++){
//     let offer = items[i] / 10;
//     items[i] = items[i] - offer;
//     console.log(items[i]);
// }

// let item = ["apple", "banana", "orange", "pineapple", "litchi"];
// console.log(item.shift("abc"));
// console.log(item);
// let deleteditem = item.shift();
// console.log("deleteditem =", deleteditem);

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log(companies);
// // companies.shift();
// // console.log(companies);
// // companies.splice(2, 1, "Ola")
// // console.log(companies);
// companies.push("Amazon");
// console.log(companies);

// Practice Question of Array 1
// let fullName = prompt("Enter a full name");

// console.log("@" + fullName + fullName.length);

// Practice Question of Array 2
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;

// for(let val of marks){
//     sum = sum + val;
// }
// let avg = sum / marks.length;
// console.log(`The average of the students marks is ${avg}`);

// Practice Question of Array 3
// let items = [250, 645, 300, 900, 50];

// for(let val of items){
//     console.log(val);
//     let offer = items[i] / 10;
//     items[i] = items[i] - offer;
//     console.log(`The actual price of the item is ${items[i]} after applying offer`);
//     i++;
// }
//  OR

// let items = [250, 645, 300, 900, 50];
// for(let i=0; i<items.length; i++){
//     let offer = items[i] / 10;
//     items[i] = items[i] - offer;
//     // console.log(`The actual price of the item is ${items[i]} after applying offer`);
// }
// console.log(items);

// let items = ["apple", "banana", "pineapple"];

// items.push("chips");
// console.log(items);
// let deleteditem = items.pop();
// // console.log(deleteditem);

// console.log(items.splice(1));
// console.log(items);

// items.pop(1, 1, "abc");
// console.log(items);

// items.push("Amazon");
// console.log(items);

// function myfunction(msg, msg1){
//     console.log(msg + msg1);
// }

// myfunction("Mayur Ovhal", " Pooja Ovhal");

// function sum (x, y){
//     s = x + y;
//     return s;
// }
// let val = sum(2, 5);
// console.log(val);

// function fullName(){
//     console.log("Mayur Ovhal");
// }

// fullName();

// function sum(x, y){
//     return x * y ;
// }
// let arrowsum = (x , b) => {
//     console.log(2 * 5);
// };
// console.log(arrowsum);
// arrowsum(2, 5);

// function sum(){
//     console.log("Larning javascript");
//     console.log("Larning javascript");
//     console.log("Larning javascript");
//     console.log("Larning javascript");
// }
// sum();
// sum();

// function sum(a, b){
//     return a / b;
// }
// let val = sum(10, 2);
// console.log(val);

// function sum(a, b){
//     return a ** b;
// }

// let arrowsum = (a, b) => {
//     return a ** b;
// }
// console.log(arrowsum);
// console.log(arrowsum(10, 2));

// let str = prompt("enter a name");
// function countVowels(str){
//     count = 0;
//     for(let char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
//         count = count + 1;
//     }
//     console.log(count);

// }
// console.log(countVowels(str));

// let str = prompt("enter a name");
// function countVowels(str){
// }    
//  let Pooja = (str) => {
//     let count = 0;
//     for(let char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
//         count = count + 1;
    
//     }
//       return count;
// }
// console.log(Pooja(str)); 

// let arr = [ 2, 3, 4, 5, 6];
// console.log(arr);

// arr.forEach(function squre(num){
//     console.log(num ** num);
// })

// let arr = [2, 3, 4, 5];
// for (let val of arr){
//     console.log(val);
// function squre(val){
//         console.log(val ** val);
// }
// }
// squre(val);

// let arr = [1,2, 3, 4, 5];

// arr.forEach(function value(val){
//     console.log(val);
//     console.log(val ** 2);
// })

// function myfun(x, y){
//     return x + y;
// }
// let val = myfun(2, 5);
// console.log(val);

// let arr = [1, 2, 3, 4, 5];

// arr.map(function value(val){
//     return val * 2;
// })

// let arr = [1, 2, 3, 4, 5];
// let newstring = arr.filter(function myval(val){
//     return val % 2 === 0;
// })
// console.log(newstring);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let newstring = arr.reduce(function value(prev, curr){
//     return prev + curr;
// })
// console.log(newstring);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 14, 16, 18];
// let Mayur = arr.filter(function value(val){
//     return val < 4;
// })
// console.log(Mayur);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 14, 16, 18];
// let Mayur = arr.reduce(function value(prev, curr){
//     return prev < curr ? prev : curr; 
// })
// console.log(Mayur);

// let marks = [86, 87, 88, 89, 90, 91, 92, 93, 94];
// let studentmarks = marks.filter(function value(val){
//     return val > 90;
// })
// console.log(studentmarks);

// let num = prompt[1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(num);
// solution 1:
// let Total = num.reduce(function all(first, second){
//     return first + second;
// })
// console.log(Total);
// Solution 2:
// let Total = num.reduce(function all(first, second){
//     return first * second;
// })
// console.log(Total);

// let n = prompt("Enter A Number");
// let arr = [];
// for(i=1; i<=n; i++){
//     arr[i-1] = i;
// }
// window.console.log(arr);

// let sum = arr.reduce(function value(first, second){
//     return first * second; 
// })
// window.console.log(sum);

// let Total = arr.reduce(function all(first, second){
//         return first + second;
// })
// window.console.log(Total);
// let h1 = document.getElementById("main");
// console.dir(h1);
// console.log(h1);
// let mayur = document.querySelectorAll("#main");
// console.dir(mayur);

// let heading = document.querySelector("h2");
// console.dir(heading);

// let heading = document.querySelector("h2");
// heading.innerText = heading.innerText + " From Apna College ";

// divs = document.querySelectorAll(".box");
// divs[0].innerText = "Javascript 1";
// divs[1].innerText = "Javascript 2";
// divs[2].innerText = "Javascript 3";

// let i = 1;
// for (let val of divs){
//     console.log(val);
//     val.innerText = `Javascript ${i}`;
//     i++;
// }

// let hello = document.querySelector("h2");
// console.log(hello.setAttribute("id", "setid"));

// let newbtn = document.createElement("button");
// newbtn.innerText = "Click Me";
// newbtn.style.backgroundColor = "red";
// newbtn.style.color = "white";
// console.log(newbtn);

// let loc = document.querySelector("body");
// loc.prepend(newbtn);

// hello = document.querySelector("div");
// hello.ondblclick = (evt) => {
//     console.log(evt.target);
//     console.log(evt.type);
//     console.log(evt.clientX, evt.clientY);
    
// }

// hello = document.querySelector("button");

// let Mayur = () => {
//     console.log("My Name is Mayur");
// }
// hello.addEventListener("click", Mayur);

// hello.addEventListener("click", () => {
//     console.log("Name Details\nMy Name is Pooja");
// })

// hello.addEventListener("click", () => {
//     console.log("My Name is Chhaya");
// })

// hello.addEventListener("click", () => {
//     console.log("My Name is Raajveer");
// })

// hello.removeEventListener("click", Mayur);
// let hello = document.querySelector("button");
// let loc = document.querySelector("body");
// hello.addEventListener("click", () => {
//         loc.style.backgroundColor = "black";
//         console.log("white");
// })

// if(hello.addEventListener("dblclick", () => {
//            hello.style.backgroundColor = "green";
// }))

// let hello = document.querySelector("button");
// let loc = document.querySelector("body");
// let mode = "light";

// loc.addEventListener("click", () => {
//     if(mode === "light"){
//         mode = "dark";
//         loc.classList.add("myclass");
//     loc.classList.remove("myclass1");
//     } else {
//         mode = "light";
//         loc.classList.add("myclass1");
//         loc.classList.remove("myclass");
//     }
//     console.log(mode);
// })

// let student = {
//     fullName: "Mayur",
//     age: 33,
//     hobby: "cricket",
//     marks:95,
//     mayurmarks () {
//         console.log("marks =", this.marks);
//     }
// }
// console.log(student);

// let students = {
//     caltax() {
//         console.log(`The tax ix ${10}%`);
//     }        
// }
// let pooja = {
//     salary: 50000,
// }

// pooja.__proto__ = students;
// console.log(pooja);
// console.log(pooja.caltax());

// class toyotacar {

//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");
//     }

//     setBrand(brand){
//         this.brandname = brand;
//     }
// }    

// class i20 extends toyotacar {
//     use() {
//         console.log("use");
//     }
// }

// class honda extends i20 {
//     work() {
//         console.log("work");
//     }
// }

// let mayur = new i20();
// let pooja = new honda();

// let str = "javascript";
// let size = 0;

// for(let i of str){
//     console.log("i =", i);
//     size++;
// }

// console.log(size)


// let arr = [1, 2, 3, 4, 5];
// let mayur = [6, 7, 8, 9, 10];
// let pooja = [11, 12, 13, 14];

// console.log(arr.concat(mayur, pooja));

// arr.unshift(7);
// console.log(arr);

// function sum(x,y){
//     return x+y;
// }
// let value = (x,y) => {
// console.log(x+y);
// }
// value(2,5);

// let hello = [8, 2, 3, 4, 5];
// sum = hello.reduce(function value(val, sum){
//     return val % 2 !== 0 ? val : sum; 
// })
// console.log(sum);


// let arr = [250, 645, 300, 900, 50];

// for(let val of arr){
//    value = val/10;
//    finalValue = val - value;
//    console.log(`the final value after applying the offer is ${finalValue}`);
// }

// for(i=0; i<arr.length; i++){
//     let offer = arr[i] / 10;
//     arr[i] = arr[i] - offer;
//     console.log(arr[i]);
// }

// let fullName = prompt("Enter a Full Name");
// console.log("@" + fullName + fullName.length);

// let marks = [60, 70, 80, 90, 95];

// function myfunction (str){
//     let count = 0;
//     for(let val of str){     
//         if(val === "a" || val === "e" || val === "i" || val === "o" || val === "u"){
//             count++;
//         }
//     }  
//     console.log(count);
// }
// myfunction("mayur");

// myfunction = (str) => {
//     let count = 0;
//     for(let val of str){
//         if(val === "a"){
//             count++;
//         } else if(val === "e"){
//             count++;
//         }else if(val === "i"){
//             count++;
//         }else if(val === "o"){
//             count++;
//         }else if(val === "u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// myfunction("aaa");

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let newarr = arr.map(function value(val) {
//     return val;
// });

// let arr = [2, 4, 6, 8, 10];
// arr.forEach((val) => {
//     console.log(val ** 2);
// })

// let newarr = arr.map( (val) => {
//     return val;
// })
// console.log(newarr);

// num = prompt("Enter a Number");
// let arr = [ ];
// for (let i=0; i<=num; i++){
//     arr[i] = i;
// }    
//     sum = arr.reduce( (res , num) => {
//         return res + num
//     })
//     console.log(sum);

// heading = document.querySelector("h2");
// heading.innerText = heading.innerText + " from Apna College ";
// console.log(heading.innerText);

// divs = document.querySelectorAll(".box");
// let i = 1;
// // for(let val of divs){
// //     val.innerText = "JavaScript" + i;
// //     i++;
// // }
// for(i=0; i<divs.length; i++){
//     divs[i].innerText = "Javascript" + (i + 1);
// }

// btn = document.querySelector("button");
// btn.onclick = (evt) => {
//     console.log(evt.type);
// }

// btn = document.querySelector("button");
// body = document.querySelector("body");
// let mode = "light";
// btn.addEventListener("mouseover", (evt) =>{
//     console.log(evt);
//     if(mode === "light"){
//         mode = "dark";
//         body.style.backgroundColor = "black";
//     } else {
//         mode = "light"
//         body.style.backgroundColor = "white";
//     }
//     console.log(mode);
// })

// class student {
//     constructor(name, age, email){
//         this.name = name;
//         this.age = age;
//         this.email = email;
//     }
// }

// let Mayur = new student("Mayur", 33, "msovhal@gmail.com");
// console.log(Mayur);

// let Pooja = new student("Pooja", 28, "psovhal@gmail.com");
// console.log(Pooja);

// let students = {
//     fullName: "Mayur",
//     age: 33,
//     marks: 95,
//     hello: function () {
//         console.log(this.marks);
//     }
// };

// mayur = {
//     salary: 40000,

// };

// mayur.__proto__ = students;

// console.log(mayur);

// class mayur {
//     constructor(){
//         this.species = "species";
//     }
//     start(){
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");
//     }

//     }    

// class pooja extends mayur{
//     constructor(branch) {
//         super();
//         this.branch = branch;
//     }
//     work() {
//         console.log("work");
//     }
// }

// let newobj = new pooja();

// let data = "websitedata";
// class user {
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }

//     viewdata(){
//         console.log(data);
//     }
// }

// class Admin extends user {
//     constructor(name, email){
//         super(name, email);
//     }

//     editdata(){
//         data = "data changed";
//     }

// }

// student = new Admin("mayur", "msovhal@gmail.com");

// admin1 = new Admin("md", "abc.com");

// class person {
//      eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }
// }

// class engineer extends person{
    
//     work(){
//         console.log("solved Problem");
//     }
// }

// let mayur = new engineer();
// console.log(mayur);

// function sum (a, b){
//     console.log(a + b);

// }

// function calculator (a, b, sum){
//     sum(a, b);
// }

// calculator(1, 2, sum);

// function getdata(dataid, dataid1){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(dataid);
//             if(dataid1){
//                 dataid1();
//                         }
//             resolve("success");
//         },2000);
//     })
// }

// async function
// (async function () {
//     await getdata(1);
//     await getdata(2);
//     await getdata(3);
//     await getdata(4);
// })();

// promise chain
// getdata(1, 2).then((res)=>{
//     return getdata(2, 8);
// }).then((res)=>{
//         console.log(res);
// });

// callback hell
// getdata(1, ()=>{
//     getdata(2, ()=>{
//         getdata(3, ()=>{
//             getdata(4);
//         });
//     });
// });

// let url = "https://cat-fact.herokuapp.com/facts";
// let factpara = document.querySelector("p");
// let newbtn = document.createElement("button");
// newbtn.innerText = "Click Me";
// let body = document.querySelector("body");
// body.append(newbtn);

// let getfacts = async () =>{
//     try{
//     let response = await fetch(url);
//     let Data = await response.json();
//     factpara.innerText = Data[2].text;
//     } catch(error) {
//         console.error(error);  
//     }
// };

// async function getfacts(){
//     try{
//         let response = await fetch(url);
//         let Data = await response.json();
//         factpara.innerText = Data[2].text;
//         } catch(error) {
//             console.error(error);  
//         }
//     };

// (async function() {
//     try{
//         let response = await fetch(url);
//         let Data = await response.json();
//         factpara.innerText = Data[2].text;
//         } catch(error) {
//             console.error(error);  
//         }
//     })();

// newdata = addEventListener("click", (async function() {
//     try{
//         let response = await fetch(url);
//         let Data = await response.json();
//         factpara.innerText = Data[2].text;
//         } catch(error) {
//             console.error(error);  
//         }
//     })());

// url = "https://cat-fact.herokuapp.com/facts";
// (async function (){
// let response = await fetch(url);
// console.log(response);
// let Data = await response.json();
// console.log(Data[1]);
// })();

// let url = 'https://jsonplaceholder.typicode.com/posts';
// // newbtn = document.createElement("button");
// newbtn.innerText = "Click Me";
// body = document.querySelector("body");
// body.append(newbtn);

// let data = {
//     userId: 1,
//     title: 'Sample Post',
//     body: 'This is the body of the sample post.'
// };

// let requestOptions = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
// };

// myclcik = addEventListener("click", ()=>{
//     fetch(url, requestOptions)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log('Error:', error));
// })


// Currency Converter Project
// const Base_URL = "https://api.freecurrencyapi.com/v1/currencies";
// const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
// const BASE_URL = "https://open.er-api.com/v6/latest?symbols="
    
// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromcurr = document.querySelector(".from select");
// const tocurr = document.querySelector(".To select");
// const msg = document.querySelector(".msg");


// for(let select of dropdowns){
//     for(let currcode in countryList){
//         let newoption = document.createElement("option");
//         newoption.innerText = currcode;
//         newoption.value = currcode;
//         select.append(newoption);
//     }

//     select.addEventListener("change", (evt) => {
//         updateflag(evt.target);
//     })

//     updateflag = (element) => {
//         let currcode = element.value;
//         let countrycode = countryList[currcode];
//         let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
//         let img = element.parentElement.querySelector("img");
//         img.src = newsrc;
//     }
// }
// let updateExchangerate = async () => {
//      let amount = document.querySelector(".amount input");
//      let amtval = amount.value;
//      const URL = `${BASE_URL}${fromcurr.value},${tocurr.value}.json`;    
//      let response = await fetch(URL);
//      let data = await response.json();
//      let fromRate = data.rates[fromcurr.value]; 
//      let toRate = data.rates[tocurr.value];
//      let exchangeRate = toRate / fromRate;
//      let finalAmount = amtval * exchangeRate;
//      msg.innerText = `${amtval} ${fromcurr.value} = ${finalAmount} ${tocurr.value}`;
// }

// btn.addEventListener("click", (evt) => {
//     evt.preventDefault();
//     updateExchangerate();
// })
// Currency Converter Project

// let userscore = 0;
// let compscore = 0;

// const choice = document.querySelectorAll(".box");
// const myms = document.querySelector("#ms");
// const mycs = document.querySelector("#cs");
// const msg = document.querySelector("#display1");


// const gencompchoice = () => {
//     const option = ["paper" , "rock", "scissors"];
//     const rndidx = Math.floor(Math.random() * 3);
//     return option[rndidx];
// };

// const gamedraw = () => {
//     msg.innerText = "Game Draw... Play Again";
// }

// const showwinner = (userwin, userchoice, compchoice) => {
//     if(userwin){
//         userscore++;
//         myms.innerText = userscore;
//         msg.innerText = `You Win! ${userchoice} beats ${compchoice}`;
//     }else{
//         compscore++;
//         mycs.innerText = compscore;
//         msg.innerText = `You Lost ! ${userchoice} beats ${compchoice}`;
//     }
// };

// const playgame = (userchoice)  => {
//     const compchoice = gencompchoice();
//     if(userchoice === compchoice){
//         gamedraw();
//     } else {
//         let userwin = true;
//         // if(userchoice === "rock" && compchoice === "paper"){
//         //     return false;
//         // } else if(userchoice === "paper" && compchoice === "scissors"){
//         //     return false;
//         // } else if(userchoice === "scissors" && compchoice === "rock"){
//         //     return false;
//         // } return true;
//         if(userchoice === "rock"){
//             userwin = compchoice === "paper"? false : true;
//         } else if(userchoice === "paper"){
//             userwin = compchoice === "scissors"? false : true;
//         } else if(userchoice === "scissors"){
//             userwin = compchoice === "rock"? false : true;
//         }      
//         showwinner(userwin, userchoice, compchoice);      
//         }
//     };

// choice.forEach((box) => {
//     box.addEventListener("click", () => {
//         const userchoice = box.getAttribute("id");
//         playgame(userchoice);
//     });
// });


// Registration Form
// btn = document.querySelector("#subbtn");
// btn.addEventListener("click", (evt) => {
//         evt.preventDefault();

//         const first = document.querySelector("#firstname");
//         const one = first.value;
//         console.log(one);
//         const second = document.querySelector("#lastname");
//         const two = second.value;
//         console.log(two);
//         const mbnum = document.querySelector("#mbnumber");
//         const three = mbnum.value;
//         console.log(three);
//         const Emailid = document.querySelector("#email");
//         const four = Emailid.value;
//         console.log(four);

//         const output = document.querySelector("#text");
//         output.innerText = `First Name:${one}\nLast Name:${two}\nMB Number:${three}\nEmail ID:${four}\nDetails Submitted Sucessfully`;  
//         output.style.backgroundColor = "green";     
//     })
// Registration Form

// str = "Mayur Shankr Ovhal"

// let obj = {};

// for(let x of str){
//     if (obj[x]) {
//         obj[x] = obj[x] + 1 ;
//     } else {
//         obj[x] = 1;
//     }
// }
// console.log(obj);

// const student = {
//     name: "Mayur",
//     age: 34,
//     ispass: true,
// }

// console.log(typeof student["ispass"]);

// function multifunction(a, b){
//     console.log(a * b);
// }
// multifunction(3, 4);

// const mul = (a, b) => {
//     return a * b;
// }

// multiply = mul(3, 4);
// console.log(multiply);

// let str = "Pratik Bhalerao";
// count = 0;
// function countVowels(str){
//     for(i=0; i<str.length; i++){
//     if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
//         count++; 
//     }
// }
// return count;
// }
// console.log(countVowels(str));

// let totalCount = (str) => {
//     for(i=0; i<str.length; i++){
//     if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
//         count++; 
//     }
// }
// return count;
// }
// totalCount(str);

// arr = [1, 2, 3, 4, 5, 6, 7, 8];

// arr.forEach(function square(val){
//     return val * val;
// })

// let marks = [89, 88, 90, 91, 92, 93, 94, 95, 78];

// let studentScore = marks.filter((val) => {
//     return val > 90;
//     }
// )
// console.log(studentScore);


// button.addEventListener("click", (evt) => {
//     console.log("button clicked1");
// })

// button.addEventListener("click", (evt) => {
//     console.log("button clicked2");
// })

// handler3 = (evt) => {
//     console.log("button clicked3");
// }

// button.addEventListener("click", handler3)

// button.addEventListener("click", (evt) => {
//     console.log("button clicked4");
// })

// button.removeEventListener("click", handler3);

// WebsiteData = "Apna College";
// class user {
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }

//     viewdata(){
//         console.log(WebsiteData);
//     }
   
//     }

// class Admin extends user {
//     constructor(name, email){
//     super(name, email);
//     }

//     editdata(){
//         WebsiteData = "some new value"
//     }
// }

// let admin = new Admin("mayur", "msovhal@gmail.com");

//  getdata = (dataid) => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("clicked");
//         reject("error");
//        }, 2000);

//         })     
// }

// console.log("getting data1");
// getdata(1)
// .then((res) => {
//     console.log("getting data2");
//     return getdata(2);
// }) .then((res) => {
//     console.log("getting data3");
//     return getdata(3);
// }) .then((res) => {
//     console.log("getting data4");
//     console.log(res);
// })

// const firstname = document.querySelector("#input");
// const lastname = document.querySelector("#input1");
// const EmailId = document.querySelector("#input2");
// const MBNumber = document.querySelector("#input3");
// const Qualification = document.querySelector("#input4");
// const btn = document.querySelector("button");
// const para = document.querySelector("p");

// btn.addEventListener("click", (evt) => {
//     evt.preventDefault();
//     const one = firstname.value;
//     const two = lastname.value;
//     const three = EmailId.value;
//     const four = MBNumber.value;
//     const five = Qualification.value;
//     para.innerText = `${one}\n${two}\n${three}\n${four}\n${five}`;
//     para.style.backgroundColor = "green";
// })









