import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
   const navigate = useNavigate()

   const startHandler = () => {
    navigate('/game')
   }


  return (
    <div className='App'>
        <h1>Wellcome To Hangman Game</h1>
        <h4>Click the START button</h4>
        <button className='startBtn' onClick={startHandler}>START</button>
    </div>
  )
}

export default Landing;