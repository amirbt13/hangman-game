const raw = "abcdefghijkmnlopqrstuvwxyz"

const alphabet = raw.split('')

export const getRandomLetters = (levelNum) => {
    
  
  let letters = []
  
  for(let i = 0; i < levelNum; i++){
      const randomNum = Math.floor(Math.random() * 26)
      letters.push(alphabet[randomNum])
    }

    return letters
  }

 export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}