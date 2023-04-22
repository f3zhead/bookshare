import { Box, Input, OrderedList, ListItem } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import axios from 'axios';
function SearchBox() {
  const [APIData, setAPIData] = useState(["nya", "bob"]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios.get("https://openlibrary.org/search.json", { params: { "q": query, "fields": "docs,title" } }).then((response) => { setAPIData(response.data.docs) })
  }, [query])
  return (
    <Box>
      <Input
        placeholder="Search for a book"
        type="search"
        onChange={(event) => setQuery(event.target.value)} />
      <OrderedList>
        {APIData.map(item => (
          <ListItem key={item.key}>{JSON.stringify(item.title)}</ListItem>
        )
        )}
      </OrderedList>
    </Box>
  )
}

export default SearchBox;
