import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledDiv = styled.div`
  padding: 20px;

  > a {
    display: block;
    color: inherit;
    text-decoration: none;

    > div {
      margin-bottom: 20px;
      padding: 20px;
      background-color: #c4c4c4;

      > i {
        color: black;
        font-size: 35px;
      }

      > span {
        &.title {
          font-size: 20px;
          font-weight: bold;
          margin-left: 20px;
          vertical-align: middle;
        }
      }

      > p {
        &.info {
          margin-top: 20px;
        }
      }
    }
  }
`

const Content = () => (
  <StyledDiv>
    <Link to="content/numbers">
      <div>
        <i className="fas fa-sort-numeric-up-alt" />
        <span className="title">Números</span>
        <br />
        <p className="info">Exercícios para desenhar números, com curiosidades sobre eles.</p>
      </div>
    </Link>
    <Link to="content/symbols">
      <div>
        <i className="fas fa-atlas" />
        <span className="title">Símbolos matemáticos</span>
        <br />
        <p className="info">Exercícios para desenhar símbolos matemáticos, com explicação sobre alguns dos usos de cada um deles.</p>
      </div>
    </Link>
  </StyledDiv>
)

export default Content