const express = require("express");
const protectRoute = require("../middleware/protectRoute");
const usersForSideBar = require("../controllers/user.controller");

const router = express.Router();

router.get("/",protectRoute,usersForSideBar);

module.exports = router;