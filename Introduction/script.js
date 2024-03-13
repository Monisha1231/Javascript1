  // this is alert message
  console.log('hello'); // its not come in console 
  // alert('hi');

  // Variables
  let score = 0; // intialization
  score = 10; // assignment
  console.log("score is"+ 10 ); //o/p 10

  let amount = 1000;
  console.log("your bill amount Rs " + amount); // your bill amount Rs 1000

  score = 'no score'; // dynamically typed language

  const pi = 3.14; // cosnst is not change
 // pi = 4.0;  it show in error

  var a = 10; 
  console.log("a is" + a); // 10

  /*  
    Operators

    Arithmetic Operators : +,-,*,/,%,++,--
    Assignment OIperators :=,+=,-=,*=,/=,%=,**=
    Comparison Operators : ==, ===, !=, !==, <, >, <=, >=, ?:
    Logical Operators : && , ||, !
    Bitwise Operators : & | ~ ^ << >> >>>

   */

    // user input

    // let name = prompt("what is your name")
    // console.log('hi', name) // hi Monisha

    // let tickets = prompt("how many tickets do you want")
    // console.log("you should pay",Number(tickets)*20)  // you should pay 60

    // let number = prompt("enter a number")
    // console.log(a+10)  // its not a proper way 

    // let number1 = prompt("enter a number")
    // console.log("The ans",Number(number1)+10)

// String - group of characters

let s1 = "hi"
let s2 = "hello"
let s3 = s1+s2
console.log(s3)

//Math Functions

// Array

let h = [1,2,3,4,5];
console.log(h.length);


// control flow statement
// 1. if else statement

// 1.if statement

let n = 10;

if(n>20){
  console.log("n is greater than 20");
}
console.log("n is less than 20");  // o/p n is less than 20

// 2. if else statement

let num1 = 10;
let num2 = 20;
if(num1 > num2){
  console.log("num1 is greaterthan num2");
}
else{
  console.log("num1 is less than num2"); // num 1 is less than num 2
}

// 3. if else if statement

let number = 10;
if(number < 5){
  console.log("the number is greater than 5");
}
else if(number==10){
  console.log("the number is 10"); // o/p the number is 10
}
else{
  console.log("this is else block");  //
}

// 4.Nested if else statement

let val = 20;
if(val >= 10){
   if(val==20){
    console.log("the value is equal"); // the value is equal
   }
   else{
    console.log("the value is unequal");
   }
}
else{
  console.log("you entered the number 20");
}

// 5.Ternary operator
// instead of if else

let age = 15;

if(age <= 18){
  console.log("you are eligible for vote");
}
else{
  console.log("you are not eligible for vote");
}

// using ? ternary operator

let age1 = 15;
let result = (age1 >= 18) ? "you are eligible to vote" : "you are not eligible to vote";
console.log(result);

// for loop

const nums = 10;

for(let i=1; i<=10; i++){ // o/p 1 top 10
  console.log(i);
}


const n1 = 5;

for(let i = 1; i<=n1; i++){
  console.log('javascript is a dynamically typed language');
}

//to find sum of natural numbers

let sum = 0;
const c = 5;

for(let i = 1; i<=c; i++){
  sum = sum + i;
}
console.log(sum); // o/p 15

// infinite loop

 for(let i = 1; i<0; i++){ // i>0
      console.log(i);
 }
 
 //while loop
 let i = 1; 
 let j = 5;

 while(i>=j){
    console.log(i);
    i++;
 }

// sum of positive numbers

// let sum1 = 0;
// let numberr = parseInt(prompt('enter a number'));

// while(numberr>=0){
// sum = sum + number;
// number = parseInt(prompt('enter a number'));
// }
// console.log(sum1);


// braek statement using while loop

// let summ = 0;
// number;

// while(true){
//   number = parseInt(prompt('Enter a number'));
//   if(number<0){
//     break;
//   }
//   summ = summ + number;
// }
// console.log('the sum is' + summ); // give negative number loop is terminated

// break with nested loop

