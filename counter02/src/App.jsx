import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    if(count<20){
      setCount(count+1);
    } else {
      alert('Limit Exit');
    }
  }

  const removeValue = () => {
    if(count>0){
      setCount(count-1);
    } else {
      alert('Limit Exit');
    }
  }
  return (
  <>
    <h1>React Counter Project</h1>
    <h3>Counter value {count}</h3>
    <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}>Remove Value</button>
  </>
  )
}

export default App
