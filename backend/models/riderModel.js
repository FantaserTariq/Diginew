const mongoose = require("mongoose")

const riderSchema = mongoose.Schema(
    {
       
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
            
        },
        password: {
            type: String,
            required: true,
        },
        drivingLicenseNumber: {
            type: String,
            required: true,
        },
        vehicleName:{
            type: String,
            required: true,
        },
        vehicleNumber: {
            type: String,
            required: true,
        },
        vehicleWeight: {
            type: Number,
            required: true,
        },
        vehicleType:{
            type: String,
            required: true,
        },
        location: {
            lon:{
                type:String
            },
            lat:{
                type: String
            }
        }

    
    },
    {
        timestamps: true,
    }
)

const Rider = mongoose.model('Rider', riderSchema)
module.exports = Rider;

