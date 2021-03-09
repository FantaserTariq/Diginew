const mongoose = require("mongoose")

const findriderSchema = mongoose.Schema(
    {
       
        riderId:{
        type: String
       },

        location: {
           type:mongoose.Schema.Types.Mixed
        }

    
    },
    {
        timestamps: true,
    }
)

const FindRider = mongoose.model('FindRider', findriderSchema)
module.exports = FindRider;

