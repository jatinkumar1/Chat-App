const express = require("express");
const sendMessages = require("../controllers/message.controller.js");
const protectRoute = require("../middleware/protectRoute.js");
const getMessages = require("../controllers/message.controller.js");
const router = express.Router();

// protect rout is authorization process jo user check krega
router.post("/send/:id",protectRoute,sendMessages);
router.get("/get/:id",protectRoute,getMessages)

module.exports = router;