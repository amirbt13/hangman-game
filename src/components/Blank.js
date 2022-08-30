import React from 'react'

const Blank = ({ letter, selectHandler}) => {

    
  //console.log("load blank")
  return (
    <div className={`blank ${letter.isSelected && "selected"}`} onClick={() => selectHandler(letter.id)}>
      
    </div>
  )
}

export default Blank