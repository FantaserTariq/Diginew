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
const User = require("../models/userModel");


//@route    GET api/users/test
//@desc     Tests users route
//@access   Public
router.get("/test", (req, res) =>
    res.json({
        msg: "User Works"
    })
);

//@route    GET api/users/register
//@desc     Register user route
//@access   Public
router.post("/signup", (req, res) => {
    console.log("sdsa",req.body)
    console.log("done")
    User.findOne({
        Email: req.body.email
    }).then(user => {
        if (user) {
            console.log("here")
            //errors.email = "email already exists";
            return res.json({ error: "email already exists" });
            //return res.json({ error: "Password incorrect" });
        } else {

            console.log(req.body,"fasda");
            const newUser = new User({
                firstName:req.body.firstname,
                lastName:req.body.lastname,
                Email:req.body.email,
                Password:req.body.password,
                PhoneNumber:req.body.phonnumber,
                

            });
            //console.log(newUser.perm);

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.Password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.Password = hash;
                    newUser
                        .save()
                        .then(user => res.json({user,error:"Signup Successful"}))
                        .catch(err => console.log(err));
                });
            });
        }
    })
    .catch(err=>{
        console.log(err);
    });
});

//@route    GET api/users/login
//@desc     Login user / Return JWT token
//@access   Public


router.post("/login", (req, res) => {


    const email = req.body.email;
    const password = req.body.password;

    console.log(email, password);
    //find user by email
    User.findOne({
        Email: req.body.email
    }).then(user => {
        //Check for user
        if (!user) {
            console.log("here");
            //errors.email = "User not found";
            return res.json({ error: "Email Does Not Exist" });
        }
        console.log("yoy")
        // Check Password
        bcrypt.compare(password, user.Password).then(isMatch => {
            if (isMatch) {
                //User Matched

                const payload = {
                    id: user.id,
                    email: user.Email,
                    name:user.firstName+" "+user.lastName
                  
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

//@route    GET api/users/current
//@desc     Return Current user
//@access   Private
router.get(
    "/current",
    passport.authenticate("jwt", {
        session: false
    }),
    (req, res) => {
        res.json({
            //id: req.user.id,
            //name: req.user.name,
            email: req.user.email,
            permission: req.user.permission
        });
    }
);

router.get("/getAllUsers",
    // passport.authenticate("jwt", {
    //     session: false
    // }),
    (req, res) => {
        User.find()
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

router.get("/getAll",
    // passport.authenticate("jwt", {
    //     session: false
    // }),
    (req, res) => {
        User.find()
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

router.delete("/delete/:id", passport.authenticate("jwt", {
    session: false
}),
    (req, res) => {
        User.findOneAndDelete({ '_id': req.params.id })
            .then(user => {
                res.json("Deleted Successfully");
            })
            .catch(err =>
                res.status(404).json({
                    nouserfound: "no user found with that id",
                    id: req.params.id
                })
            );
    });


router.get("/getUser/:id",
    passport.authenticate("jwt", {
        session: false
    }),
    (req, res) => {
        console.log(req.param.id)
        User.findOne({ '_id': (req.params.id) })
            .then(user => res.json(user))
            .catch(err =>
                res.status(404).json({
                    nouserfound: "no user found with that id"
                })
            );
    });

router.post("/update/:id", passport.authenticate("jwt", {
    session: false
}),
    (req, res) => {
        User.findById(req.params.id)
            .then(user => {
                user.email = req.body.email;
                user.perm = req.body.permissions;
                user.password = req.body.password

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(user.password, salt, (err, hash) => {
                        if (err) throw err;
                        user.password = hash;
                        user
                            .save()
                            .then(user => {
                                res.json('Update complete')
                                    .catch(err =>
                                        res.status(404).json({
                                            nouserfound: "no user found with that id"
                                        })
                                    );
                            });



                    })
                });
            })
    })

module.exports = router;
