import React, { useState, useEffect, useMemo } from 'react'
import uniqid from 'uniqid'


import { getRandomLetters, shuffleArray } from '../alphabet'


const Letters = ({ answerLetters }) => {

  const [letters, setLetters] = useState([])

  
  const randomLetters = useMemo(() => getRandomLetters(answerLetters.length + 3), [])
  
  useEffect(() => {

    //const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length)
    if(randomLetters.length > answerLetters.length){
    for(let i = 0; i < answerLetters.length; i++){
      randomLetters.pop()
    }
  }
    for(let i = 0; i < answerLetters.length; i++){
     randomLetters.push(answerLetters[i].value)
    }

    // console.log(randomLetters + " before")
    // shuffleArray(randomLetters)
    // console.log(randomLetters + " after")

    setLetters([...randomLetters])

  }, [answerLetters])

  
  //console.log(letters)
  //console.log(answerLetters)
  return (
    <div className='lettersDiv'>
     {letters.map(letter => <div key={uniqid()} className='letter'>{letter}</div>)}
    </div>
  )
}

export default Letters