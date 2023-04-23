import { SimpleGrid, Card, CardBody, Image, Text, Button, Input, Box, Heading } from '@chakra-ui/react'
import { Peer } from 'peerjs';
import { useState } from 'react';

export default function JoinPeer() {
  const [peerObject, setPeerObject] = useState(new Peer());
  const [peerData, setPeerData] = useState([]);
  const [peerID, setPeerID] = useState("");
  var catalog = JSON.parse(localStorage.getItem("catalog"))
  peerObject.on('connection', function(conn) {
    console.log('connection', conn)
    conn.on('data', function(data) {
      console.log('data received', data)
      setPeerData([...peerData, ...JSON.parse(data)])
      console.log("data stored", peerData)
    })
  })
  return (
    <Box>
      <Heading>Enter peer ID</Heading>
      <Box>Your id: {peerObject.id}</Box>
      <Input type="text" name="peerId"
        onChange={(event) => setPeerID(event.target.value)} />
      <Button colorScheme="blue" onClick={() => send(peerObject, peerID, JSON.stringify(catalog))}>Submit</Button>
      <SimpleGrid columns={5}>
        {
          peerData.map((book) => {

            <Card>
              <CardBody>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Slaughterhouse-Five_%28first_edition%29_-_Kurt_Vonnegut.jpg/220px-Slaughterhouse-Five_%28first_edition%29_-_Kurt_Vonnegut.jpg" />
                <Text>{book.title}</Text>
                <Text>{(book.author_name || []).join(", ")}</Text>
              </CardBody>
            </Card>
          })}
      </SimpleGrid>
      <Text>{JSON.stringify(peerData)}</Text>
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


