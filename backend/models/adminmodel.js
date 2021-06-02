const mongoose = require("mongoose")


const adminSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
    },
    ConfirmPassword: {
      type: String,
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
)

const Admin = mongoose.model('Admin', adminSchema)
module.exports = Admin;