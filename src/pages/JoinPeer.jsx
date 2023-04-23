import { Button, ButtonGroup, Image, Card, VStack, Text, CardHeader, CardBody, CardFooter, SimpleGrid, Box, Input, } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
// import {form} from <html></html>

function JoinPeer() {
    //console.log("hi")
    return(
        <form onsubmit="myfunction()">
            Enter ID: <Input type="text" name="fname"></Input>
            <input type="submit" value="Submit"></input>
        </form>
    )
    // return (
    // <form>
    //     Enter name: <input type="text" name="fname">
    //     <input type="submit" value="Submit">
    // </form>
    // )
// return(
//     // <Input
//     //     placeholder="Enter ID"
//     //     type="search"
//     //     onChange={(event) => console.log(event)} />
//     <form action="/action_page.php" onsubmit="myFunction()">
//     Enter name: <input type="text" name="fname">
//     <input type="submit" value="Submit">
//     </form>
// )
}

export default JoinPeer;