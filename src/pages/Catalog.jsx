import { useState } from "react";
import SearchBar from "../components/Searchbar";



function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books))
  }, [books]);
  return (
    "nothing here"
  )
}

function Catalog() {
  return (
    <SearchBar />
  )
}
export default Catalog;
