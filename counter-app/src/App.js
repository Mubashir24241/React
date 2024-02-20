import { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';


function App() {
    const [counter, setCounter] = useState(5);
  
    const addValue = () => {
      if (counter < 15) {
        setCounter(counter + 1);
        
      }
    };
  
    const removeValue = () => {
      if (counter > 0) {
        setCounter(counter - 1);
        console.log("clicked", counter);
      }
    };

    useEffect(() => {
        console.log("Counter value:", counter);
      }, [counter]);
  
    return (
      <>

<div class="container">
        <h1>This is a simple Counter project  using React </h1>
        <h2>Counter value: {counter}</h2>
          
        <button onClick={addValue}>Add value</button>
        <br />
        <button onClick={removeValue}>Remove value</button>
  
        <p>Footer: {counter}</p>
        </div>
      </>
    );
  }
  
  export default App;