const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",
  [
    body("name", "Enter a valid Name").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password must contain 7 Characters").isLength({ min: 7 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(400)
        .json({ error: "User with this email id already Exists" });
    }
    user = User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json(user);
  }
);

module.exports = router;
