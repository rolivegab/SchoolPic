import React, { FunctionComponent, useState } from 'react'
import LeftColumn from './LeftColumn'
import TopColumn from './TopColumn'
import Board from './Board'
import assert from 'assert'

interface Props {
  board: number[][]
}

const Game: FunctionComponent<Props> = ({ board }) => {

  const [userSolution, setUserSolution] = useState(board.map(i => i.map(() => 0)))

  const leftColumn = (board: Props['board']) =>
    board.map(i =>
      i.reduce<number[]>((ov, cv) => {
        const pv = ov.slice(-1)[0]
        if (ov.length > 0) {
          if (pv > 0 && cv === 1) {
            return [...ov.slice(0, -1), pv + 1]
          } else if (pv === 0 && cv === 1) {
            return [...ov, 1]
          } else if (pv === 0 && cv === 0) {
            return ov
          } else {
            return [...ov, 0]
          }
        } else {
          return [cv]
        }
      }, []))

  const rightColumn = (board: Props['board']) => {
    return leftColumn(board[0].map((i, indexI) => board.map(j => j[indexI])))
  }

  const renderBoardOrVictory = () => {
    try {
      assert.deepStrictEqual(board, userSolution)
      return <div>Venceu!!</div>
    } catch (e) {
      return <Board board={board} {...{setUserSolution, userSolution}} />
    }
  }

  return (
    <LeftColumn labels={leftColumn(board)}>
      <TopColumn labels={rightColumn(board)}>
        {renderBoardOrVictory()}
      </TopColumn>
    </LeftColumn>
  )
}

export default Game