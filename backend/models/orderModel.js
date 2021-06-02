const mongoose = require("mongoose")

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    product:{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Product',

    },
    address:{
      type: String,
      required: true,
    },
    city:{
      type: String,
      required: true,
    },
    zipcode:{
      type: String,
      required: true,
    },

    imageUrl:{
      type: String,
    },
    isApproved:{
      type:Boolean,
      default:false
    },
    
    date_of_delivery:{
        type:Date
    },
    rider:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"Rider"
    }
  
    
    
  },
  {
    timestamps: true,
  }
)

const Order = mongoose.model('Order', orderSchema)

module.exports = Order;
