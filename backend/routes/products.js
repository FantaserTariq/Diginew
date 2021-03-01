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
const Product = require("../models/productModel");


router.post("/addproduct", (req, res) => {
    console.log("sdsa",req.body)
    console.log("done")
   

            console.log(req.body,"fasda");
            const newProduct = new Product({
                user:req.body.user,
                title:req.body.title,
                image:req.body.image,
                category:req.body.category,
                subCategory:req.body.subCategory,
                description:req.body.description,
                price:req.body.price,
                productLocation:req.body.productLocation,
                itemCondition:req.body.itemCondition
                

            });
            //console.log(newUser.perm);
        
                    newProduct
                        .save()
                        .then(product => res.json({product,error:"Product Successfully added"}))
                        .catch(err => console.log(err));
                
     
});


module.exports = router;
