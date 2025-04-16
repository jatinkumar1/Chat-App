const express  = require("express")
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require('path');

// 12:20 change type
// const app = express();
const PORT  = process.env.PORT || 3000;


const authRoutes = require("./routes/auth.routes.js");
const connectToMongoDB = require("./db/connectToMongoDB.js");
const messageRoute = require("./routes/message.routes.js")
const usersRoute = require("./routes/users.routes.js");
const { app, server } = require("./socket/socket.js");


dotenv.config();

app.use(express.json()); //to parse incoming request with json payloads
app.use(cookieParser());
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoute)
app.use("/api/users",usersRoute)

app.use(express.static(path.join(__dirname,'../frontenc/dist')))

app.get("/*splat",(req,res)=>{
    res.sendFile(path.join(__dirname,'../frontenc/dist/index.html'))
})



// app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));
server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
});
