const mongoose = require("mongoose")


const userSchema = mongoose.Schema(
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
    
    PhoneNumber: {
      type: String,
      required: true,
    },
    
    isAdmin: {
      type: String,
    
      default: false,
    },
    Notification:[{
      msg:{
        type:String
      },
      seen:{
        type:Boolean,
        default:false
      }
    }]


    
  },
  {
    timestamps: true,
  }
)

// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bycrypt.compare(enteredPassword, this.password)
// }

// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     next()
//   }

//   const salt = await bycrypt.genSalt(10)
//   this.password = await bycrypt.hash(this.password, salt)
// })

const User = mongoose.model('User', userSchema)
module.exports = User;

