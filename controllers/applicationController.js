const applicationSchema = require("../models/applicationModel")

const getApplications = async(req,res) => {
    try{
        const allApplications = await applicationSchema.find({userId: req.user._id}).sort({createdAt:-1})
        res.status(200).json({
            message:"Successfully Getting all applications",
            data:allApplications
        })
    }catch(err){
        res.status(500).json({
            message:"Internal Server Error",
            data:err
        })
    }
}

const createApplication = async(req,res) => {
    try{
        const data = {...req.body,userId:req.user._id}
        const newApplication = await applicationSchema.create(data)
        res.status(201).json({
            message:"Application Created Successfully",
            data: newApplication
        })
    }catch(err){
        res.status(500).json({
            message:"Internal Server Error",
            data:err
        })
    }
}

const updateApplication = async(req,res) => {
    try{
        const changeApplication = await applicationSchema.findOneAndUpdate(
            {_id:req.params.id,userId:req.user._id},
            {$set:req.body},
            {new:true}
        )

        if(!changeApplication){
            return res.status(400).json({
                message:"Application Not Found"
            })
        }else{
            res.status(201).json({
                message:"Application Updated Successfully",
                data:changeApplication
            })
        }
    }catch(err){
        res.status(500).json({
            message:"Internal Server Error",
            data:err
        })
    }
}

const deleteApplication = async(req,res) => {
    try{
        const removeApplication = await applicationSchema.findOneAndDelete({_id:req.params.id,userId:req.user._id})
        if(!removeApplication){
            return res.status(400).json({
                message:"Application Not found"
            })
        }else{
            res.status(204).json({
                message:"Deleted Application Successfully"
            })
        }
    }catch(err){
        res.status(500).json({
            messsage:"Internal Server Error",
            data:err
        })
    }
}

module.exports = {getApplications,createApplication,updateApplication,deleteApplication}   