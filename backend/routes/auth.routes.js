const express = require("express");
const User = require("../models/user.model.js")
const bcrypt = require("bcryptjs");
const generateToken = require("../tools/generateToken.js");
const router  = express.Router();

router.post("/signup",async (req,res)=>{
    // res.send("signup route");
    try {
        const {fullName,username,password,confirmPassword,gender} = req.body;
        if(password !== confirmPassword){
            return res.status(400).json({error:"Passwords don't match"})
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({error:"Username already exists"});
        }

        // hash the passwords
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);
        // generate imge profile pic https://avatar.iran.liara.run/public/boy

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password:hashPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic:girlProfilePic
        })

        if(newUser){
            // ab hmm jwt token gnerate krenge newuser ke liye
            generateToken(newUser._id,res);
            await newUser.save();
    
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            });
        }else{
            res.status(400).json({error:"Invalid user data"});
        }

    } catch (error) {
        console.log("error in signup auth",error.message);
        res.status(500).json({error:"Internal server error"});
    }
})

router.post("/login",async (req,res)=>{
    // res.send("Login route");
    try {
        const {username,password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password,user.password);
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"Invalid Details"});
        }


        generateToken(user._id,res);
        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username:user.username,
            profilePic:user.profilePic
        })
    } catch (error) {   
        console.log("Error in login auth",error.message);
        res.status(400).json({error:"Internal server error"});
    }



})

router.post("/logout",(req,res)=>{
    // res.send("Logout route");
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"Loged Out Successfully"});
        
    } catch (error) {
        console.log("Error while logging out",error.message);
        res.status(400).json({message:"Inter server error"});
    }
})



// export default router; // used in es6 modules 
module.exports = router;