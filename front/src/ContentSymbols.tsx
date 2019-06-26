import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledTable = styled.table`
  margin: 20px;
  width: calc(100% - 40px);
  border-spacing: 10px;
  box-sizing: border-box;
  table-layout: fixed;

  span {
    display: block;
    font-size: 25px;
    margin-bottom: 30px;
    text-align: left;
  }

  td {
    text-align: center;
    color: black;
    font-size: 35px;
    font-weight: bold;

    a {
      padding: 15px;
      color: inherit;
      text-decoration: none;
      display: block;
    }

    &.disabled {
      color: gray;
      background-color: lightgray;
    }

    &.done {
      a {
        border: 8px solid #a4daeb;
      }
    }
  }
`

const ContentSymbols = () => (
  <StyledTable>
    <tbody>
      <tr>
        <td colSpan={3}>
          <span>Selecione o nível que deseja jogar</span>
        </td>
      </tr>
      <tr>
        <td className="done">
          <Link to="symbols/1">1</Link>
        </td>
        <td className="done">
          <Link to="symbols/2">2</Link>
        </td>
        <td className="do">
          <Link to="symbols/3">3</Link>
        </td>
      </tr>
      <tr>
        <td className="disabled">
          <Link to="symbols">4</Link>
        </td>
        <td className="disabled">
          <Link to="symbols">5</Link>
        </td>
        <td className="disabled">
          <Link to="symbols">6</Link>
        </td>
      </tr>
    </tbody>
  </StyledTable>
)

export default ContentSymbols