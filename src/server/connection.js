import SimplePeer from 'simple-peer'
import wrtc from 'wrtc'

const connection = (socket) => {
  const peer = new SimplePeer({ wrtc })

  peer.on('signal', (data) => socket.emit('signal', data))
  peer.on('connect', () => console.log('connected'))

  socket.on('signal', (data) => peer.signal(data))
}

export default connection
