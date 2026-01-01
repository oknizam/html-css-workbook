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

