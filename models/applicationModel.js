const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    company:{
       type:String,
       required:true 
    },
    role:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Applied","HR","Technical","Offer","Rejected"],
        default:"Applied"
    },
    package:{
        type:Number
    },
    jobLink:{
        type:String
    },
    notes:{
        type:String
    },
    deadline:{
        type:Date
    },
    resumeFile:{
        type:String
    }
},
{
    timestamps:true
})

module.exports = mongoose.model("Application",applicationSchema)