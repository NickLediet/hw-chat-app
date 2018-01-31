const express = require("express")
const http = require("http")
const scoketIO = require("socket.io")

// Set server variable
const port = 4001
const app = express()
const server = http.createServer(app)
const io = scoketIO(server)

io.on('connection', socket => {
  console.log('user connected')

  socket.on('change color', color => {
    console.log(`Color changed to ${color}`)
    io.sockets.emit('change color', color)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(port, (err) => {
  if (err) console.error(new Error(err))
  console.log(`Listening on port ${port}`)
})
