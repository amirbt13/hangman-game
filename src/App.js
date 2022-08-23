import { useState, useEffect } from 'react'

// CSS
import "./App.css"

// Components
import Letters from "./components/Letters";
import Blanks from "./components/Blanks";

import { data } from './data'


function App() {

  const [words, setWords] = useState([])

  const random = Math.floor(Math.random() * 3)

  const randomWord = words[random]

  useEffect(() => {
    setWords(data)
  }, [])

  //  useEffect(() => {
  //    console.log(typeof words)
  //    console.log(Object.prototype.toString.call(words))
  // },[words])

  return (
    <div className="App">
      <h1>Hangman</h1>

      <Letters words={words}/>
      <Blanks word={randomWord}/>
    
    </div>
  );
}

export default App;
