import React from 'react'

import Blank from './Blank'


const Blanks = ({ dblClickHandler, selectHandler, guessWord }) => {

  



  //console.log("load blanks")
  return (
    <div className='blankDiv'>
      { guessWord ? 
      guessWord.map(letter => <Blank 
                                      key={letter.id} 
                                      letter={letter}
                                      selectHandler={selectHandler}
                                      dblClickHandler={dblClickHandler}
                                      //guessWord={guessWord}
                                      />)
    :
    <h1>Loading</h1>
    }
      </div>
  )
}

export default Blanks