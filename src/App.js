import { useState, useEffect } from 'react'

// CSS
import "./App.css"

// Components
import Letters from "./components/Letters";
import Blanks from "./components/Blanks";

import { data } from './data'


function App() {

  const [words, setWords] = useState({
    words: '',
    isLoaded: false
  })

  const [answerLetters, setAnswerLetters] = useState([])


  
  useEffect(() => {
    const getWords = () => {
      setWords({

        words: data,
        isLoaded: true
        
      })
      //console.log(words)
    }
    getWords()
  }, [])

  useEffect(() => {

        if(words.isLoaded){
          //console.log(words.words.length)
          const randomIndex = Math.floor(Math.random() * words.words.length)
          //console.log(randomIndex)
          const randomAnswer = words.words[randomIndex]
          //console.log(randomAnswer)
          const randomAnswerLetters = Object.values(randomAnswer)[0].split('')
          //console.log(randomAnswerLetters)
          setAnswerLetters([
            ...randomAnswerLetters
          ])
    }
      //console.log(answerLetters)
  }, [words])
  

  return (
    <div className="App">
      <h1>Hangman</h1>

      <Letters answerLetters={answerLetters}/>
      <Blanks answerLetters={answerLetters}/>
      
    </div>
  );
}

export default App;
