import express from 'express'
import { Server } from 'http'
import SocketIo from 'socket.io'
import connection from './connection'

var app = express()
var server = Server(app)
var io = SocketIo(server)

app.use(express.static('static'))

io.on('connection', connection)

server.listen(3000, () => console.log('listening on *:3000'))
