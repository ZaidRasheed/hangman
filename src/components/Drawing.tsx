import styles from './CSS/drawing.module.css'
const HEAD = (
    <div className={styles.head} />
)

const BODY = (
    <div className={styles.body} />
)

const RIGHT_ARM = (
    <div className={styles.rightArm} />
)

const LEFT_ARM = (
    <div className={styles.leftArm} />
)

const RIGHT_LEG = (
    <div className={styles.rightLeg} />
)

const LEFT_LEG = (
    <div className={styles.leftLeg} />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type DrawingProps = {
    incorrectGuesses: string[]
}

export default function Drawing({ incorrectGuesses }: DrawingProps) {
    return (
        <div className={styles.container}>
            {BODY_PARTS.slice(0, incorrectGuesses.length)}
            <div className={styles.topPartHanging} />
            <div className={styles.topPart} />
            <div className={styles.middlePart} />
            <div className={styles.bottomPart} />
        </div>
    )
}
