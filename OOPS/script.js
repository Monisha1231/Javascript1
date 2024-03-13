// one way of import
// import Car from './car.js'
// let car = new Car() // object creation for car class
// car.drive();  // driving

// 
import C,{fillGas,repair} from './car.js'
let car = new C();
car.drive();
fillGas();
repair();


// // oops - object oriented programming 
// // object 

// let user = {
//   name : 'john',
//   age : 22,
//   login(){
//     console.log("you are logged in");
//   },
//   logout(){
//     console.log("you are logged out");
//   }
// }

// let user1 = {
//   name : 'Doe',
//   age : 23,
//   login(){
//     console.log("hi", this.name);
//     console.log("you are logged in");
//   },
//   logout(){
//     console.log("you are logged out");
//   }
// }

// let user2 = {
//   name : 'peter',
//   age : 21,
//   login(){
//     console.log("hi", this.name);
//     console.log("you are logged in");
//   },
//   logout(){
//     console.log("you are logged out");
//   }
// }
// user1.login(); // hi doe you are logged in 
// user2.login(); // hi peter you are logged in

// // class - is a template of a properties and methods
// // static - common variables / methods for class 
// //         - accessed with className
// // ES6

// class User{  // base class , parent class , super class
//    static numberOfUsers = 0;  // static variable
//   constructor(name,age){
//     // instance variable
//           this.name = name;
//           this.age = age;
//           User.numberOfUsers++;
//   }
//   login(){
//     console.log("hi", this.name);
//     console.log("you are logged in");
//   }
//   logout(){
//     console.log("you are logged out");
//   }
//   // static method
//  static displayTotalUsers(){
//   console.log("total number of users" + User.numberOfUsers++);
//  }
// }
// let userOne = new User("vithya",21);
// let userTwo = new User("Raj",22);
// let userThree = new User("john",23);
// // console.log('number of users', User.numberOfUsers); // number of users 2 // 3
// User.displayTotalUsers(); // className.methodName // number of users 3

// // inheritance
// // derived class, child class , sub class
// class PaidUser extends User{
//       constructor(name,age){
//       super(name,age);
//       this.storage = 100;
//       }
//       message(){
//         console.log("you have 100 gb free storage"); // you have 100 gb free storage
//       }
//       // overriding
//       login(){
//         console.log("thank you for your support");
//         return this; // current object
//       }
// }

// let paidUser1 = new PaidUser("Dhana",23);
// paidUser1.login();  // you have 100 gb free storage
// paidUser1.message(); //thank you for your support

// // method chaining
// paidUser1.login().message(); // thank you for your support you have 100 gb free storage


// // function
// function User1(name,age){
//        this.name = name;
//        this.age = age;
// }
// User.prototype.login = function(){
//   console.log("hi",this.name) // hi Maha
//   console.log("you are logged in"); // you are logged in
// }

// let user3 = new User("Maha",23);
// user3.login();

// // get and set

// class Temperature{
//   constructor(temp){
//     this._temp = temp; // _ mentioned private variable
    
//   }
//   get temp(){ 
//     return `${this._temp} deg celcius`;  
//   }
//   set temp(temp){
//     if(temp>100){
//       temp = 100;
//       this._temp = temp;
//     }
//   }
// }

// let temp1  = new Temperature(25); // object creation
// console.log(temp1.temp);