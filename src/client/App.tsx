import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';

const App = (props: AppProps) => {
	
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path ="/">
					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

interface AppProps {}

export default App;
