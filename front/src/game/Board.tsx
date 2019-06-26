import React, { FunctionComponent, Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import update from 'immutable-assign'

interface Props {
  board: number[][]
  userSolution: number[][]
  setUserSolution: Dispatch<SetStateAction<Props['userSolution']>>
}

const Game = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightgray;

  td {
    width: 22px;
    height: 22px;

    &.black {
      background-color: black;
    }
    &.white {
      background-color: white;
    }
    cursor: pointer;
  }
`

const Board: FunctionComponent<Props> = ({userSolution, setUserSolution}) => {

  const switchColor = (row: number, col: number) => {
    setUserSolution(update(userSolution, s => s[row], p => { 
      p[col] = userSolution[row][col] === 0 ? 1 : 0
      return p
    }))
  }

  return (
    <Game>
      <table>
        <tbody>
          {userSolution.map((i, indexI) => (
            <tr key={indexI}>
              {i.map((j, indexJ) => (
                <td
                  key={indexJ}
                  className={j === 1 ? `black` : 'white'}
                  onClick={() => switchColor(indexI, indexJ)}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Game>
  )
}

export default Board