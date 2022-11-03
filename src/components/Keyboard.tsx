import styles from './CSS/keyboard.module.css'

const LETTERS = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
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
