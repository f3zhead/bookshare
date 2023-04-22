import { useState } from "react";
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

function Catalog() {
  return (
    <SearchBox />
  )
}
export default Catalog;
