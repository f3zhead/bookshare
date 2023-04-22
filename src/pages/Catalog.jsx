import {useState} from "react"
import { Heading } from "@chakra-ui/react";
import { Button, ButtonGroup, Image, Card, VStack, Text, CardHeader, CardBody, CardFooter, SimpleGrid, Box, Input, } from '@chakra-ui/react'
function Catalog() {
  console.log("hi")
  const [catalog, setCatalog] = useState(JSON.parse(localStorage.getItem("catalog")) || []);
  console.log(catalog)

  return (
    <div>
      <Heading>Your Catalog</Heading>
      <Box>
      <VStack spacing={8}>
        <SimpleGrid columns={5} spacing={7}>
          {catalog.map(item => (
            <Card>
              <CardBody>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Slaughterhouse-Five_%28first_edition%29_-_Kurt_Vonnegut.jpg/220px-Slaughterhouse-Five_%28first_edition%29_-_Kurt_Vonnegut.jpg" />
                <Text>{item.title}</Text>
                <Text>{(item.author_name || []).join(", ")}</Text>
              </CardBody>
              <CardFooter>
                <ButtonGroup spacing={2}>
                  <Button variant="solid" colorScheme={item in catalog ? "green" : "red"} onClick={() => setCatalog([...catalog, item])}>
                    Remove from Catalog
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          )
          )}
        </SimpleGrid>
      </VStack>
    </Box>
    </div>
  )
}


export default Catalog
