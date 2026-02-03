let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.myMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this))
  }
  return result;
}

const mapResultWithPolyfill = numbers.myMap((num) => num * 2);


// polyfill for filter
Array.prototype.myfilter = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i])
    }
  }
  return result;
}

const filterResultWithPolyfill = numbers.myfilter((num) => num % 2);

// creating polyfill for reducer
Array.prototype.myReducer = function (callback, initialValue) {
  let acc = initialValue
  for (let i = 0; i < this.length; i++) {
    if (!acc) {
      acc = this[i];
    } else {
      acc = callback(acc, this[i], i, this)
    }
  }
  return acc;
}


const reducerResultWithPolyfill = numbers.myReducer((acc, num) => num + acc, 0);

// reducer uses

// array to object 

const users = [
  { id: 1, name: "Nizam" },
  { id: 2, name: "Ali" }
];

let objectUsers = users.myReducer((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {})

console.log(objectUsers)

// grouping

const people = [
  { age: 20 }, { age: 20 }, { age: 30 }
];

let groupPeople = people.myReducer((acc, user) => {
  acc[user.age] = acc[user.age] || [];
  acc[user.age].push(user);
  return acc;
}, {})

console.log(groupPeople)

// flatten one level

const arr2 = [[1, 2], [3, 4]];

const flatArr = arr2.myReducer((acc, item) => [...acc, ...item], []);

console.log(flatArr);

// remove duplicates from array
let duplicateArray = [1, 2, 3, 4, 5, 6, 3, 4, 6];

let dup = {};
for (let item of duplicateArray) {
  dup[item] = 1
}
const finalArray = new Set([...duplicateArray])
console.log(Object.keys(dup), finalArray)

// flatten array

function flattenArray(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item))
    }
    else {
      result.push(item)
    }
  }
  return result;
}

console.log(flattenArray([1, 2, 3, [4, 5], [6, 7, [8, 9]]]))


// promise chaining
// multiple linking .then() calls
//  when doing promise chaining return should be mandatory

Promise.resolve(1).then((result) => {
  console.log(result); // 1
  return result + 1;
}).then((result) => {
  console.log(result); // 2
  return result + 1
}).then((result) => {
  console.log(result); // 3
})

// error chaining

Promise.resolve("hello").then((result) => {
  console.log(result); // hello
  return "next";
}).then((result) => {
  console.log(result); // next
  // throw new Error("error chain");
}).catch((err) => {
  console.log("error", err)
})


// async / await


function getData() {
  console.log("start asyn/await")
  return Promise.resolve(1);
}

async function main() {
  try {
    const res = await getData();
    console.log("resolve asyn/await", res)
    console.log("end asyn/await")
  }
  catch (err) {
    console.log(err);
  }
}

main()

// promise.all 1

Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]).then((res) => console.log("promise.all 1", res)).catch(err => console.log(err))


// promise.all 2

Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.reject("error in all")]).then((res) => console.log("promise.all 2", res)).catch(err => console.log(err))


// promise.allSettled 1

Promise.allSettled([Promise.resolve(1), Promise.resolve(2), Promise.reject("error in allSettled")]).then((res) => console.log("promise.allSettled", res))


// promise.race 

Promise.race([Promise.resolve(1), Promise.resolve(2),]).then((res) => console.log("promise.race 1", res)).catch(err => console.log(err))


Promise.race([Promise.reject("error in race"), Promise.resolve(1), Promise.resolve(2)]).then((res) => console.log("promise.race 1", res)).catch(err => console.log(err))


// promise.any 
//  any resolved promise
Promise.any([Promise.resolve(1), Promise.resolve(2),]).then((res) => console.log("promise.any 1", res)).catch(err => console.log(err))

// no resolved promise , return all rejected promise

Promise.any([Promise.reject(1), Promise.reject(2),]).then((res) => console.log("promise.any 1", res)).catch(err => console.log("error in any", err))



// call back hell or pyramid of doom
function A(cb) {
  console.log("A");
  cb()
}

function B(cb) {
  console.log("B");
  cb()
}

function C(cb) {
  console.log("C");
  cb()
}

function D() {
  console.log("D");
}

A(() => {
  B(() => {
    C(() => {
      D()
    })
  })
})


