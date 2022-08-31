import React from 'react'

import Letter from './Letter'


const Letters = ({ letters, chooseHandler }) => {

  
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