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

let sum1 = 0;
let numberr = parseInt(prompt('enter a number'));

while(numberr>=0){
sum = sum + number;
number = parseInt(prompt('enter a number'));
}
console.log(sum1);





