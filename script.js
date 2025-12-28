let expensiveCodeEle = document.getElementById("expensive");
let colorChangeEle = document.getElementById("colorChange");

let worker = new Worker("worker.js")


expensiveCodeEle.addEventListener("click", () => {
  // let sum = 0;
  // for (let i = 0; i < 10000000000; i++) {
  //   sum += i
  // }
  // alert("sum :", sum)
  worker.postMessage("sum");
  worker.onmessage = function (data) {
    console.log("data from worker", data)
  }
});


colorChangeEle.addEventListener("click", () => {
  if (document.body.style.background === "white") {
    document.body.style.background = "red"
  }
  else {
    document.body.style.background = "white"
  }
});

