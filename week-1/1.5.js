// use of promises

const fs = require ('fs');

//own async fn
function newReadFile(){
    // promise returns  a function which is resolved
    var a =  new Promise(function(resolve){
        fs.readFile("./app.txt", "utf-8",function(err,data){
            resolve(data);
        });
    }) 
    return a;
}

//callback fn to call
function onRead(value){
    console.log(value)
}

newReadFile().then(onRead)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// using async await


// defining a asyncronous function using promise which will take time to execute for eg. an api call 
function tanvi(){
    var a = new Promise(function(resolve){
        // async logic here 
        setTimeout(function(){
            resolve("hi")
        }, 1000)
       
    })
    return a;
}

// using .then or promises when fetching an api
function akshit(){
    tanvi().then(function(value){
    console.log(value)
    })
}

akshit();

// using async-await to make our function async and wait for data . await can only be used inside an function ehich is defined as async as eg below
async function chotu(){
    const value = await tanvi();
    console.log(value)
}

chotu();