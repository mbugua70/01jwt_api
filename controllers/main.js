const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');

const Login = (req, res) => {

    const {username, password} = req.body;

    if(!username || !password) {
        throw new CustomAPIError("Please provide username and password", 400);
    }

    const id = new Date().getDate();

    // jwt configuration
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'})
    res.status(201).json({msg: "You have logged in successfully", token});
}

const Dashboard = (req, res) => {

    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new CustomAPIError("Not authorized, Not token was provided", 401);

    }


    // storing token in a variable
    const token = authHeader.split(' ')[1];
    console.log(token);


   res.status(200).json({msg: "Welcome back John"})
}

module.exports = {
    Login,
    Dashboard
}