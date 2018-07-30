import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import { functionCommand } from './index.redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
const store = createStore(functionCommand,applyMiddleware(thunk));
ReactDOM.render(
	(<Provider store = {store}>
		<BrowserRouter>
			<Switch>
				<Route path="/" component={App}/>
			</Switch>
			
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
	);
registerServiceWorker();
