import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  labels: number[][]
}

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  
  span {
    display: inline-block;
    text-align: center;
    width: 26px;
  }

  > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    height: calc(26px * 4);

    > span {
      display: inline-block;
    }
  }

  > div:nth-child(2) {
    flex-grow: 1;
  }
`

const TopColumn: FunctionComponent<Props> = ({labels, children}) => {
  return (
    <FlexColumn>
      <div>
        {labels.map((i, indexI) => (
          <div key={indexI}>
            {i.map((j, indexJ) => {
              if (i.length === 1 && j === 0) {
                return <span>0</span>
              }
              if (j !== 0) {
                return <>
                  <span key={indexJ}>{j}</span>
                  <br />
                </>
              }}
            )}
          </div>
        ))}
      </div>
      <div>
        {children}
      </div>
    </FlexColumn>
  )
}

export default TopColumn