import React from 'react';
import './App.scss'
import AddTodo from '../AddTodo';
import ShowTodos from '../../containers/ShowTodos';
import FilterLink from '../../containers/FilterLink';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<AddTodo/>
				<ShowTodos />
				<FilterLink />
			</header>
		</div>
	);
}

export default App;
