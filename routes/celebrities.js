const router = require("express").Router(); // or const express = require("express")  const router = express.Router()

const express = require("express");
const app = require("../app");
const Celebrity = require("../models/Celebrity.model");
const hbs = require("hbs");
const res = require("express/lib/response");
const async = require("hbs/lib/async");

router.get("/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/create", async (req, res) => {
  await Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  });


  try {
    res.redirect("create"); //create it's an example
  } catch (error) {
    res.render("celebrities/new-celebrity");
  }
});


router.get("/",async(req,res)=>{

    const celebrities = await Celebrity.find()
    try{
        res.render("celebrities/celebrities.hbs",{celebrities})
    }catch(error){
        `Something is wrong`
    }

})

module.exports = router;
