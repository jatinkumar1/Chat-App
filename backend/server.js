const express  = require("express")
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

// 12:20 change type
const app = express();
const PORT  = process.env.PORT || 3000;


const authRoutes = require("./routes/auth.routes.js");
const connectToMongoDB = require("./db/connectToMongoDB.js");
const messageRoute = require("./routes/message.routes.js")
const usersRoute = require("./routes/users.routes.js")

dotenv.config();

app.use(express.json()); //to parse incoming request with json payloads
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.send("Hello World 3");
})


app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoute)
app.use("/api/users",usersRoute)




// app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));
app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
});
