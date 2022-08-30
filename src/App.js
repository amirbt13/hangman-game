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


  const [guessWord, setGuessWord] = useState([])

  const [win, setWin] = useState(false)


  
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
          
          setAnswerLetters([
            ...randomAnswerLetters
          ])
    }
      console.log("effecte update roo words")


      // eslint-disable-next-line 
  }, [words])



  useEffect(() => {
    let sample = [] 
    for(let i = 0; i < answerLetters.length; i++){
      sample.push("")
    }
    const guessObj = sample.map(guessItem => {
      return {
        value: guessItem,
        isSelected: false,
        id: uniqid()
      }
    })
    setGuessWord([...guessObj])
  }, [answerLetters])
  


  const selectHandler = (id) => {
    //console.log(id)

    setGuessWord(prevGuessWord => {

      //console.log(prevAnswerLetters)
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

  const dblClickHandler = (id) => {

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
  }


  const chooseHandler = (value) => {
    setGuessWord(prevGuessWord => {
     return prevGuessWord.map(item => {
        if(item.isSelected === true){
          return {
            ...item,
            value: value
          }
        } else {
          return item 
        }
      })
    })
  }

  useEffect(() => {
    const answerWordStr = answerLetters.reduce((i, j) => {
      return i + j
    }, "")
    const guessWordStr = guessWord.reduce((total, item) => {
      return total + item.value
    }, "")

    if(guessWordStr !== "" && answerWordStr === guessWordStr){
      setWin(true)
    } else {
      setWin(false)
    }
    
  }, [guessWord])


console.log("app render akhar")
  return (
    <div className="App">
      <h1>Hangman</h1>

      <Letters answerLetters={answerLetters} chooseHandler={chooseHandler}/>
      <Blanks 
          answerLetters={answerLetters} 
          selectHandler={selectHandler}
          dblClickHandler={dblClickHandler} 
          guessWord={guessWord}/>

          {win && <h1>You Won!</h1> }
 
    </div>
  );
}

export default App;
