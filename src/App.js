import { useState, useEffect } from 'react'

import uniqid from 'uniqid'

// CSS
import "./App.css"

// Components
import Letters from "./components/Letters";
import Blanks from "./components/Blanks";

// Data
import { data } from './data'


function App() {
  console.log("app render avval")

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
      console.log("effecte mount app")
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
          const randomAnswerObj = randomAnswerLetters.map(letter => {
            return {
              value: letter,
              isSelected: false,
              id: uniqid()
            }
          })
          setAnswerLetters([
            ...randomAnswerObj
          ])
    }
      console.log("effecte update roo words")


      // eslint-disable-next-line 
  }, [words])
  


  const selectHandler = (id) => {
    //console.log(id)

    setAnswerLetters(prevAnswerLetters => {

      //console.log(prevAnswerLetters)
      return prevAnswerLetters.map(letter => {

       if (letter.id === id ){
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


console.log("app render akhar")
  return (
    <div className="App">
      <h1>Hangman</h1>

      <Letters answerLetters={answerLetters}/>
      <Blanks answerLetters={answerLetters} selectHandler={selectHandler}/>
 
    </div>
  );
}

export default App;
