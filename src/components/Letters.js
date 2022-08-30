import React, { useState, useEffect, useMemo } from 'react'
import uniqid from 'uniqid'


import { getRandomLetters, shuffleArray } from '../alphabet'
import Letter from './Letter'


const Letters = ({ answerLetters, chooseHandler }) => {

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
     randomLetters.push(answerLetters[i])
    }

    // console.log(randomLetters + " before")
     shuffleArray(randomLetters)
    // console.log(randomLetters + " after")

    const objRandomLetters = randomLetters.map(letter => {
      return {
        value: letter,
        id: uniqid()
      }
    })


    setLetters([...objRandomLetters])

  }, [answerLetters])

  
  //console.log(letters)
  //console.log(answerLetters)
  return (
    <div className='lettersDiv'>
     {letters.map(letter => <Letter 
                              key={letter.id} 
                              chooseHandler={chooseHandler}
                              letter={letter}
                                />)}
                          
    </div>
  )
}

export default Letters