import React from 'react'
import uniqid from 'uniqid'

const Blanks = ({ answerLetters }) => {

  //console.log(answerLetters)
  
  return (
    <div className='blankDiv'>
      { answerLetters ? 
      answerLetters.map(letter => <div key={uniqid()} className='blank'>_</div>)
    :
    <h1>Loading</h1>
    }
      </div>
  )
}

export default Blanks