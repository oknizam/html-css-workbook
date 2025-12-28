self.onmessage = function (data) {
  console.log("data from normal js", data)
  self.postMessage("done")
}