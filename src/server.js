const express = require("express");
 const bodyParser = require("body-parser");
 const cors = require('cors');

let recipes = require("./data.json");
let nextId = 4;
const app = express();

app.use(bodyParser.json());
app.use(cors());
  
  app.get("/api", (req, res) => {
    res.json(recipes);
  });

  app.listen(8080, () =>{
    console.log(`Server listening at http://localhost:8080`);
});