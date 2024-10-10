//authentication - hashing, encryption , jwt-json web tokens, local storage
//databases- no sql, postgresql

// basic authentication method
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
app.use(express.json());
// using mongoose to connect mongodb database
const mongoose = require("mongoose");

// connecting to database using url
mongoose.connect(
  "mongodb+srv://akshitjain:%3Ca9fsFLpJ4FIlaavm%3E@cluster0.5t5qw.mongodb.net/"
);

// defining schema
const User = mongoose.model("User", {
  name: String,
  email: String,
  passsword: String,
});

//creating user
const user = new User({
  name: "akshit jain",
  email: "gang.akshitjain@gmail.com",
  password: "1234",
});

// saving to database
user.save();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// creating a  route for signup or perfoming create operation
app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  // checking user exists functanility can be added
  const existingUser = await User.findOne({ email: username });

  if (existingUser) {
    return res.status(400).send("username already exists");
  } 
    const user = new User({
      name: name,
      email: username,
      password: password,
    });
   User.save();
   res.json({
    "msg": "User created successfully"
   })
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// array of user details called inmemory database
const allUsers = [
  {
    username: "akshitjain@gmail.com",
    password: "123",
    name: "akshitjain",
  },
];

//logic to check user exists in databse or here in inmemory array
function userExists(username, password) {
  // can try using find fn in js
  let userExists = false;
  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].username == username && allUsers[i].password == password) {
      userExists = true;
    }
  }
  return userExists;
}

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "user doesnt exist",
    });
  }

  // sign fn is used for generating token
  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    res.json({});
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);
