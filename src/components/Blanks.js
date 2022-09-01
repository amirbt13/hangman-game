import React, { useEffect } from 'react'
import uniqid from 'uniqid'

import Blank from './Blank'


const Blanks = ({ guessWord, setGuessWord, answerLetters, setLetters }) => {

  // creating guessWord (blanks) when answer is done
  useEffect(() => {
    let sample = [] 
    for(let i = 0; i < answerLetters.length; i++){
      sample.push({
        value: "",
        isSelected: false,
        id: uniqid(),
        index: i
      })
    }
    const guessObj = sample.map(guessItem => {

      if(guessItem.index === 0){
        return {
          ...guessItem,
          isSelected: true
        }

      } else {
        return {...guessItem}
      }

    })

    setGuessWord([...guessObj])

    console.log("effecte create guessWord baraya blanks-update e answerLatters")
  }, [answerLetters])



  //console.log("load blanks")
  return (
    <div className='blankDiv'>
      { guessWord ? 
      guessWord.map(item => <Blank 
                                      key={item.id} 
                                      item={item}
                                      setLetters={setLetters}
                                      guessWord={guessWord}
                                      setGuessWord={setGuessWord}
                                      />)
    :
    <h1>Loading</h1>
    }
      </div>
  )
}

export default Blanks