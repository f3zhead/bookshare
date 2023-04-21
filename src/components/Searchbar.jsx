import { Input } from '@chakra-ui/react'
import { useState } from 'react';
function SearchBar() {
  const [query, setQuery] = useState("");
  return (
    <Input
      placeholder="Search for a book"
      type="search"
      onChange={(event) => setQuery(event.target.value)} />
  )
}

export default SearchBar;
