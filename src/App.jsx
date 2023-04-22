// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import EditCatalog from "./pages/EditCatalog"
import './App.css'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<EditCatalog />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
};

export default App
