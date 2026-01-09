const fs = require("fs/promises")
const pdfParse = require("pdf-parse")
const resumeSchema = require("../models/resumeModel")

const keywords = ['React', 'Node', 'Express', 'MongoDB', 'JavaScript', 'HTML', 'CSS', 'Git', 'AWS', 'Docker', 'SQLite']

const uploadResume = async(req,res) => {
    let filePath;

    try{
        filePath = req.file.path;
        const fileDetails = await fs.readFile(filePath)
        const pdfData = await pdfParse(fileDetails)
        const text = pdfData.text || "";

        const found = []; 
        const missing = [];
        const lowerText = text.toLowerCase()

        for(let imp of keywords){
            lowerText.includes(imp.toLowerCase()) ? found.push(imp) : missing.push(imp)
        }

        const suggestions = missing.length === 0 ? "Your resume contains wide range of key skills" : `Consider adding these skills: ${missing.slice(0,5).join(", ")}`;
        const resumeScore = Math.round((found.length / keywords.length) * 100);

        const insight = await resumeSchema.create({
            userId: req.user._id,
            keywordsFound: found,
            missingKeywords: missing,
            resumeScore,
            suggestions
        });

        res.status(201).json({
            data: insight
        })
    }catch(err){
        res.status(500).json({
            message:"Failed to process resume"
        })
    } finally{
        if(filePath){
            try{
                await fs.unlink(filePath)
            }catch(err){
                console.log(err)
            }
        }
    }
};

const getInsights = async(req,res) => {
    try{
        const insights = await resumeSchema.find({userId:req.user._id}).sort({createdAt:-1})
        res.status(200).json({
            message:"Getting insights from resume",
            data: insights
        })
    }catch(err){
        res.status(500).json({
            message:"failed to fetch insights from resume"
        })
    }
}

module.exports = {uploadResume,getInsights}