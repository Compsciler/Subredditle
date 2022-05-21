type Props = {
  clue: string,
}

const styles = {
  fontSize: '18px',
}

const classes = "flex justify-center mb-4 dark:text-white"

export const ClueText = ({ clue }: Props) => {
  return (
    <div style={styles} className={classes}>
      <p>Description: {clue}</p>
    </div>
  )
}
