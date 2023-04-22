import { Image, Card, VStack, Text, CardHeader, CardBody, CardFooter, SimpleGrid, Box, Input, } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import axios from 'axios';
function SearchBox() {
  const [APIData, setAPIData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    console.log(APIData)
    axios.get("https://openlibrary.org/search.json", { params: { "q": query, "fields": "docs,title,author_name,key" } }).then((response) => { setAPIData(response.data.docs) })
  }, [query])
  return (
    <Box>
      <VStack spacing={8}>
        <Input
          placeholder="Search for a book"
          type="search"
          onChange={(event) => setQuery(event.target.value)} />
        <SimpleGrid columns={5} spacing={7}>
          {APIData.map(item => (
            <Card>
              <CardBody>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Slaughterhouse-Five_%28first_edition%29_-_Kurt_Vonnegut.jpg/220px-Slaughterhouse-Five_%28first_edition%29_-_Kurt_Vonnegut.jpg" />
                <Text>{item.title}</Text>
                <Text>{(item.author_name || []).join(", ")}</Text>
              </CardBody>
            </Card>
          )
          )}
        </SimpleGrid>
      </VStack>
    </Box>
  )
}

export default SearchBox;
