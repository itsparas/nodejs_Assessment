const express = require("express");

const router = express.Router();

const { registerUser, updateUser } = require("../controllers/manageUser");

const userLogin = require("../controllers/userLogin");
const authorization = require("../middleware/userAuthorization");

router.post("/register", registerUser);
router.put("/update", authorization, updateUser);
router.post("/login", userLogin);

module.exports = router;
