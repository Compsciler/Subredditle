import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  const a_classes = "underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose} isWide={true}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the subreddit name in 10 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the subreddit.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        You may input any sequence of characters for each guess.
        Playing on PC is recommended.
      </p>
      <br />
      <p className="text-sm text-gray-500 dark:text-gray-300">
        You will be given the description of the subreddit from Reddit as a clue.
        The solution will be one of the <strong>106 top-subscribed subreddits</strong>,
        each of which has over 4 million members (and is SFW).
        That means the subreddit name will <strong>not</strong> be as random as the examples below.
        (Also note that the vast majority of subreddit names on this list contain no numbers or underscores.)
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="T"
          status="correct"
        />
        <Cell value="R" />
        <Cell value="E" />
        <Cell value="B" />
        <Cell value="U" />
        <Cell value="C" />
        <Cell value="H" />
        <Cell value="E" />
        <Cell value="T" />
        <Cell value="M" />
        <Cell value="E" />
        <Cell value="M" />
        <Cell value="E" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The first letter T is in the subreddit and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="B" />
        <Cell value="R" />
        <Cell value="E" />
        <Cell value="A" />
        <Cell value="D" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="S"
          status="present"
        />
        <Cell value="T" />
        <Cell value="A" />
        <Cell value="P" />
        <Cell value="L" />
        <Cell value="E" />
        <Cell value="D" />
        <Cell value="T" />
        <Cell value="O" />
        <Cell value="T" />
        <Cell value="R" />
        <Cell value="E" />
        <Cell value="E" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The first letter S is in the subreddit but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="F" />
        <Cell value="I" />
        <Cell value="F" />
        <Cell value="T" />
        <Cell value="H" />
        <Cell value="W" />
        <Cell value="O" />
        <Cell value="R" />
        <Cell value="L" />
        <Cell value="D" />
        <Cell isRevealing={true} isCompleted={true} value="P" status="absent" />
        <Cell value="R" />
        <Cell value="O" />
        <Cell value="B" />
        <Cell value="L" />
        <Cell value="E" />
        <Cell value="M" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter P is not in the subreddit in any spot.
      </p>

      <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
        You can play every Subredditle puzzle (past and future) by visiting the URL {' '}
        <a href="https://subredditle.netlify.app/examples/0" target="_blank" className={a_classes}>subredditle.netlify.app/examples/0</a> {' '}
        and replacing the 0 at the end with a number between 0 and 105 inclusive.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Secret bonus extra puzzles: {' '}
        <a href="https://subredditle.netlify.app/bonus/0" target="_blank" className={a_classes}>subredditle.netlify.app/bonus/0</a> {' '}
        (replace 0 with a number between 0 and 7 inclusive)
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/Compsciler/Subredditle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
