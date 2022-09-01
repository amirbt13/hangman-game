import React from 'react'

const Blank = ({ item, setGuessWord, setLetters}) => {

  // selecting a blank 
  const selectHandler = (id) => {
    

    setGuessWord(prevGuessWord => {

      
      return prevGuessWord.map(letter => {

       if (letter.id === id){
        return {
          ...letter,
          isSelected: true
        }

      } else {
        
        return {
          ...letter,
          isSelected: false
        }
       }
      })
      
    })
    console.log("select handler")
  }
  
    // removing a character from a blank

  const dblClickHandler = (value, id) => {

    setGuessWord(prevGuessWord => {

      return prevGuessWord.map(letter => {
        
        if(letter.id === id && letter.value !== ""){
          return {
            ...letter,
            value: ""
          }
        } else {
          return letter
        }
      })
    })

    setLetters(pervLetters => {
      return pervLetters.map(letter => {
        if(letter.copyValue === value && letter.value === ""){
          return {
            ...letter,
            value: letter.copyValue
          }
        } else {
          return letter
        }
      })
    })
  }
    
  //console.log("load blank")
  return (
    <div 
        className={`blank ${item.isSelected && "selected"}`} 
        onClick={() => selectHandler(item.id)}
        onDoubleClick={() => dblClickHandler(item.value, item.id)} >
      {item.value}
    </div>
  )
}

export default Blank