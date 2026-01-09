const router = require("express").Router()
const authMiddleware = require("../middleware/authMiddleware")
const multer = require("multer")
const resumeController = require("../controllers/resumeController")

const upload = multer({dest:"uploads/"})

router.post("/upload",authMiddleware,upload.single("resume"),resumeController.uploadResume)

router.get("/insights",authMiddleware,resumeController.getInsights)

module.exports = router;