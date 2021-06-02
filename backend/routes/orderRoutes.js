const express = require('express');
const router = express.Router();
//const gravatar = require("gravatar");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');
// const multer = require('multer')
// const fs = require("fs");
// var path = require('path')

//Load Input Validation
//const validateRegisterInput = require("../../validation/register");
//const validateLoginInput = require("../../validation/login");
//Load User Model
const Order = require('../models/orderModel');
const Rider = require("../models/riderModel");


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

router.get('/test', (req, res) =>
  res.json({
    msg: 'User Works',
  })
);

router.post('/addorder', (req, res) => {
  console.log('sdsa', req.body);
  console.log('done');

  console.log(req.body, 'fasda');
  const newOrder = new Order({
    user: req.body.user,
    product: req.body.product,
    address: req.body.address,
    city: req.body.city,
    zipcode: req.body.zipcode,
  });
  //console.log(newUser.perm);

  newOrder
    .save()
    .then((order) => res.status(200).json({ order, data : 'Order Placed Successfully' }))
    .catch((err) => console.log(err));
});

router.post('/addpayment/:id', (req, res) => {
  console.log(req.body,"image")
  try {
    const id = req.params.id;
    const { imageUrl } = req.body;
    console.log(imageUrl);
    Order.findById({
      _id:id
    }).then(data=>{
      if(data){
        data.imageUrl=imageUrl
        Order.findByIdAndUpdate(id, data).then(data=>{
          return res.status(200).json({ order, msg: 'Payment Sent' });
        }).catch(err=>{
          return res.json({
            error:err
          })
        })
      }
    })
    .catch(err=>{
      return res.json({
        error:err
      })
    })

  } catch (err) {
    console.log(err);
  }
});

router.get('/getAllOrders', (req, res) => {
  try {
    Order.find({
      isApproved:false
    })
    .populate("user")
    .populate("product")
    
    .then(data=>{
      return res.json(data);
    }).catch(err=>{
      return res.json({
        error:err
      })
    })

  
  } catch (err) {
    console.log(err);
  }
});

router.post('/setRider/:id', (req, res) => {
  try {
    Order.find({
      _id:req.params.id
    })    
    .then(data=>{
      if(data){
        Rider.find().then(rider=>{ 
          console.log("here")
         
        data[0].date_of_delivery=new Date()
        data[0].date_of_delivery.setDate(data[0].date_of_delivery.getDate() + 2)
       let a= Math.floor(Math.random() * rider.length); 
        data[0].rider=rider[a]._id
        //console.log(data[0])
        Order.findByIdAndUpdate({
          _id:req.params.id
        },data[0]).populate("rider").then(data=>{
          console.log(data)
          return res.json({
            data:data
          })
        }).catch(err=>{
          return res.json({
            err:err
          })
        })
      })
      }
      
    
    }).catch(err=>{
      return res.json({
        error:err
      })
    })

  
  } catch (err) {
    console.log(err);
  }
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
