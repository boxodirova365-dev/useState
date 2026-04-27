import React, { useState } from 'react'
import './App.css'
import Mars from './assets/Mars.svg'

function App() {

  const [count, setCount] = useState(0)
  
 
  const [isVisible, setIsVisible] = useState(true)
  
  
  const [text, setText] = useState('Cristiano Rona')

 
  const handleDecrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0))
  };

  return (
    <div className="container">
      
      <div className="section">
        <h2>Counter</h2>
        <div className="counter-controls">
          <button onClick={() => setCount(count + 1)}>+</button>
          <span className="count-display">{count}</span>
          <button onClick={handleDecrement}>-</button>
        </div>
      </div>

      <hr />

      
      <div className="section">
        <h2>Hiden Component</h2>
        <div className="button-group">
          <button className="btn-black" onClick={() => setIsVisible(false)}>Hidden</button>
          <button className="btn-blue" onClick={() => setIsVisible(true)}>Show</button>
        </div>
        
        {isVisible && (
          <div className="content">
            <p>Hello my name is marslikbola</p>
          <img src={Mars} alt="" />
          </div>
        )}
      </div>

      <hr />

      
      <div className="section">
        <h2>Input Changee</h2>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
        <h1>Your Text: ({text})</h1>
      </div>
    </div>
  );
}

export default App;
