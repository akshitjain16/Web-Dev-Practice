const fs = require("fs");

function readAndWrite(cb) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log(data);
    data = data + "Heyy akshit";
    fs.writeFile("a.txt",data, function () {
      cb()
    })
  })
}

readAndWrite(function() {
  console.log("data has been sent successfully");
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//returns nothing but a input is taken as callback to another fn

function waitFor(fn, duration) {
  setTimeout(fn, duration);
}

waitFor(function () {
  console.log("hi");
}, 5000);

//promisefy of above code approach 1 - wrapping another fn returns a promise

function wait(duration) {
  let p = new Promise((resolve) =>{
    setTimeout(function(){
      resolve();
    }, duration);
  });
  return p;
}

const ans = wait(2000)
ans.then(()=> {
  console.log("hi");
});

/////////////////////////////////////////////////////////////////////////////////

// callback hell
setTimeout(function () {
  console.log("hi");

  setTimeout(function () {
    console.log("hi");

    setTimeout(function () {
      console.log("hi");
    }, 3000);
  }, 4000);
}, 5000);

////////////////////////////////////////////////////////////////////////////////////////////

//promise chaining -sol to above problem
function promiseChaining(duration) {
  let p = new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
  return p;
}

//doing a chaining
promiseChaining(2000).then(function() {
  console.log("1st chaining");
  return promiseChaining(3000).then(() => {
    console.log("2nd chaining");
  });
});

////////////////////////////////////////////////////////

function toCatch(){
  let p = new Promise ((resolve,reject) => {
    resolve("hi")
    reject()
  })
  return p 
}

p.then(()=>{

})
.catch(()=>{

})

////////////////////////////////////////////////////////////////////////