for(let i = 1; i<=5; i++){
  for(let j =1; j<=5; j++){
    if(i==3){
      break;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

// continue with for loop

for(let i = 1; i<=5; i++){
  if(i==3){
    continue;
    
  }
  console.log(i); // o/p : 1 2 4 5
}

// continue with nested for loop

for(let i = 1; i<=3; i++){
  for(let j = 1; j<=3; j++){
    if(i==2){
      continue;
    }
    console.log(`i = ${i} , j = ${j}`)
  }
}

// switch statement

let l = 3;
switch(l){
  case 1:
    l = 'one';
    break;
  case 2:
    l = 'two';
    break;
  case 3:
    l = 'three';
    break;
  case 4:
    l = 'four';
    break;
  case 5:
    l = 'five';
    break;
  default:
    l = 'not found';
    break;
    
}
console.log(`the value is ${l}`); // the value of l is three

// type checking switch statement

let s = 2;
switch(s){
  case 1:
    s = 'one';
    break;
  case "2":
    s = 2;
    break;
  case 2:
    s = 'two';
    break;
  default:
    s = 'not found';
    break;
}
console.log(`the value of s is ${s}`); // the value of s is two

// function and function expressions

function greet(){
  console.log('hello');
}
greet(); // function call  // hello

// function with parameters

// function greet(name){
//   console.log("hi");
// }
// let d = prompt("enter a name");
// greet(name);  // hi

// function with different arguments

function add(a,b){
  console.log(a + b);
}
add(3,3);  // 6
add(5,5);  // 10

// function return

// function add(a,b){
//   return (a + b);
// }
// // take input from user using prompt
//  let number1 = parseFloat(prompt('Enter a first number')); // 2.2
//  let number2 = parseFloat(prompt('Enter a second number')); // 2.2

//  let result1 = add(number1,number2);
//  console.log('the sum is' + result1); // the sum is 4.4
 
// default parameters

function sum2(x=3, y=5){
  return x+y;
}
console.log(sum2(x=5, y=15)); // 20
console.log(sum2(7)); // 12
console.log(sum2);  // 8

// variables and functions

let m = "hello";  // introduce global scope
function greet(){
  console.log(a);
}
greet(); // function call

// local scope

var f = "hi";
function greet(){
  let g = "hello";
  console.log(f + g);  // hihello
}
greet();
//console.log(f + g);  // g is not defined

// let block scoped variable

// let x = 'hi';
// function myFunction(){
//   let y = 'hello';
//   console.log(x + ' ' + y);

//   if(y=='hello'){
//    let z = 'monisha';
//    console.log(x + ' ' + y + ' ' + ' '+ z);

//   }
//   console.log(x + ' ' + y + ' ' + ' ' + z); // uncught reference error  // o/p is not come
  
// }
// myFunction();

//  Recursive function

function count(number){
    console.log(number);
    const con = number -1;
    if(con > 0){
      count(con);
    }
}
count(4);

// javascript objects
 
// object creation

const person = {
  name : 'john',
  age : 20
};
console.log(typeof person);  // object

// object properties

// 1dot(.) notation

const student = {
  name : 'john',
  age : 20
};
console.log(student.name) // john

// 2.using bracket[] notation

const member = {
  name : 'peter',
  age : 20
};
console.log(member['name']); // peter using single or double quotes

// nested objects

const student1 = {
  name : 'john',
  age : 20,

  marks: {
    tamil : 80,
    english : 80
  }
}
console.log(student1.marks); // {tamil : 80, english : 80}
console.log(student1.marks.english); // get particuler property 80

// javascript methods

const person1 = {
  name : 'peter',
  greet : function(){
    console.log('hello');
  }
}
person1.greet(); // hello
person1.name;

// accessing property and method

const members = {
  name : 'peterson',
  greet : function(){
    console.log('hello javascript');
  }
};
const memname=members.name;
console.log(memname);
members.greet();  // hello javacsript

// using this keyword

const person2 = {
  name : 'john',
  age : 20,
  greet : function(){
    console.log('the name is'+ ' ' + this.name);
  }
};
person2.greet(); // the name is john


const person3 = {
  name : 'john',
  age : 20,
  greet(){
    let lastName = 'doe';
    console.log('the person name is'+ ' '+ this.name + ' ' + lastName);
  } 
};
person3.greet(); // the person name is john doe

// javascript constructor function

function Person(){
  this.name = 'john',
  this.age = 20
}
const p = new Person();

//
 
function Student(){
  this.name = 'Monica',
  this.age = 20,
  this.greet = function(){
    console.log('hello Monica');  
  }
}

const stu = new Student();
console.log(stu.name); // Monica
console.log(stu.age); // 20
console.log(stu.greet); // hello Monica

// constructor with function parameters

function Member(name,age,gender){  // 
  this.name = name,
  this.age = age,
  this.gender = gender,

  this.greet = function(){
    return ('hi' + ' ' + this.name);  
  }
}

const mem = new Member('John',20,'male');
console.log(mem.name);
console.log(mem.age);
console.log(mem.greet);


//
function findProduct(a,b){
  return a*b;
}
console.log(findProduct(4,5)); // 20 its a normal function



// object prototype

function Student1(){
  this.name = 'john',
  this.age = 20
}

let st = new Student1();

Student1.prototype.gender = 'Male'; // you can add properties in constructor function using prototype

console.log(st.name);
console.log(st.age);
console.log(st.gender);

// javascript array and array methods

let marks = [86,98,85,90,95];
console.log(marks.length); // 5
console.log(marks[marks.length-1]); // 95

let cities = ["chennai", "salem","madurai","trichy","kanchipuram"];
console.log(cities[0]); // chennai
console.log(cities[5]); // undefined

// mix of int and string

let arr = [1,2,3,'a','b',"abc"];
console.log(arr); //   [1,2,3,'a','b',"abc"]

let arr1 = [1,2,3,'a','b',"abc",[5,6]];
console.log(arr1);

console.log(arr1[6]); // [5,6]
console.log(arr1[6][0]); // 5 
console.log(arr1[6][1]); // 6

// 2 dimensional array

let array = [[3,4,5],[1,2,3],[6,7,8]];
console.log(array[0]); // 3,4,5
console.log(array[0][1]); // 4
console.log(array[2][1]); // 7

// array methods

let ar = ['a','b','c','d','e'];
console.log(ar);
console.log(ar.length); // 5

// push - add element to the end  and retruns new length
ar.push('f');
console.log(ar); // a,b,c,d,e,f - length 6

// pop - remove element from the end and return removed value

console.log(ar.pop()); 
console.log(ar); // a,b,c,d,e

// shift - remove first element from the array
// returns removed value

console.log(ar.shift()); 
console.log(ar); // b,c,d,e

// unshift - add element from the first in array

console.log(ar.unshift('a'));
console.log(ar.unshift('f'));
console.log(ar); // ['f', 'a', 'b', 'c', 'd', 'e']

// splice - to delete particular element from the array

// splice
//1 st parameter - starting index
//2 nd parameter -no of elements to be deleted from starting index
//3rd(or more) parameter 

console.log(ar.splice(2,1)); 
console.log(ar); // ) ['f', 'a', 'c', 'd', 'e']

console.log(ar.splice(1,2,'m','n'));
console.log(ar); //  ['f', 'm', 'n', 'd', 'e']

ar.splice(1,0,'h');  // to replcae the value 
console.log(ar); //  ['f', 'h', 'm', 'n', 'd', 'e']

// slice(starting index, ending index)  // to get particular value

console.log(ar.slice(1,4)); //  ['h', 'm', 'n']
console.log(ar.slice(0,4)); //  ['f', 'h', 'm', 'n']

//reverse

ar.reverse()
console.log(ar); //  ['e', 'd', 'n', 'm', 'h', 'f']

// join - converts array to string 

let str = ar.join()
console.log(str); // e,d,n,m,h,f

// split - converts string to array

let str1 = "a,b,c,d,e";
let arr2 = str1.split(',');
console.log(arr2); // (5) ['a', 'b', 'c', 'd', 'e']

// concat and spread operator(...)

let firstArr = [1,2,3];
let secArr = [4,5,6];

let joinedArr = [firstArr,secArr]
console.log(joinedArr);  // (2) [Array(3), Array(3)]

joinedArr = firstArr.concat(secArr);
console.log(joinedArr);  // (6) [1, 2, 3, 4, 5, 6]

let joined = [...firstArr,...secArr]
console.log(joined); //(6) [1, 2, 3, 4, 5, 6]

// indexOf - it return a index position 
let arr3 = ["html","css","java","javascript","mysql"];
let index = arr3.indexOf("javascript");
console.log(index); // 3
  

// springboot is not place in the array so it will return -1
let index1 = arr3.indexOf("springboot");
console.log(index1);  // -1

// sort - sort the array element

let city = ["madurai", "chennai", "salem", "trichy", "tanjavur"];
let sortedArray = city.sort();
console.log(sortedArray);    

//includes() - if it is check the array contains or not

let check = sortedArray.includes("salem");
console.log(sortedArray); 

// Exception handling

// num = prompt("enter a number");
// console.log(num**2);

// try{
//   num = prompt("enter a number");
//   // if(num===''){
//   //   throw "cannot be empty";
//   // }
//   if(isNaN(num)){
//     throw "enter a valid number";
//     console.log(num**2);
//   }
// }
// catch(error){
//   console.log(error);
// }
// finally{
//   console.log('bye');
// }



// Hoisting function

console.log(findProductt(5*10)); // hoisting function

function findProductt(a,b){
  return a*b;
}

console.log(typeof findProductt); // 

// recursion - function call itself

function factorial(n){
  if(n==1){
    return 1;
    return n*factorial(n-1);
  }
}
console.log(factorial(5));

// function expression
// assihned to a variable as object

let num = 100;
let isEven = function(num){
  return num%2==0;
}
console.log(isEven(5)); // false
console.log(isEven(2)); // true

// arrow function
let volume = (l,b,h) => {
  return l*b*h
}
console.log(volume(7,8,9)); // 504

// callback function - function passed an argument

// function greetConsole(name){
//   console.log('hello',name);
// }
// function greetHeading(name){
//   const heading = document.querySelector('h1');
//   heading.innerHTML= 'hello' + name

// }
// function greet(callback){
//   callback();
// }
// function callMe(){
//   console.log("call me");
// }
// greet(callMe);
// greet(greetHeading);
// function
// function greet(name, callback) {
//   console.log('Hi' + ' ' + name);
//   callback();
// }

// // callback function
// function callMe() {
//   console.log('I am callback function');
// }

// // passing function as an argument
// greet('Peter', callMe);