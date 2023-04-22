import { useState } from "react";
import { Heading } from "@chakra-ui/react";
import SearchBox from "../components/Searchbar";



function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books))
  }, [books]);
  return (
    "nothing here"
  )
}

function EditCatalog() {
  return (
    <div>
      <Heading>Your Catalog</Heading>
      <SearchBox />
    </div>
  )
}
export default Catalog;
