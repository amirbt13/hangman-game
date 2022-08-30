import React, { useState } from 'react'

const Blank = ({ letter, selectHandler, dblClickHandler}) => {

  

    
  //console.log("load blank")
  return (
    <div 
        className={`blank ${letter.isSelected && "selected"}`} 
        onClick={() => selectHandler(letter.id)}
        onDoubleClick={() => dblClickHandler(letter.id)} >
      {letter.value}
    </div>
  )
}

export default Blank