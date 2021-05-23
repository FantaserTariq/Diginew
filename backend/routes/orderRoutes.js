const express = require("express");
const router = express.Router();
//const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");
// const multer = require('multer')
// const fs = require("fs");
// var path = require('path')


//Load Input Validation
//const validateRegisterInput = require("../../validation/register");
//const validateLoginInput = require("../../validation/login");
//Load User Model
const Order = require("../models/orderModel");


// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'src/uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + path.extname(file.originalname))
//     }
//   })
   
//   var upload = multer({ storage: storage })


//   router.post('/imageupload',auth2, upload.single('resourceMaterial'), async (req,res) => {
//     let userId = req.body.userID
//     let productId = req.body.productId
//     let resourceMaterial = req.file.filename

    
//     try {
//         // if (!file) {
//         //     const error = new Error('Please upload a file')
//         //     error.httpStatusCode = 400
//         //     console.log(error) 
//         //   }
        
//         res.status(200).send('Inserted assignment')
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })


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


router.post("/addpayment", (req, res) => {
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
