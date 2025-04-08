import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    if(count<20){
      //when we have to run one task repetedly what react do react take a bunch of that repeated work and do only once
      setCount(precount => precount + 1);
      setCount(precount => precount + 1);
      setCount(precount => precount + 1);
      setCount(precount => precount + 1);
      //sp we get the value at the end callback that is currCount +1*4 = curr+4
    } else {
      alert('Limit Exit');
    }
  }

  const removeValue = () => {
    if(count>0){
      //But when we give a call back in setCount so we give not an instruction or bunch of work we give one by one callback
      setCount(count-1); //same work repetedly
      setCount(count-1); //same work repetedly
      setCount(count-1); //same work repetedly
      setCount(count-1); //same work repetedly
      //so we know react take bunch and work once so we will get only -1 value
     
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
