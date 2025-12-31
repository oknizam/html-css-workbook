1. Hoisting means declartion will be moved to top by default
  console.log(a); // undefined
  var a = 10;
  let and const will not be hoisted it will throght an refrence error saying a is not defined

2. what is null and undefined
   both are no value data types
   1. By default if varbale does not have anything varibale value will be undefined or u returing something from function which doiesn't has any value it will say undefined
   2. Null we have to manually assign saying this vriable has null value

   mostly we use null for object, because we can't define {} empty object default value

3. type corecion
  type corecion mening "" == 0 undefined becomes typecasted to boolean and return true
  Example: "" == 0, 20+"Abc" so here 20 will be typecasted to string output will be "20Abc"

4. Falsy values return false
  1. 0,
  2. -0
  3. undefined
  4. null
  5. Nan
  6. false

5. Nan is not a number we will check this by  isNaN() function

  example: isNaN("20") // false because type casted to number
  isNaN("20a") // true  now type casted to string 

6. function declaration and function expression

  1. function declaration
  function add(a,b){
    return a+b
  }
  Hoisted

  2. function expression
  const add = function (a,b){
    return a+b
  }
  not hoisted

7. Arrow function and diffrence from normal function
  1. arrow functions are es6 feature, it has simple syntax, we can write fiunction in single line
  2. It doesn't have own this keyword  , takes this from surrounding scope (lexical bound)
     let obj = {
      name:"nizam",
      getName: () =>{
        return this.name; // returen undefined
      }
     }

  normal function  // this is dynamic
    let obj2 = {
      name:"nizam",
      getName: function(){
        return this.name;
      }
     }

  3. It doesn't have arguments like normal function

    const getName1 = () => {console.log(this.arguments)};
    getName1("Nizam") /undefined

    normal function

    function getNam2(){
      console.log(this.arguments)
    }
    getName2("Nizam") 

  4. because of arrow function doesn't have this access so prefer normal function when we are attaching to event listners

  5. new Keyword is not supported means we can' create constructor fiunction from arrow

    const Treat1 = () => {
        return "Hello Arrow"
    }

    const t1 = new Treat1(); // not allowed

    function Treat2 ()  {
        return "Hello Arrow"
    }

 const t2 = new Treat2(); // not allowed

  6. use for callbacks
  7. Hoisting is not supported
  8. prototype is not supported

    function A() {}
    A.prototype.test = () => {};

    const A = () => {};
    A.prototype; // undefined

  9. We can't bind arrow functions

      const test1 =  () => {
        console.log(this.name);
      }

      let testObj = {
        name : "nizam"
      }

      test1.call(testObj) //undefined
8. Lexical scope meaning 

      {
          let x =5;

          function foo(){
            console.log(x);
          }

          function bar(){
            let x =10;
            foo()
          }
          bar()  // output will be 5 first iw ill check function scope if it is not there then global scope
      }
      Types of scope
      1. Global scope
      2. Function scope
      3. block scope which is using let and const

9. Closure 
  There is function inside another function , inside function trying to access variable of parent function
  after parent function get executed the value still remain in that scope for that we call it as closure
  meaning inner function remember the value of parent variables

  function counter(){
    let count = 0;

    return function(){
      count++;
    }
  }

  const innerCounter = counter();

  innerCounter();
  innerCounter();

10. scope chain
   local scope -> parent scope (function scope) -> global scope

11. Diffrence between scope chain and lexical scope 

  1. lexical scope is tell where variables are avialble
  2. scope chain defines how js finds those variables


12. Memory leak and garbage collector

    closure will not cause memory leak default, if refrence is not removed
     function outer(){
      let x =10;

      return function (){
        console.log(x);
      }

     }

  const fn1 = outer();
  fn1 = null // now garbage collector free memmory

13. What happens if you access a variable before declaration?
    1. with let and const refrence error
    2. with var default assigned to undefined

14. IIFE (Immedietely invoked function)
    (function(){
        // everyting here is private
    })()

    if we write logic whic we return inside IIFE is public accessable to make it private we use IIFE


15. Currying 
    with multiple arguments we create multiple function

    example:  add(10)(20)(30)

    function add(a){
      return function (b){
          return function (c){
            return a+b+c;
          }
      }
    }

    we can optimize

     function add(a){
      return function (b){
          if(!b) return a;
          return add(a+b)
      }
    }

