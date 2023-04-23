import { useControllableState, Button, ButtonGroup, Image, Card, Text, CardBody, CardFooter } from '@chakra-ui/react'
import { useEffect } from 'react';

function SearchResult({ book, catalog, setCatalog }) {
  const [inCatalog, setInCatalog] = useControllableState({ defaultValue: book in catalog })
  useEffect(
    () => {
      if (inCatalog) {
        setCatalog(catalog.filter((item) => (item != book)))
      }
      else {
        setCatalog([...catalog, book])
      }
    }
    , [inCatalog]
  )
  return (
    <Card>
      <CardBody>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Slaughterhouse-Five_%28first_edition%29_-_Kurt_Vonnegut.jpg/220px-Slaughterhouse-Five_%28first_edition%29_-_Kurt_Vonnegut.jpg" />
        <Text>{book.title}</Text>
        <Text>{(book.author_name || []).join(", ")}</Text>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing={2}>
          <Button variant="solid"
            colorScheme={inCatalog ? "red" : "blue"}
            // smth weird goin on here
            onClick={() => (setInCatalog(!inCatalog))}>
            
            Add to Catalog
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )

}
export default SearchResult

