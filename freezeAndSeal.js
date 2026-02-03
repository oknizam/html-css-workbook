let objA = {
  name: "Nizam",
  value: 10
};

// 1. freeze
Object.freeze(objA);

objA.value = 20;  // not allow to modify
delete objA.value;  // not allowed delete propoties
objA.newValue = 30;  // not allowed to add new value

console.log(objA);

// 2. seal
let objB = {
  name: "Nizz",
  value: 20
};

Object.seal(objB);

objB.value = 30;  // allow to modify
delete objB.value;  // not allowed delete propoties
objB.newValue = 30;  // not allowed to add new value

console.log(objB);


const objC = Object.assign({}, objA); //same as {...objA}

// shallow copy

let objD = {
  a: 10,
  b: {
    b1: 20
  }
}

let shallowCopy = { ...objD };

shallowCopy.a = 20;
shallowCopy.b.b1 = 30;

console.log(shallowCopy, objD); // b1 is also updated in objD as well because shallow copy will  prevent only one level of refrence


// to handle it we need to do deep copy