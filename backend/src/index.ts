import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config"
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoutes";

// connect to Mongodb
mongoose
.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(()=> console.log("Connected to database!"))

// Create a new express server and assign to app variable
const app = express();
app.use(express.json())
app.use(cors())

// Any request with these terms must be routed to myUserRoute controller
app.use("/api/my/user", myUserRoute)

// Define the port number this will be hosted
app.listen(7000, () => {
    console.log("server started on localhost:7000");
});