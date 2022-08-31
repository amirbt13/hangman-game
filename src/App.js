import { useState, useEffect, useMemo } from 'react'

// id
import uniqid from 'uniqid'

// CSS
import "./App.css"

// Components
import Letters from "./components/Letters";
import Blanks from "./components/Blanks";

// Data
import { data } from './data'

// helper
import { getRandomLetters, shuffleArray } from './alphabet'


function App() {
  console.log("app render avval")

  const [words, setWords] = useState({
    words: '',
    isLoaded: false
  })

  // states
  const [answerLetters, setAnswerLetters] = useState([])

  const [guessWord, setGuessWord] = useState([])

  const [letters, setLetters] = useState([])

  const [win, setWin] = useState(false)


  // getting word from data when page loads
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
      console.log("effecte update roo words")


      // eslint-disable-next-line 
  }, [words])


  // creating guessWord (blanks) when answer is done
  useEffect(() => {
    let sample = [] 
    for(let i = 0; i < answerLetters.length; i++){
      sample.push({
        value: "",
        isSelected: false,
        id: uniqid(),
        index: i
      })
    }
    const guessObj = sample.map(guessItem => {

      if(guessItem.index === 0){
        return {
          ...guessItem,
          isSelected: true
        }

      } else {
        return {...guessItem}
      }

    })

    setGuessWord([...guessObj])

  }, [answerLetters])


  const randomLetters = useMemo(() => getRandomLetters(answerLetters.length + 3), [])

  // creating random letters and mix with answer letters
  useEffect(() => {

    
    if(randomLetters.length > answerLetters.length){
    for(let i = 0; i < answerLetters.length; i++){
      randomLetters.pop()
    }
  }
    for(let i = 0; i < answerLetters.length; i++){
     randomLetters.push(answerLetters[i])
    }

    // console.log(randomLetters + " before")
     shuffleArray(randomLetters)
    // console.log(randomLetters + " after")

    const objRandomLetters = randomLetters.map(letter => {
      return {
        value: letter,
        copyValue: letter,
        id: uniqid()
      }
    })


    setLetters([...objRandomLetters])

  }, [answerLetters])



  
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

  // choosing a letter to palce in a blank
  const chooseHandler = (value, id) => {

    console.log(guessWord)
    setGuessWord(prevGuessWord => {

      const index = prevGuessWord.filter(item => item.isSelected === true)
      return prevGuessWord.map(item => {
        
       console.log(index)
        if(item.index === index[0].index){
          return {
            ...item,
            value: value,
            isSelected: false
          }
        } else if(item.index === index[0].index + 1){
          return {
            ...item,
            isSelected: true
          } 
        } else {
          return item
        }
      })
    })

    setLetters(pervLetters => {
     return letters.map(letter => {
        if(letter.id === id){
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
    
  }, [guessWord])



  return (
    <div className="App">
      <h1>Hangman</h1>

      <Letters answerLetters={answerLetters}
               chooseHandler={chooseHandler}
               letters={letters}/>
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
