import React from 'react';
import BotaoContador from './BotaoContador'
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

function submit() {
  const email = document.getElementsByName('email')[0].value
  const password = document.getElementsByName('password')[0].value
  const name = document.getElementsByName('name')[0].value

  
}

const App = () => {
  return (
    <Switch>
      <Route
        path="/"
        component={BotaoContador}
        exact={true}
      />
      <Route
        path="/users"
        component={() => (
          <div>
            name:
            <input type="text" name="email"/> <br/>
            Password:
            <input type="text" name="password"/> <br/>
            name:
            <input type="text" name="name"/> <br/>
            <button onClick={submit}>Enviar</button>
          </div>
        )}
      />
      <Route component={() => <div>Desculpe, sua página não foi encontrada!</div>} />
    </Switch>
  );
}

export default App;
