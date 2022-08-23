import { useState, useEffect } from 'react'

// Components
import Letters from "./components/Letters";
import Blanks from "./components/Blanks";

import { data } from './data'


function App() {

  const [words, setWords] = useState([])

  const [guess, setGuess] = useState("")

  useEffect(() => {
    setWords(data)
  }, [])

  useEffect(() => {
    console.log(words)
  },[words])

  return (
    <div className="App">

      <Letters words={words}/>
      <Blanks />
    
    </div>
  );
}

export default App;
