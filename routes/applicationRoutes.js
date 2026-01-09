const router = require("express").Router()
const applicationController = require("../controllers/applicationController")
const authMiddleware = require("../middleware/authMiddleware")

router.get("/",authMiddleware,applicationController.getApplications);

router.post("/",authMiddleware,applicationController.createApplication)

router.put("/:id",authMiddleware,applicationController.updateApplication)

router.delete("/:id",authMiddleware,applicationController.deleteApplication)

module.exports = router
