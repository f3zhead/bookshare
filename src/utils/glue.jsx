import { Peer } from 'peerjs';
import { useState } from 'react';


var me = new Peer();
const [peerData, setPeerData] = useState([]);
me.on('connection', function(conn) {
  conn.on('open', function(data) {
   setPeerData([...peerData, data]) 
  })
})

function send(me, destinationId, data) {
  // data should be a string already
  const conn = me.connect(peerId)
  conn.on('open', function() {
    conn.send(data)
  })
}


