import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  labels: number[][]
}

const FlexColumn = styled.div`
  display: flex;

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    > span {
      display: inline-block;
      padding: 5px;
    }
  }
`

const LeftColumn: FunctionComponent<Props> = ({labels, children}) => {
  return (
    <FlexColumn>
      <div>
        {labels.map((i, indexI) => (
          <div key={indexI}>{i.flatMap(j => j === 0 ? [] : [j]).map((j, indexJ) => (
            <span key={indexJ}>{j}</span>
          ))}</div>
        ))}
      </div>
      <div>
        {children}
      </div>
    </FlexColumn>
  )
}

export default LeftColumn