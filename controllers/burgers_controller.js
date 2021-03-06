var express = require("express");
var router = express.Router();

var burgers = require("../models/burgers.js");

router.get("/", function (req, res) {
  burgers.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burgers.create([
    "burger_name"
  ], [
    req.body.burger_name,
  ], function (result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  var toggle = req.body.devour
  console.log( "Toggle " + toggle)
  toggle == "false" ? toggle = true: toggle = true
  console.log( "Toggle " + toggle)
  burgers.update({
    devoured: toggle
  }, condition, function (result) {
    console.log(result)
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;