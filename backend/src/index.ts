import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config"
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoutes";
import {v2 as cloudinary} from "cloudinary";

// connect to Mongodb
mongoose
.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(()=> console.log("Connected to database!"));
// connect to cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Create a new express server and assign to app variable
const app = express();
app.use(express.json())
app.use(cors())

app.get("/health", async (req: Request, res:Response) =>{
    res.send({message: "health OK!"});
});

// Any request with these terms must be routed to myUserRoute controller
app.use("/api/my/user", myUserRoute)

// Define the port number this will be hosted
app.listen(7000, () => {
    console.log("server started on localhost:7000");
});