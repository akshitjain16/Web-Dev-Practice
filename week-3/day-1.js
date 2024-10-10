// middlewares use for authentication and checks or input validations

const express = require("express");
const app = express();

// middleware example mtlb iske bad jo bhi routes aayenge vo is middleware ko use kr rhe hai (app.use)
//app.use(userMiddlewares)
//here we use curly braclets because this returns a function belowone
app.use = express.json();

//getting data from headers and url
const username = req.headers.username;
const password = req.headers.password;
const kidneyId = req.query.kidneyId;

let numOfRequests = 0;

function calRequests(req, res, next) {
  numOfRequests++;
  console.log(numOfRequests);
  next();
}

//making middlewares and using next function taki agla function call ho ske toh next fn call krte
function userMiddlewares(req, res, next) {
  if (username != "akshit" && password != "pass") {
    res.status(403).json({
      msg: "incorrect inputs",
    });
  } else {
    next();
  }
}

function kidneyMiddlewares(req, res, next) {
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).json({
      msg: "incorrect inputs",
    });
  } else {
    next();
  }
}

//creating routes and using middlewares
app.get(
  "/health",
  calRequests,
  userMiddlewares,
  kidneyMiddlewares,
  (req, res) => {
    res.send("your health is good");
  }
);

//global cathches are another type of middleware use for global error ckeck and display a clean output in case of any crashes
// error handling middlewares when any error in any part of code control reaches here.
// here we have four params and how we define this
app.use((err, req, res, next) => {
  errorCount++;
  res.status(500).json({
    msg: "A internal server error has been occured",
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// examples schemas can be more nested or complex but learn later to how to bulid schmea.
function validationSchema(obj) {
  const schema = zod.object({
    email: zod.string().email().endsWith("@gmail.com"),
    password: zod.string().min(8),
    country: zod.literal("In").or(zod.literal("US")),
  });

  const response = schema.safeParse(obj);
  console.log(response);
}

// Zod for user inputs validations . visit zod github website fr more details. it can be used indpendent of express.
// npm install zod then import it amd then make a schema for it
const zod = require("zod");
//define schema as per need
//coercion of primitive values such tht their tyoe can be converted
// const schema = zod.coerce.string();
const schema = zod.array(zod.number());
//using zod as checking that input is array of numbers
app.post("/login", (req, res) => {
  const inputs = req.body;
  // using schema for validations by using schema.safeParse
  const response = validationSchema(req.body);
  if (!response.success) {
    res.status(411).json({
      msg: "Invalid Inputs",
    });
  } else {
    res.send({
      response,
    });
  }
});

//array of strings with more than one array , return true else return false
function validateInputs(){
  if(typeof arr==object && arr.length >=1 && arr.every((item)=> typeof item == "number") ){

  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// authentication needed in backend as anyone can use postman and maniplaute backend thats why 
// dumb way is to check user id and password and good way is to send a token and use it as login and forget when logout


app.listen(3000);
