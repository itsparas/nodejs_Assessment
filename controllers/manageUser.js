const User = require("../models/user");
const bcrypt = require("bcrypt");

require("dotenv").config();

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const saltRound = process.env.SALTROUND;
  const hashedPassword = await bcrypt.hash(password, Number(saltRound));
  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  await user
    .save()
    .then((data) => {
      res.json({
        message: "user is registered",
        data,
      });
    })
    .catch((err) => {
      res.json({
        message: err.message,
      });
    });
};

const updateUser = async (req, res) => {
  const name = req.body.name;
  const user = await User.findOne({ _id: req.id });
  user.name = name || user.name;

  user
    .save()
    .then((data) => {
      res.json({
        message: "user is updated",
        updatedUser: data,
      });
    })
    .catch((err) => {
      res.json({
        message: err.message,
      });
    });
};

module.exports = { registerUser, updateUser };
