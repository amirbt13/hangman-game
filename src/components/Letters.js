import React, { useMemo, useEffect } from 'react'
import uniqid from 'uniqid'

import Letter from './Letter'

import { getRandomLetters, shuffleArray } from '../alphabet'


const Letters = ({ letters, setLetters, chooseHandler, answerLetters, guessWord, setGuessWord }) => {

  const randomLetters = useMemo(() => getRandomLetters(answerLetters.length + 3), [])

  // creating random letters and mix with answer letters
  useEffect(() => {

    
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
        copyValue: letter,
        id: uniqid()
      }
    })


    setLetters([...objRandomLetters])

    console.log("effecte randomLetters-update answerLetters")
  }, [answerLetters])



  
  return (
    <div className='lettersDiv'>
     {letters.map(item => <Letter 
                              key={item.id}
                              item={item}
                              letters={letters}
                              setLetters={setLetters}
                              guessWord={guessWord}
                              setGuessWord={setGuessWord}
                                />)}
                          
    </div>
  )
}

export default Letters