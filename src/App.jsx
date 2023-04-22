// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Catalog from "./pages/Catalog"
import './App.css'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Catalog />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
};

export default App
