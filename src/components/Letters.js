import React, { useState, useEffect } from 'react'
import uniqid from 'uniqid'


import { getRandomLetters, shuffleArray } from '../alphabet'


const Letters = ({ answerLetters }) => {

  const [letters, setLetters] = useState([])

  useEffect(() => {

    

    //const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length)
    const randomLetters = getRandomLetters(answerLetters.length + 3)
    
    for(let i = 0; i < answerLetters.length; i++){
     randomLetters.push(answerLetters[i])
    }

    shuffleArray(randomLetters)

    setLetters([...randomLetters])

  }, [answerLetters])

  
  console.log(letters)
  console.log(answerLetters)
  return (
    <div className='lettersDiv'>
     {letters.map(letter => <div key={uniqid()} className='letter'>{letter}</div>)}
    </div>
  )
}

export default Letters