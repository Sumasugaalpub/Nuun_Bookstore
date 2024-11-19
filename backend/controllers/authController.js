const UserModel = require('../models/Users');
const nodemailer = require('nodemailer');
// const jwt = require('jsonwebtoken');


   //register
   const register = (req, res) => {
    const { name, email, password } = req.body;

    // Check if required fields are provided
    if (!name || !email || !password) {
        return res.status(400).json({ error: "Please provide name, username, and password." });
    }

    // Create user if all required fields are provided
    UserModel.create({ name, email, password })
        .then(users => res.json(users))
        .catch(err => res.json(err));
};



            //login
const login = (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("The password is incorrect");
                }
            } else {
                res.json("No record exists");
            }
        })
        .catch(err => res.json(err));
};
 
       //forgotpassword
const forgotPassword = (req, res) => {
    const { email } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.send({ Status: "User not existed" });
            }

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'kkulmiye10@gmail.com',
                    pass: 'pvvv pbuh xggj rqwi'
                }
            });

            var mailOptions = {
                from: 'youremail@gmail.com',
                to: email,
                subject: 'Reset Password Link',
                text: `http://localhost:5173/reset_password/${user._id}`
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                    return res.send({ Status: "Error sending email" });
                } else {
                    return res.send({ Status: "Success" });
                }
            });
        })
        .catch(error => {
            console.error(error);
            return res.send({ Status: "Error finding user" });
        });
};


    //resetPassword
const resetPassword = (req, res) => {
    const { id } = req.params;
    const { password } = req.body;

    UserModel.findByIdAndUpdate({ _id: id }, { password: password })
        .then(u => res.send({ Status: "Success" }))
        .catch(err => res.send({ Status: err }));
};



module.exports = {
    register,
    login,
    forgotPassword,
    resetPassword,
};