//  resolved using promise

function step1() {
  return Promise.resolve(console.log("A"))
}

function step2() {
  return Promise.resolve(console.log("B"))
}

function step3() {
  return Promise.resolve(console.log("B"))
}

step1().then(step2).then(step3)


// promise all

Promise.prototype.myAllPromise = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw new Error("Promises must be array")
    }

    let result = [];
    let completed = 0;

    promises.forEach((p, index) => {
      Promise.resolve(p).then((res) => {
        result[index] = res;
        completed++;
        if (completed === promises.length) {
          resolve(result)
        }
      }).catch(error => reject(error));

    });

    if (promises.length === 0) {
      resolve([])
    }
  })
}


// promise race

Promise.prototype.myRacePromise = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw new Error("Promises must be array")
    }
    promises.forEach((p) => {
      Promise.resolve(p)
        .then((res) => resolve(res))
        .catch(err => reject(err))
    });

  })
}

// promise any

Promise.prototype.myAnyPromise = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw new Error("Promises must be array")
    }
    let error = [];
    let completed = 0;
    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then((res) => resolve(res))
        .catch(err => {
          error[i] = err;
          completed++;
          if (completed === promises.length) {
            reject(error)
          }
        })
    });

    if (promises === 0) {
      resolve([])
    }
  })
}

// promise all settled


Promise.prototype.myAllSettledPromise = function (promises) {
  return new Promise((resolve) => {
    if (!Array.isArray(promises)) {
      throw new Error("Promises must be array")
    }
    let result = [];
    let completed = 0;
    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then((res) => {
          result = { status: "fulfilled", data: res };
          completed++;
        })
        .catch(err => {
          result = { status: "rejected", data: err };
          completed++;
        })
        .finally(() => {
          if (completed === promises.length) {
            resolve(result)
          }
        })
    });

    if (promises === 0) {
      resolve([])
    }
  })
}


// polyfill for call

Function.prototype.myCall = function (context, ...args) {
  context = context ? context : globalThis;

  const fnSymbol = Symbol(); // avoid property collision
  context[fnSymbol] = this;
  const result = context[fnSymbol](...args)
  delete context[fnSymbol];
  return result;
}

// polyfill for apply

Function.prototype.myApply = function (context, args = []) {

  context = context ? context : globalThis;

  const fnSymbol = Symbol(); //to avoide override function property
  context[fnSymbol] = this;
  const result = context[fnSymbol](...args);
  delete context[fnSymbol];
  return result;
}

// polyfill for bind

Function.prototype.myBind = function (context, ...bindArgs) {
  const originalFn = this;

  function boundFunction(...callArgs) {
    // If called with `new`, ignore bound context
    const isNew = this instanceof boundFunction;
    const finalThis = isNew ? this : context;

    return originalFn.apply(finalThis, [...bindArgs, ...callArgs]);
  }

  // Preserve prototype chain
  boundFunction.prototype = Object.create(originalFn.prototype);

  return boundFunction;
};

function sayHello(...args) {
  console.log(this.name, args);
}

const object = {
  name: "nizam"
}
const callFunction = sayHello.bind(object, 1, 2, 3);
callFunction(4, 5, 6);


// deep clone

function deepClone(obj) {

  // base condition

  if (obj === null || typeof obj !== "object") { // premitive value
    return obj;
  }

  let clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  console.log("clone", clone)
  return clone;
}


const cloneObject = {
  a: 10,
  b: {
    b1: 20
  }
}

deepClone(cloneObject)

// flatten object 

function flattenObject(obj, parentKey, res = {}) {
  for (let key in obj) {
    let newKey = parentKey ? `${parentKey}.${key}` : key;

    if (obj[key] !== null && !Array.isArray(obj[key]) && obj[key] === 'object') {
      flattenObject(obj[key], newKey, res);
    }
    else {
      res[newKey] = obj[key];
    }
  }
  return res;
}


// memoization

function memoization(fn) {
  let cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key] !== undefined) {
      console.log("cached data", cache[key]);
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    return cache[key];
  }
}

function add(a, b) {
  return a + b;
}

const addMemo = memoization(add);

addMemo(2, 3);
addMemo(4, 5);
addMemo(2, 3);
