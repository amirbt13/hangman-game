import React from 'react'

const Letter = ({ chooseHandler, letter }) => {
  return (
    <div className='letter' onClick={() => chooseHandler(letter.value, letter.id)}>
        {letter.value}
    </div>
  )
}

export default Letter