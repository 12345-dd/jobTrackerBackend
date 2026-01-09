require("dotenv").config()
const express = require("express")
const connectDb = require("./db")
const cors = require("cors")

const app = express()

const allowedOrigins = [
  'http://localhost:5173',              
  'https://jobanalytic.netlify.app'      
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
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