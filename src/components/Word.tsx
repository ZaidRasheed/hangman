import styles from './CSS/word.module.css'
type WordProps = {
    wordToGuess: string[]
    guessedLetters: string[]
    reveal: boolean
}
export default function Word({ wordToGuess, guessedLetters, reveal }: WordProps) {
    return (
        <div className={styles.container}>
            {wordToGuess.map((letter, index) => (
                <span className={styles.word} key={index}>
                    <span
                        style={{
                            visibility:
                                guessedLetters.includes(letter.toLowerCase()) || reveal
                                    ? "visible"
                                    : "hidden",
                            color:
                                !guessedLetters.includes(letter.toLowerCase()) && reveal ? "red" : "black",
                        }}
                    >
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}
