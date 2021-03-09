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
//Load User Model
const FindRider = require("../models/findrider");

console.log("dfdsfsd")
router.get("/test", (req, res) =>
    res.json({
        msg: "User Works"
    })
);


router.post("/updateLocation", (req, res) => {
    console.log("sdsa",req.body)
    console.log("done")
   

            console.log(req.body,"fasda");
            const newOrder = new FindRider({


                riderId:req.body.riderId,
                location:req.body.location
              
                

            });
            //console.log(newUser.perm);
        
                    newOrder
                        .save()
                        .then(order => res.json({order,error:"Order Placed Successfully"}))
                        .catch(err => console.log(err));
                
     
});

router.get("/getActiveRiders",
    /*   
    passport.authenticate("jwt", {
            session: false
        }),
        */
    (req, res) => {
        FindRider.find()
            .then(cit => {
                if (!cit) {

                    return res.status(404).json(errors);
                }
                console.log(cit);
                res.json(cit);
            })
            .catch(err => res.status(404).json({
                cit: 'There are no products'
            }));

    });

module.exports = router;



