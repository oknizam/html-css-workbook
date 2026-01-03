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
      

28. map, filter and reducer

  1. These three functions are hidger order functions
  2. Higher order functions are function whcih takes another function as argument or return another function
  3. map -> used to update array items and return new array with updated data
  4. filter -> return filtered array based on condition  
  5. reducer -> return single value performing calculation stroring it in single variable which we call it as accumulator

29. when to use reducer

  1. sum of array numbers
  2. array into objects
  3. grouping
  4. flatten

30. forEach and map

  we know foreach just to iterate an array and map will return new array 

31. Array destructuring

32. Diffrence between splice and slice

slice -> create new array with index value, old remain same, used to create array shallow copy
splice -> create new array but old array also get modified, replace we will use splice 3 index

33. Remove duplicates from array

34. flatten array

35. immutability

  once value is created , it can't be changed how can we do that

  let arr = [1,2];
  arr.push(3) // mutable wrong

  const newArr = [...arr, 3] // immutable


36. Use Timsort (hybrid of merge + insertion sort) -> sort()

[10, 2, 1].sort();  // char sort work
// ["1", "10", "2"] → [1, 10, 2]

[10, 2, 1].sort((a, b) => a - b); // numeric sort

37. synchornous and asynchronous

  task1
  task2

  synchronous -> means main thread will wait for task1 to get completed then task2 will start execution

  asynchronous -> if we make task 1 async task2 will not wait for task1 to get completed , because task1 is running in background js which handled by webapis


38. WebApis 

    1. for timers -> browser timer api
    2. fetch -> network stack handle http request , on getting response it will send it to eventloop

39. Eventloop

    1. callstack
    2. Microtask queue (process.nextTick queue/ promise queue) 
    3. Macrotask queue (timers, I/O) -> (timer queue, IO queue, check queue, close queue)
    4. webapis (newtork request, timers, I/O)


40. Microtask queue and Macrotask queue

  1. Microtask queue -> eventloop takes this queue tasks priority over Macrotask queue, this queue involves
  process.nextTick queue & promise queue -> , where api calls, callback of process.nextTick
  2. Macrotask queue -> This queue involves I/O queue, timer queue, check queue (setImmediate), close queue (close handlers, sockets close etc)

41. Promises 
  promises are used to handle async operations which will run in bacground without bloacking main thread as callback, theay also resolve callback hell

  they have three states
  1. Pending
  2. fulfilled
  3. rejected

42. Promise chaining

  Promise chaining involves linking mutiple .then() calls , o/p of one async operation i/p to other

43. Difference between async/await and Promises

  promises we know it will uses .then() , .catch() chaining but in async/await code structure looks like  synchronous but asynchronous

  1. asyn/await
  awaited function should be async

  function getData(){
    console.log("Hello")
    return Promise.resolve(1);
  }
  
  async function main(){
       try
  {
   const res = await getData(); 
    console.log(res)
   console.log("hello1")
  }
  catch(err){
    console.log(err);
  }
  }
  
  main()

44. What happens if a Promise is not awaited?

  1. Promise will be ignored
  2. error will not be handled

45. Promise.all, allSettled, race, any 

    1. Promise.all -> it will return array of response if all promises fulfilled, if one of promise get rejected throw error will go to  catch block

    2. Promise.allSettled -> return all promises results in array of objects with response include status, fullfilled, rejected 

    3. Promise.race -> return promise response which get resolved or rejected first 

    4. Promise.any -> return promise which get resolved first , if not return all promises rejcected  

46. callback hell and how we can avoide it

  callback hell means we have function which callback , that callback has another call back and soon

  we can resolve this by using promise


47. error handling working async/await is using try and catch block

48. callstack

    1. works in LIFO order 
    2. Last function pushed to call stack will be executed first
    3. primitive data stored in stack
    4. object, function and arrays are stored in heap memory
    5. let . = {
    name:"nizam"  //heap memory
  }

  let obj1 = object ; callstack store refrence  of object , means memory location in obj1


49. heap memory

  1. object, function and arrays are stored in heap memory

  let object = {
    name:"nizam"  //heap memory
  }

  2. object are removed from heap memory when no refrence left
  3. garbage colloector free memory
    

50. How v8 engine optimize js (nodejs, and browser)

  1. In js, objects dynamic, at runtime propoties can be added and removed
  2. v8 create shape of the object using hidden classes
  3. if mutiple object having same structure it will reuse hidden classes

  4. Inline cache
    lookup will be created, if same property ur accessing mutiple time it will not look it in prototype chain it will directly fetch from inline cache which is lookup
  5. Grabage colloector 
      used to free memory for variables after use

  6. iterpreter which convert js code into machine understable code (bytecode)

51. Memory leak

    causes for memory leak
    ----------------------
    1. global variables
    2. closures with bigdata
    3. Forgotten timers / intervals

    avoide memory leak
    -------------------
    1. declare variables using let and const
    2. clear timers
    3. avoide unncessary holding large data in closure

52. temporal deadzone

    variables with let and const will not be hoisted , which throw an refrence error, this we will call it as temporal deadzone


53. polyfill

  Some of browsers will no support es6 features , polyfill will create same feature which will work in all browsers
 