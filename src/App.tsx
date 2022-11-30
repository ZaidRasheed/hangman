import { useState, useEffect } from 'react'

import styles from './app.module.css'

import words from './wordsList.json'

import Drawing from './components/Drawing'
import Word from './components/Word'
import Keyboard from './components/Keyboard'

function getWord() {
  return words[Math.floor(Math.random() * words.length)].toLowerCase()
}

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(getWord())

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectGuesses = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLoser = incorrectGuesses.length >= 6
  const isWinner = wordToGuess
    .split("")
    .every(letter => guessedLetters.includes(letter))

  const nextGuess = (letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner)
      return
    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      if (!key.match(/^[a-z]$/)) return
      e.preventDefault()
      nextGuess(key.toLowerCase())
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return
      const response = confirm('Are you sure you want to restart the game?')
      e.preventDefault()
      if (response) {
        setGuessedLetters([])
        setWordToGuess(getWord())
      }
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.status}>
        {(!isWinner && !isLoser) && `Hangman - ${6 - incorrectGuesses.length} tries left`}
        {isWinner && <span className={styles.winner}>Winner! - Press Enter to play again</span>}
        {isLoser && <span className={styles.loser}>Nice Try - Press Enter to try again</span>}
      </div>
      <Drawing
        incorrectGuesses={incorrectGuesses}
      />
      <Word
        wordToGuess={[...wordToGuess]}
        guessedLetters={guessedLetters}
        reveal={isLoser}
      />
      <Keyboard
        nextGuess={nextGuess}
        disabled={isWinner || isLoser}
        guessedLetters={guessedLetters}
      />
    </div>
  )
}

export default App
