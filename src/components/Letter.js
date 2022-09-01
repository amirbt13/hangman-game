import React from 'react'

const Letter = ({ item, letters, setLetters, guessWord, setGuessWord }) => {

// choosing a letter to palce in a blank
const chooseHandler = (value, id) => {

  console.log(guessWord)
  setGuessWord(prevGuessWord => {

    const index = prevGuessWord.filter(item => item.isSelected === true)
    return prevGuessWord.map(item => {
      
     console.log(index)
      if(item.index === index[0].index){
        return {
          ...item,
          value: value,
          isSelected: false
        }
      } else if(item.index === index[0].index + 1){
        return {
          ...item,
          isSelected: true
        } 
      } else {
        return item
      }
    })
  })

  setLetters(pervLetters => {
   return letters.map(letter => {
      if(letter.id === id){
        return {
          ...letter,
          value: ""
        }
      } else {
        return letter
      }
    })
  })
  
}

  return (
    <div className='letter' onClick={() => chooseHandler(item.value, item.id)}>
        {item.value}
    </div>
  )
}

export default Letter