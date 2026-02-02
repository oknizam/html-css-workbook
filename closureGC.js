function Outer() {
  let value = 10;
  return function () {
    value += 10;
    return value;
  }
}

let innerFn = Outer();

console.log(innerFn());
console.log(innerFn());
console.log(innerFn());

// parent function is already got executed, but because of child function accessing parent function variable refrence for value will be there, so here GC will not remove memory for value

// how we can remove, remove function refrence making it null

innerFn = null;

// when we are using closure we have to be sure that after using function we need remove their refrence

// GB collector free up space for reachables function scope, if function got executed it will free, long lived scope we have to make its refrence null
