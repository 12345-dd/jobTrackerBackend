require("dotenv").config()
const express = require("express")
const connectDb = require("./db")
const cors = require("cors")

const app = express()

app.use(cors({
    origin: process.env.CLIENT_URL || "https://jobanalytic.netlify.app/",
    credentials: true
}));
app.use(express.json())

const userRoutes = require("./routes/userRoutes")
const appplicationRoutes = require("./routes/applicationRoutes")
const resumeRoutes = require("./routes/resumeRoutes")

app.use("/",userRoutes)
app.use("/applications",appplicationRoutes)
app.use("/resume",resumeRoutes)

const PORT = process.env.PORT

connectDb().then(() => {
    app.listen(PORT,() => {
        console.log(`Server Started at PORT-${PORT}`)
    })
}).catch((err) => {
    console.log("Failed to connect DB",err)
})