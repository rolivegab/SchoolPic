import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  white-space: nowrap;

  a {
    display: block;
    text-decoration: none;
    padding: 20px 10px;
    width: 100%;
    color: inherit;

    > i {
      margin-bottom: 3px;
      display: block;
    }
  }

  .c1 {
    background-color: #f0e1a1;
  }

  .c2 {
    background-color: #eba898;
  }

  .c3 {
    background-color: #d9a8ff;
  }

  .c4 {
    background-color: #a4daeb;
  }
`

export default function NavigationBar() {
  return (
    <StyledDiv>
      <Link to="/" className="c1">
        <i className="fas fa-home" />
        Início
      </Link>
      <Link to="/content" className="c2">
        <i className="fas fa-book" />
        Conteúdos
      </Link>
      <Link to="/perfil" className="c3">
        <i className="fas fa-user-circle" />
        Perfil
      </Link>
      <Link to="/help" className="c4">
        <i className="far fa-question-circle" />
        Ajuda
      </Link>
    </StyledDiv>
  )
}