const express = require("express");
const router = express.Router();
//const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

//Load Input Validation
//const validateRegisterInput = require("../../validation/register");
//const validateLoginInput = require("../../validation/login");
//Load Rider Model
const Rider = require("../models/riderModel");

router.get("/test", (req, res) =>
    res.json({
        msg: "Rider Works"
    })
);

router.post("/signup", (req, res) => {
    console.log("sdsa",req.body)
    Rider.findOne({
        email: req.body.email
    }).then(rider => {
        if (rider) {
            //errors.username = "username already exists";
            return res.json({ error: "email already exists" });
            //return res.json({ error: "Password incorrect" });
        } else {

            console.log(req.body);
            const newRider = new Rider({
                
                firstName:req.body.firstname,
                lastName:req.body.lastname,
                email:req.body.email,
                phone:req.body.phone,
                password:req.body.password,
                drivingLicenseNumber:req.body.drivingLicenseNumber,
                vehicleName: req.body.vehicleName,
                vehicleNumber: req.body.vehicleNumber,
                vehicleWeight: req.body.vehicleWeight,
                vehicleType: req.body.vehicleType,
            });
            //console.log(newRider.perm);

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newRider.password, salt, (err, hash) => {
                    if (err) throw err;
                    newRider.password = hash;
                    newRider
                        .save()
                        .then(rider => res.json(rider))
                        .catch(err => console.log(err));
                });
            });
        }
    }).catch(err=>{
        console.log(err);
    });

});


router.post("/login", (req, res) => {


    const email = req.body.email;
    const password = req.body.password;

    console.log(email, password);
    //find user by email
    Rider.findOne({
        email: req.body.email
    }).then(user => {
        //Check for user
        if (!user) {
            console.log("here");
            //errors.email = "User not found";
            return res.json({ error: "Email Does Not Exist" });
        }
        console.log("yoy")
        // Check Password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                //User Matched

                const payload = {
                    id: user.id,
                    email: user.Email,
                    name:user.firstName+" "+user.lastName,
                    userType:"rider"
                  
                }; // Create Jwt payload

                //Sign Token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 3600 * 4
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token,
                            error:"loggedin"

                        });
                    }
                );
            } else {
                //errors.password = "Password incorrect";
                return res.json({ error: "Password incorrect" });
            }
        });
    }).catch(err=>{
        console.log(err)
    });
});

router.get("/getAllUsers",
    // passport.authenticate("jwt", {
    //     session: false
    // }),
    (req, res) => {
        Rider.find()
            .then(users => {
                if (!users) {
                    return res.status(404).json(errors);
                }
                res.json(users);
            })
            //return res.json({ error: "Password incorrect" });
            .catch(err => res.json({
                user: 'There are no users'
            }));

    });


module.exports = router;
