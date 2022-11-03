import styles from './CSS/keyboard.module.css'

const LETTERS = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M"
]

type KeyboardProps = {
    nextGuess: Function
    guessedLetters: string[]
    disabled: boolean
}

export default function Keyboard({ nextGuess, disabled, guessedLetters }: KeyboardProps) {
    return (
        <div className={styles.container}>
            {LETTERS.map((letter, index) => {
                return (
                    <button
                        key={index}
                        disabled={(disabled || guessedLetters.includes(letter.toLowerCase()))}
                        onClick={() => {
                            nextGuess(letter.toLocaleLowerCase())
                        }}
                        className={styles.button}
                    >
                        {letter}
                    </button>
                )
            })}
        </div>
    )
}
