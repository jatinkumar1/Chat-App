const User = require("../models/user.model");

const usersForSideBar = async(req,res)=>{
    try {
        const loggedInUser = req.user._id;

        // ye filterd user h isme hmm apne app ko nhi bhj skte
        const filteredUsers = await User.find({
            _id:{$ne:loggedInUser}
        }).select("-password")

        res.status(201).json(filteredUsers);

        // const allUsers = await User.find(); // isme sbko message krskte
    } catch (error) {
        console.log("error in getting users user controller",error.message);
        res.status(401).json({error:"internal server error"});
    }
}

module.exports = usersForSideBar;