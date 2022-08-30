import React, { useState } from 'react'

import Blank from './Blank'


const Blanks = ({ answerLetters, selectHandler }) => {


  //console.log("load blanks")
  return (
    <div className='blankDiv'>
      { answerLetters ? 
      answerLetters.map(letter => <Blank 
                                      key={letter.id} 
                                      letter={letter}
                                      selectHandler={selectHandler}
                                      />)
    :
    <h1>Loading</h1>
    }
      </div>
  )
}

export default Blanks