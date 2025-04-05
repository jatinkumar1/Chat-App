const Conversation = require("../models/conversations.model");
const Message = require("../models/message.model");

const sendMessages = async(req,res)=>{
    // console.log("sendMessage route",req.params.id)
    try {
        const {message} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants:{$all:[senderId,receiverId]},
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        // takes more time
        // await conversation.save();
        // await newMessage.save();

        // ye kmm time lega parallely chlega
        await Promise.all(conversation.save(),newMessage.save());

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sending message",error.message)
        res.status(500).json({error:"internal server error"})
    }
}

const getMessages = async(req,res) => {
    try {
        const {id:userTocChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,userTocChatId]},
        }).populate("messages"); // ye direct saare message de rha h 

        if(!conversation){
        res.status(400).json({error:"No message there"});

        }

        res.status(201).json(conversation.messages);

    } catch (error) {
        console.log("Error in getting messages route message controller :",error.message);
        res.status(400).json({error:"Internal server error"})
    }
}


module.exports = sendMessages;
module.exports = getMessages;

// 67f1725c9f7d3063e4e9cbec
// 67f17295569746caf83a9980