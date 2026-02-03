// promise chaining if ur returing any value after getting value in then which creates promise chaining

Promise.resolve(1).then((res) => {
  res += 1;
  return res;
})
  .then((res) => {
    console.log(res);
  })

// practical exmple for promise chaining using fetch api call

async function getTodoList() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((res) => res?.[0]).then((res) => {
      console.log("first todo task", res)
    })
}

getTodoList();

function sayHello(name) {
  return Promise.resolve(`Hello ${name}`)
}

async function testAsyncFunc() {
  try {
    console.log("start testAsyncFunc execution");
    const res = await sayHello("NIZAM");
    console.log("end testAsyncFunc execution");
    console.log("result testAsyncFunc execution", res);
  }
  catch (err) {
    console.error(err)
  }
}
function main() { // creating main function because don't want to mix up chining logic
  console.log("------------------------------")
  console.log("start main");
  testAsyncFunc();
  console.log("end main");
}
main();

// output
// start main
// start testAsyncFunc execution
// end main
// end testAsyncFunc execution
// result testAsyncFunc execution
