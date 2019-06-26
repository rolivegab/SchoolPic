import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import Game from 'game'
import { createGlobalStyle } from 'styled-components'
import Home from 'Home'
import Content from 'Content'
import ContentNumbers from 'ContentNumbers'
import ContentSymbols from 'ContentSymbols'

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
`

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <NavigationBar />
      <Switch>
        <Route
          path="/"
          component={Home}
          exact={true}
        />
        <Route
          path="/content"
          component={Content}
          exact={true}
        />
        <Route
          path="/content/numbers"
          component={ContentNumbers}
          exact={true}
        />
        <Route
          path="/content/numbers/1"
          component={() => <Game board={[
            [0, 1, 1, 1, 0],
            [0, 1, 0, 1, 0],
            [0, 1, 1, 1, 0],
            [0, 1, 0, 1, 0],
            [0, 1, 1, 1, 0]
          ]} />}
          exact={true}
        />
        <Route
          path="/content/numbers/2"
          component={() => <Game board={[
            [0, 1, 1, 1, 0],
            [0, 1, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 1, 0],
            [0, 1, 1, 1, 0]
          ]} />}
          exact={true}
        />
        <Route
          path="/content/numbers/3"
          component={() => <Game board={[
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
          ]} />}
          exact={true}
        />
        <Route
          path="/content/symbols"
          component={ContentSymbols}
          exact={true}
        />
        <Route
          path="/content/symbols/1"
          component={() => <Game board={[
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
          ]} />}
        />
        <Route
          path="/content/symbols/2"
          component={() => <Game board={[
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0]
          ]} />}
        />
        <Route
          path="/content/symbols/3"
          component={() => <Game board={[
            [1, 0, 0, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 0, 1, 0],
            [1, 0, 0, 0, 1]
          ]} />}
        />
        <Route component={() => <div>Desculpe, sua página não foi encontrada!</div>} />
      </Switch>
    </div>
  )
}

export default App
