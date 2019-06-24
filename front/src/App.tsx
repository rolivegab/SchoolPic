import BotaoContador from './BotaoContador'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Form from './FormExample'
import NavigationBar from './NavigationBar'
import Game from 'game'

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route
          path="/botaocontador"
          component={BotaoContador}
          exact={true}
        />
        <Route
          path="/users"
          component={Form}
        />
        <Route
          path="/game"
          component={() => <Game board={[
            [0, 1, 1, 1, 0],
            [0, 1, 0, 1, 0],
            [0, 1, 1, 1, 0],
            [0, 1, 0, 1, 0]
          ]} />}
        />
        <Route component={() => <div>Desculpe, sua página não foi encontrada!</div>} />
      </Switch>
    </div>
  )
}

export default App
