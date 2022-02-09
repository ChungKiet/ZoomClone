const express = require("express")
const app = express()
const server = require("http").Server(app)
const io = require("socket.io")(server)

const port = 3001
const users = []

const addUser = (userName, roomId) => {
   users.push({
      userName: userName,
      roomId: roomId
   })
}

const userLeave = (userName) => {
   users = users.filter(user => user.userName != userName)
}

const getRoomUsers = (roomId) => {
   return users.filter(user => user.roomId == roomId)
}

io.on('connection', socket => {
   console.log("Someone Connected!")
   socket.on("join-room", ({roomId, userName}) =>{
      console.log("User join room")
      console.log(roomId)
      console.log(userName)
      socket.join(roomId)
      addUser(userName, roomId)
      socket.to(roomId).emit("user-connected", userName)
      io.to(roomId).emit("all-users", getRoomUsers(roomId))

      socket.on("disconnect", () => {
         console.log("disconnected")
         socket.leave(roomId)
         userLeave(userName)
         io.to(roomId).emit("all-users", getRoomUsers(roomId))
      })
   })
})

app.get("/", (req, res) => {
   res.send("Hello World!")
})

server.listen(port, () => {
   console.log('ZoomClone API listener on localhost:3001')
})