import React from 'react'

const Blanks = ({ word }) => {

  //const [guess, setGuess] = useState("")
  const count = word && word.name.split('')
  
  word && console.log(count)
  
  return (
    <div className='blankDiv'>
      {word && count.map(letter => <div className='blank'>_</div>)}
      </div>
  )
}

export default Blanks