const mongoose = require("mongoose")
const Schema = mongoose.Schema

const resumeSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    text:{
        type: String
    },
    keywordsFound:{
        type: [String]
    },
    missingKeywords:{
        type:[String]
    },
    resumeScore:{
        type:Number,
        min:0,
        max:100
    },
    suggestions:{
        type:String
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Resume",resumeSchema)