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

module.exports = router;
