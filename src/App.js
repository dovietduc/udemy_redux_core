import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';
import { store } from './index';

function App() {
	const [flag, setFlag] = useState(true);

	const callBack = function(){
		setFlag(!flag);
	}

	console.dir(callBack)

	store.subscribe(callBack)

	return (
		<div className="App">
			<Counter />
		</div>
	);
}

export default App;
