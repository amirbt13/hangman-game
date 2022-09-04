import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Landing from './Landing'
import Game from './Game'

import './App.css'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path="/game" element={<Game />} />
            <Route path="/" element={<Landing />} />
        </Routes>
    </div>
  )
}

export default App