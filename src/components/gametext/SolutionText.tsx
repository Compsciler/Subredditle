import { Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'

type Props = {
  solution: string,
  isGameComplete: boolean,
}

const styles = {
  fontSize: '18px',
  flexFlow: 'wrap',
}
const hrStyles = {
  flexBasis: '100%',
  border: 0,
  height: 0,
  margin: 0,
}

const classes = "flex justify-center mt-4 dark:text-white"
const a_classes = "underline text-blue-600 hover:text-blue-800 visited:text-purple-600"

export const SolutionText = ({ solution, isGameComplete }: Props) => {
  const subredditLink = `https://www.reddit.com/r/${solution}/`
  return (
    <Transition.Root show={isGameComplete} style={styles} className={classes}>
      Dive into&nbsp;<a href={subredditLink} target="_blank" className={a_classes}>r/{solution}</a>
    </Transition.Root>
  )
}
