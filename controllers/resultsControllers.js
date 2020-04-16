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
});

module.exports = router;
