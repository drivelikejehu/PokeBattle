const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/results", function (req, res) {
  db.User.findAll()
    .then((users) => {
      console.log(users);
      res.render("results", { users });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });

  router.get("/battle", function (req, res) {
    db.User.findAll({
      limit: 2,
      where: {
        winner: true
      },
      order: [ [ "createdAt", "DESC" ]]
    })
      .then((poke) => {
        console.log(poke);
        res.json(poke);
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.json({
          error: true,
        });
      });
  });


  router.get("/highscore", function (req, res) {
    console.log("PRINTING REQUEST");
    console.log(req.query);
    console.log(req.query.name);
    db.User.findAndCountAll({
   
      where: {
        winner: true,
        userName: req.query.name
      },
      order: [ [ "createdAt", "DESC" ]]
    })
      .then((poke) => {
        console.log(poke);
        res.json(poke);
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.json({
          error: true,
        });
      });
  });


});

module.exports = router;