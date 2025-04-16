// import {Server} from 'socket-io'
const {Server} = require('socket.io')
// import http, { get, METHODS } from 'http'
const http = require('http')
// import express from 'express';
const express = require('express')

const app = express();


const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:["http://localhost:5173"],
        METHODS:["GET","POST"]
    }
});

const getReceiverSocketId = (receiverId) =>{
    return userSocketMap[receiverId];
}
 
const userSocketMap = {} //{userId,spcketId} map where we store the online user
io.on('connection',(socket)=>{
    console.log("a user connected",socket.id)

    const userId = socket.handshake.query.userId;
    if(userId != "undefined"){
        userSocketMap[userId] = socket.id;
    }

    io.emit("getOnlineUsers",Object.keys(userSocketMap));//is used to send notify(events) to enveryoneto all the connected clients

    //is used to listen all the events 
    socket.on("disconnect",()=>{
        console.log("user disconnected",socket.id)
        delete userSocketMap[userId];
        io.emit("getOnlineUser",Object.keys(userSocketMap));
    })
})


// export {app,io,server
module.exports = {app,io,server,getReceiverSocketId}