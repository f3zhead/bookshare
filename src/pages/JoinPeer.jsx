import { Button, Input, Box, Heading } from '@chakra-ui/react'
import { Peer } from 'peerjs';
import { useState } from 'react';

export default function JoinPeer() {
  const [peerObject, setPeerObject] = useState(new Peer());
  const [peerData, setPeerData] = useState([]);
  const [peerID, setPeerID] = useState("");
  var catalog = JSON.parse(localStorage.getItem("catalog"))
  console.log("catalog", catalog)
  peerObject.on('connection', function(conn) {
    conn.on('open', function(data) {
      setPeerData([...peerData, data])
    })
    console.log("MOOOOOOOOOOOOOOo")
    console.log(peerData)
  })
  return (
    <Box>
      <Heading>Enter peer ID</Heading>
      <Box>Your id: {peerObject.id}</Box>
      <Input type="text" name="peerId"
        onChange={(event) => setPeerID(event.target.value)} />
      <Button colorScheme="blue" onClick={() => send(peerObject, peerID, JSON.stringify(catalog))}>Submit</Button>
    </Box>
  )
}

function send(me, destinationId, data) {
  // data should be a string already
  const conn = me.connect(destinationId)
  conn.on('open', function() {
    conn.send(data)
  })
}


