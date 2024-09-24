import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Info from './Components/Info'
import Card from './Components/Card'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  

  return (
    <>
        <Router>
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/success" element={<Card />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
