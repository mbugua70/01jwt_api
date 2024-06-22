const jwt = require('jsonwebtoken');
const BadRequest = require("../errors/bad_request");

const Login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequest("Please provide username and password");
  }

  const id = new Date().getDate();

  // jwt configuration
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(201).json({ msg: "You have logged in successfully", token });
};

const Dashboard = (req, res) => {
  const { username, id } = req.user;
  res
    .status(200)
    .json({ msg: `Welcome back ${username}`, secret: `Your id is ${id}` });
};

module.exports = {
    Login,
    Dashboard
}