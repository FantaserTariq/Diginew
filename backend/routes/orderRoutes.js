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
const Order = require("../models/orderModel");


router.get("/test", (req, res) =>
    res.json({
        msg: "User Works"
    })
);


router.post("/addorder", (req, res) => {
    console.log("sdsa",req.body)
    console.log("done")
   

            console.log(req.body,"fasda");
            const newOrder = new Order({


                user:req.body.user,
                product:req.body.product,
                address:req.body.address,
                city:req.body.city,
                zipcode:req.body.zipcode,
              
                

            });
            //console.log(newUser.perm);
        
                    newOrder
                        .save()
                        .then(order => res.json({order,error:"Order Placed Successfully"}))
                        .catch(err => console.log(err));
                
     
});

// router.get("/getAllProducts",
//     /*   
//     passport.authenticate("jwt", {
//             session: false
//         }),
//         */
//     (req, res) => {
//         Product.find()
//             .then(cit => {
//                 if (!cit) {

//                     return res.status(404).json(errors);
//                 }
//                 console.log(cit.title);
//                 res.json(cit);
//             })
//             .catch(err => res.status(404).json({
//                 cit: 'There are no products'
//             }));

//     });

//     router.get("/getProducts/:id",
//     /*passport.authenticate("jwt", {
//         session: false
//     }),*/
//     (req, res) => {
//         console.log(req.param.id)
//         Product.findOne({ '_id': (req.params.id) })
//             .then(cit => res.json(cit))
//             .catch(err =>
//                 res.status(404).json({
//                     error: "no Product Found"
//                 })
//             );
//     });




module.exports = router;
