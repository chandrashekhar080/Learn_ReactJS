import './App.css'
import Card from './Components/Card'

function App() {
  let myObj = {
    username:"Shekhar",
    age:21
  }
  // someObj={myObj} use in card
  // someArr={myArr} use in card
  let myArr = [1,2,3,4];
  return (
    <>
    <h1 className='bg-blue-800 text-white rounded-xl'>Tailwind test</h1>
      <Card linkTxt="Link 1" heading="Shekhar"/>
      <Card linkTxt="Link 2" heading="Vivek"/>
    </>
  )
}

export default App
