
console.log(a); // undefined //le and const vauables also not hoisted
var a = 10;


console.log(isNaN("20")) // false
console.log(isNaN("20a")) // true

console.log(add1(1, 2))

function add1(a, b) {
  return a + b
}

// add2(1, 2) // throw refrence error so sommented

const add2 = function (a, b) {
  return a + b
}

let obj1 = {
  name: "nizam",
  getName: () => {
    return this.name; // returen undefined
  }
}

let obj2 = {
  name: "nizam",
  getName: function () {
    return this.name;
  }
}

console.log(obj1.getName())
console.log(obj2.getName())


const getName1 = () => {
  //  console.log(arguments) 
};
getName1("Nizam")

function getName2() {
  console.log(arguments)
}
getName2("Nizam");


const Treat1 = () => {
  return "Hello Arrow"
}

// const t1 = new Treat1();  throw error Treat1 is not a constructor

function Treat2(name) {
  this.name = name;
}

const t2 = new Treat2("Nizam");
console.log(t2.name)


function A1() { }
A1.prototype.test = () => { };

console.log(A1)

const A2 = () => { };
A2.prototype; // undefined

console.log(A2)


const test1 = () => {
  console.log(this.name);
}

let testObj = {
  name: "nizam"
}

test1.call(testObj)

// lexical scope with arrow
function outer() {
  this.name = 'JS';

  const arrow = () => {
    console.log(this.name);
  };

  arrow();
}

console.log(outer());

{
  let x = 5;
  function foo() {
    console.log(x);
  }
  function bar() {
    let x = 10;
    foo()
  }
  bar()  // output will be 5 first iw ill check function scope if it is not there then global scope
}

// this below one is closure

function outer() {
  let x = 10;

  return function () {
    console.log(x);
  }

}
const fn = outer()
fn()


function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  }
}

const innerCounter = counter();

innerCounter();
console.log(innerCounter()); // 2  inner function remember parent varible values called closure


function outer1() {
  let x = 10;

  return function () {
    console.log(x);
  }

}

let fn1 = outer1();
fn1 = null; // now garbage collector free memmory


// IIFE
(function () {
  // everyting here is private
  var a = 10;
  console.log(a + 20);
})()

// currying convert multiple arguments into mutiple function calls

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}

console.log(add(10)(20)(30))


// optimized way

function add1(a) {
  return function (b) {
    if (!b) return a;
    return add1(a + b)
  }
}
console.log(add1(10)(20)(30)()) // In this at end we need () because this function return function that needs to be called


// function overloading
function greet(name) {
  console.log(`Hello ${name}`);
}

function greet(name, age) {
  console.log(`Hello ${name}, age ${age}`);
}

greet("Nizam"); // Hello Nizam, age undefined