16. Function overloading
    functions with same name but diffrent parameters

  function greet(name) {
    console.log(`Hello ${name}`);
  }

  function greet(name, age) {
    console.log(`Hello ${name}, age ${age}`);
  }

  greet("Nizam"); // Hello Nizam, age undefined

17. default parameters

  function greet(name="someone") {
    console.log(`Hello ${name}`);
  }

18. Prototype chain 
  In other laungauges, inheritance like getting propoties and methods of other classes by extending them.

  but in js, objects inherits methods and propoties of other objects directly using prototype chain

  Javascript is object based and inheritance is achived using prototype

  Two types of prototypal inheritance
  ------------------------------------
  1. Prototype -> which is used with contructor function to achive inheritance
  2. __proto__ -> which is used to achive inheritence of objects 

  const arr = new Array();
  here arr is an instnace of Array

  arr.__proto__ === Array.prototype; // true

  Custom example: 

  function Person (name) {
    this.name = name;
  }

  Person.prototype.sayHi = function(){
    return this.name;
  }

  const p = new Person("Nizam");
  p.__proto__ === Person.prototype; // true

  <!-- inheritance -->

  const p1 = Object.create(p);

  p1.__proto__ // has its own propoties
  p1.__proto__.__proto__ // has methods and propoties of p


19. Prototype 

    It is used with constructor function to create prototypes which can use by their instances

    default example: const arr = new Array();

    console.log(Array.prototype)  // you will get all methods and propoties of Array constrcutor function

20. __proto__ 

    This is similar to if we create an instance from constructor function like above

     const arr = new Array();

     arr.__proto__ === Array.Prototype;

21. Object.create 

    This will create new object and add propoties of another object from it is created in ints __proto__
    those propoties can also be accessed by this object 

      const p1 = Object.create(p);

      p1.__proto__ // has its own propoties
      p1.__proto__.__proto__ // has methods and propoties of p

22. Prototype Chian

    const arr = new Array();

    arr.__proto__.__proto__.__proto__

         arr
    ↓ __proto__
    Array.prototype
    ↓ __proto__
    Object.prototype
    ↓ __proto__
    null

23. Object.freeze and Object.seal

    1. Object.freeze 
      1. Cannot add new propoties
      2. cannot delete propoties
      3. cannot modify values

    2. Object.seal
      1. Cannot add new propoties
      2. cannot delete propoties
      3. modify values


24. shallow copy and deep copy

    Shallow Copy
    -------------
    1. spread operator
    2. Object.assign({},obj)
    3. Arrays with spread and arr.slice()


    Deep copy
    -----------
    1. custom function
    2. JSON.parse(JSON.stringify(obj))  
       this will loose  undefined, function, map ,sets, date instance, more memory usage, block main thread, 


25. property descriptor

how property in object behaves

const obj = {};

Object.defineProperty(obj, 'a', {
  value: 10,
  writable: false,
  enumerable: false,
  configurable: false
});


26. this keyword
  
  Globally if strict mode is not enabled this means window Object all js features
  like fetch,location

  if  we tring to access within object 
  let obj = {
    name: "nizam",
    getName(){
      return this.name
    }
  }
  here this belongs to object

27. call, bind , apply methods , this here also how it works

    1. call method
    call function with explicitly setting this = passing object and also additional parameters with comma seperated

    function sayHello(age){
        console.log(this.name,age)  // if u call this function it will return undefined
    }

    let obj ={
      name:"nizam"
    }
    but with call

    sayHello.call(obj,27)

    2. apply 
    same as call but arguments are passed in array

     function sayHello(...arr){
        console.log(this.name,arr[0])  // if u call this function it will return undefined
    }

    let obj ={
      name:"nizam"
    }
    but with call

    sayHello.apply(obj,["27"])


     2. bind method
    bind similar to call just return new function with explicitly setting this = passing object and also additional parameters with comma seperated

    function sayHello(age){
        console.log(this.name,age)  // if u call this function it will return undefined
    }

    let obj ={
      name:"nizam"
    }
    but with call

    const sayHi = sayHello.bind(obj,27)
      
    
    

