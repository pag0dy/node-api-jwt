require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY

const User = require("../models/user")
const jwt = require('jsonwebtoken');
// SignUp
const createUser = async (req, res) => {

    const { email, password } = req.body;

    if(!email || !password) return res.json({
        msg: 'please enter your email and password'
    })

    const newUser = await User.create({ email, password });

    const user = await newUser.save();

    return res.status(201).json({
        status: 'Success',
        message: 'User Created',
        data: user
    })
}

const loginUser = async (req, res) => {
    const  { email, password } = req.body;

    if(!email || !password) return res.json({
        msg: 'email and password are required'
    })

    const this_user = await User.findOne({email, password})
    if (this_user) {
        const payload = {
            email: email
        }
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 1440 })

        return res.status(200).json({
            status: "Success",
            token: token,
            message: "User authenticated"
        })
    } else {
        return res.status(401).json({
            status: "Error",
            message: "Wrong user or password",
            data: null
        })
    }
}

module.exports = {
    createUser,
    loginUser
}