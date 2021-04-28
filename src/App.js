
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, setReset } from './actions'


function App() {

  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
    
        <p>
          <h2>counter:</h2>  <h1>{counter}</h1>

          <button class="button1" onClick={()=> dispatch(increment(5))}>plus 5</button>
          <button class="button1" onClick={() => dispatch(decrement())}>minus1</button>
          <button  class="button1" onClick={()=> dispatch(setReset())}>RESET</button>

          {isLogged? <h3>logged!</h3>: '' }
        </p>
    
      </header>
    </div>
  );
}

export default App;
