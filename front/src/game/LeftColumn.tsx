import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  labels: number[][]
}

const FlexColumn = styled.div`
  display: flex; 
  white-space: nowrap;
  background-color: lightgray;
  span {
    line-height: 26px;
    display: inline-block;
    text-align: center;
    width: 26px;
  }

  > div:nth-child(1) {
    padding-top: calc(26px * 4);
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    > span {
      display: inline-block;
    }
  }
`

const LeftColumn: FunctionComponent<Props> = ({labels, children}) => {
  console.log(labels)
  return (
    <FlexColumn>
      <div>
        {labels.map((i, indexI) => (
          <div key={indexI}>{i.map((j, indexJ) => {
            if (i.length === 1 && j === 0) {
              return <span>0</span>
            }
            if (j !== 0) {
              return <>
                <span key={indexJ}>{j}</span>
              </>
            }
          })}</div>
        ))}
      </div>
      <div>
        {children}
      </div>
    </FlexColumn>
  )
}

export default LeftColumn