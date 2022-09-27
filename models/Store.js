const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const storeSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Please provide a store name"],
        lowercase: true,
        enum:{
            values:['dhaka','chottogram','rajshahi','sylet','khulna','barishal','rangpur','moymonshing'],
            message:["{VALU} is not a valid name"]
        }
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    manager:{
        name: String,
        contactNumber: String,
        id:{
            type: ObjectId,
            ref:"User"
        }
    }
}, {
    timestamps: true,
})



const Store = mongoose.model('Store', storeSchema);
module.exports = Store;