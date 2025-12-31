
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


// prototype with constructor function

const arr = new Array();

console.log("prototype", Array.prototype);


// __proto__ with object

console.log("__proto__", arr.__proto__);

console.log(arr.__proto__ === Array.prototype);


function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  return this.name;
}

const p = new Person("Nizam");

console.log(p) // normal object propoties
console.log(p.__proto__) // prototype prpoties

// prototypel inheritance

const p1 = Object.create(p);

console.log(p1) // their own propeties
console.log(p1.__proto__) // p object propeties
console.log(p1.__proto__.__proto__) // p.__proto__  propeties // this we call it as prototype chaining


// prototype chaining

console.log(p1.__proto__.__proto__.__proto__)  // own propoties -> p properties -> p.__proto__ properties -> p1.__proto__.__proto__.__proto__ object properties -> p1.__proto__.__proto__.__proto__.__proto__ -> null

// Object.freeze and Object.seal

const objectFreeze = {
  name: "nizam"
}

Object.freeze(objectFreeze);

// nothing work
objectFreeze.a = 10;
objectFreeze.name = "rahul";
delete objectFreeze.name;

console.log("objectFreeze", objectFreeze)

const objectSeal = {
  name: "nizam"
}

Object.seal(objectSeal);

// modify value work work
objectSeal.a = 10;
objectSeal.name = "rahul";
delete objectSeal.name;

console.log("objectSeal", objectSeal)

// shallow and deep copy
const a1 = {
  name: "nizam",
}
const b = { ...a1 }
const c = Object.assign({}, a1);

// for arrays
let array = [1, 2, 3, 4];

const array1 = [...array];
const array2 = array.slice();

// deep copy

function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;

  const copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    copy[key] = deepClone(obj[key]);
  }
  return copy;
}


// property descriptor, according to below config not able to update value , type

const obj3 = {};

Object.defineProperty(obj3, 'a', {
  value: 10,
  writable: false,
  enumerable: false,
  configurable: false
});


console.log(obj3.a)

// getter setter

const user = {
  firstName: "Nizam",
  lastName: "Ahmed",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    const [first, last] = name.split(" ");
    this.firstName = first;
    this.lastName = last;
  }
};

console.log(user.fullName);       // getter → "Nizam Ahmed"
user.fullName = "John Doe";       // setter
console.log(user.firstName);      // John


// this keyword

console.log(this) // without strict mode , with strcit undefined

const obje4 = {
  name: "nizam",
  getName() {
    return this.name
  }
}


console.log(obje4.getName())

// this with call, bind, apply

function sayHello(...age) {
  console.log("Hello ", this.name, age[0])
}

// 1. call

sayHello.call(obje4, "27")


// 2. apply

sayHello.apply(obje4, ["27"])

// 3. bind


const sayHellobind = sayHello.bind(obje4, "27")
sayHellobind()





