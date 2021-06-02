const express = require("express");
const router = express.Router();
//const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

const Admin = require("../models/adminmodel");

router.get("/test", (req, res) =>
    res.json({
        msg: "Admin Works"
    })
);


// Register:
router.post("/Adminregister", (req, res) => {
    console.log("sdsa",req.body)
    console.log("done")
    Admin.insertMany({
        Email: req.body.email
    }).then(admin => {
        if (admin) {
            console.log("here")
            return res.json({ error: "email already exists" });
        } else {

            console.log(req.body,"fasda");
            const newAdmin = new Admin({
                firstName:req.body.firstname,
                lastName:req.body.lastname,
                Email:req.body.email,
                Password:req.body.password,
                confirmpassword:body.confirmpassword
            });
            
            //console.log(newUser.perm);
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newAdmin.Password, salt, (err, hash) => {
                    if (err) throw err;
                    newAdmin.Password = hash;
                    newAdmin
                        .save()
                        .then(admin => res.json({admin,error:"Registered Successful"}))
                        .catch(err => console.log(err));
                });
            });
        }
    })
    
    .catch(err=>{
        console.log(err);
    });
});



// Login:
router.post("/Adminlogin", (req, res) => {


    const email = req.body.email;
    const password = req.body.password;
    console.log(email, password);
    //find user by email
    Admin.findOne({
        Email: req.body.email
    }).then(admin => {
        //Check for user
        if (!admin) {
            console.log("here");
            //errors.email = "Admin not found";
            return res.json({ error: "Email Does Not Exist" });
        }
        console.log("yoy")
        // Check Password
        bcrypt.compare(password, admin.Password).then(isMatch => {
            if (isMatch) {
                //Admin Matched

                const payload = {
                    id: admin.id,
                    email: admin.Email,
                    name:admin.firstName+" "+admin.lastName
                  
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
module.exports = router;