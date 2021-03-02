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

router.get("/getAllProducts",
    /*   
    passport.authenticate("jwt", {
            session: false
        }),
        */
    (req, res) => {
        Product.find()
            .then(cit => {
                if (!cit) {

                    return res.status(404).json(errors);
                }
                console.log(cit.title);
                res.json(cit);
            })
            .catch(err => res.status(404).json({
                cit: 'There are no products'
            }));

    });

    router.get("/getProducts/:id",
    /*passport.authenticate("jwt", {
        session: false
    }),*/
    (req, res) => {
        console.log(req.param.id)
        Product.findOne({ '_id': (req.params.id) })
            .then(cit => res.json(cit))
            .catch(err =>
                res.status(404).json({
                    error: "no Product Found"
                })
            );
    });




module.exports = router;
