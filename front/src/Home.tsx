import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  padding: 20px;

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
`

const Home = () => (
  <StyledDiv>
    <div>
      <i className="far fa-newspaper" />
      <span className="title">O que há de novo?</span>
      <br />
      <p className="info">Clique aqui para ver as últimas novidades que saíram para o sistema.</p>
    </div>
    <div>
      <i className="fas fa-shoe-prints" />
      <span className="title">Tutorial</span>
      <br />
      <p className="info">Clique aqui para aprender como jogar e aprender com o SchoolPic.</p>
    </div>
  </StyledDiv>
)

export default Home