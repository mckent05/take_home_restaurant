const express = require("express");

const router = express.Router();

const restaurants = require("../controllers/restaurants");

router.route("/").get(restaurants);

module.exports = router;
