import express from "express";
let recipes = require("./data.json");

function createRouter() {
  const router = express.Router();

  /* Define all routes */
  router.get("/recipes", async (req, res) => {
    res.json();
  });

  router.get("/recipes/:id", async (req, res) => {
    res.json(recipes.find(r =>r.uniqueId));
  });

  router.put("/recipes", (req, res) =>{ 
           recipes= req.body;
           res.json(recipes)
       });
  return router;
}

export default createRouter;