import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

// Components
import Letters from "./components/Letters";
import Blanks from "./components/Blanks";

// Raw Data
import { data } from './data'


const Game = () => {
  //console.log("app render avval")

  const [words, setWords] = useState({
    words: '',
    isLoaded: false
  })

  // states
  const [answerLetters, setAnswerLetters] = useState([])

  const [guessWord, setGuessWord] = useState([])

  const [letters, setLetters] = useState([])

  const [win, setWin] = useState(false)

  const [clue, setClue] = useState("")


  // getting word from data when page loads
  useEffect(() => {
    const getWords = () => {
      setWords({

        words: data,
        isLoaded: true
        
      })
      //console.log("effecte loade words-on mount")
    }
    getWords()
  }, [])


  // creating a random answer and spliting it to its characters
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
      //console.log("effecte setting answerLetters-update words")


      // eslint-disable-next-line 
  }, [words])

  


  // checking if win 
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
    
    //console.log("effecte teste win-guess word update")
  }, [guessWord])


  useEffect(() => {
    if(answerLetters.length > 0){

    const answerWordStr = answerLetters.reduce((i, j) => {
      return i + j
    }, "")

    const clueArr = data.filter(item => item.name === answerWordStr)

    const clueObj = clueArr[0]
    
    setClue(clueObj.clue)
  }

    //console.log("effecte clue- update answerLetters")
  }, [answerLetters])


//console.log("app render akhar")
  return (
    <div className="App">
      <h1>Hangman</h1>
      <h3>Clue: {clue}</h3>
      <Letters answerLetters={answerLetters}
               setAnswerLetters={setAnswerLetters}
               letters={letters}
               setLetters={setLetters}
               guessWord={guessWord}
               setGuessWord={setGuessWord}/>
      <Blanks 
               answerLetters={answerLetters}
               setAnswerLetters={setAnswerLetters}
               guessWord={guessWord}
               setGuessWord={setGuessWord}
               setLetters={setLetters}/>

          {win && <div className='winDiv'>
            <h1>You Won!</h1>
            <button><Link to="/">back to main page</Link></button>
            </div> }
 
    </div>
  );
}

export default Game;
