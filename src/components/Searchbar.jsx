import { Button, ButtonGroup, Image, Card, VStack, Text, CardHeader, CardBody, CardFooter, SimpleGrid, Box, Input, } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchResult from '../components/SearchResult'

function SearchBox() {
  const [APIData, setAPIData] = useState([]);
  const [query, setQuery] = useState("");
  const [catalog, setCatalog] = useState(JSON.parse(localStorage.getItem("catalog")) || []);
  useEffect(() => {
    console.log(APIData)
    axios.get("https://openlibrary.org/search.json", { params: { "q": query, "fields": "docs,title,author_name,key" } }).then((response) => { setAPIData(response.data.docs) })
  }, [query])

  useEffect(() => {
    console.log("catalog")
    localStorage.setItem("catalog", JSON.stringify(catalog))
  }, [catalog])
  return (
    <Box>
      <VStack spacing={8}>
        <Input
          placeholder="Search for a book"
          type="search"
          onChange={(event) => setQuery(event.target.value)} />
        <SimpleGrid columns={5} spacing={7}>
          {
            APIData.map(book => (
              <SearchResult book={book} catalog={catalog} setCatalog={setCatalog} />
            )
            )}
        </SimpleGrid>
      </VStack>
    </Box>
  )
}


export default SearchBox;
