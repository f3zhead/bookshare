import { Input } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import axios from 'axios';
function SearchBox() {
  const [APIData, setAPIData] = useState(["nya", "bob"]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios.get("https://openlibrary.org/search.json", { params: { "q": query, "fields": "docs,title" } }).then((response) => { setAPIData(response.data.docs) })
  }, [query])
  return (
    <div>
      <Input
        placeholder="Search for a book"
        type="search"
        onChange={(event) => setQuery(event.target.value)} />
      <ul>
        {APIData.map(item => (
          <li key={item.key}>{JSON.stringify(item.title)}</li>
        )
        )}
      </ul>
    </div>
  )
}
function SearchBar() {

}

export default SearchBox;
