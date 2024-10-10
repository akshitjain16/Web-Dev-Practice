const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(express.json());

//creating a post route
app.post('/api', (req,res)=>{
    const message = req.query.message;
    console.log(message);
    res.json({
        output: "2 + 2 = 4"
    })
})

//creating a get route
app.get('/',(req,res)=>{
    const n = req.query.n
    const ans  = sum(n);
    res.send(ans.toString());
})


// sample backend architecture

const users = [
  {
    name: "akshit",
    health: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const akidneys = users[0].health;
  const numberOfKidneys = akidneys.length;
  let numOfHealthyKidneys = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if (akidneys[i].healthy) {
      numOfHealthyKidneys = numOfHealthyKidneys + 1;
    }
  }

  const unHealthyKidney = numberOfKidneys - numOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numOfHealthyKidneys,
    unHealthyKidney,
  });
});

app.post("/", (req, res) => {
  console.log(req.body);
  const isHealthy = req.body.isHealthy;
  users[0].health.push({
    healthy: isHealthy,
  });

  res.json({
    msg: "Done!",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].health.length; i++) {
    users[0].health[i].healthy = true;
  }
  res.json({});
});

app.delete("/", (req, res) => {
  function isOneUnhealthy() {
    let oneUnhealthy = false;
    for (let i = 0; i < users[0].health.length; i++) {
      if (users[0].health[i].healthy) {
        oneUnhealthy = true;
      }
    }
    return oneUnhealthy;
  }


  if(isOneUnhealthy()){

  const newKidneys = [];
  for (let i = 0; i < users[0].health.length; i++) {
    if (users[0].health[i].healthy) {
      newKidneys.push({
        healthy: true,
      });
    }
  }
  users[0].health = newKidneys;
  res.json({ msg: "done formatting" });
}
else{
    res.status(411).json({
        msg: "you have been dead"
    });
}
});

app.listen(port, () => {
  console.log(`listning on port ${port}`);
});




////////////////////////////////////////////////////////////

//to read a file and dispaly from backend
app.get('/files/:filename', function(req,res){
    const name = req.params.filename;
    console.log(name);
    fs.readFile(name, function(err,data){
        res.json({
            data
        })
    })
})