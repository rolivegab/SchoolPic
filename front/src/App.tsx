import React, { useState } from 'react';
import BotaoContador from './BotaoContador'
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Form from './FormExample';
import NavigationBar from './NavigationBar';

// function submit() {
//   const email = document.getElementsByName('email')[0].value
//   const password = document.getElementsByName('password')[0].value
//   const name = document.getElementsByName('name')[0].value
// }

const App = () => {
  return (
		<div>
			<NavigationBar />
			<Switch>
				<Route
					path="/"
					component={BotaoContador}
					exact={true}
				/>
				<Route
					path="/users"
					component={Form}
				/>
				<Route component={() => <div>Desculpe, sua página não foi encontrada!</div>} />
			</Switch>
		</div>
  );
}

export default App;
