import { useState } from 'react'


function App() {
  const [color, setColor] = useState("Black")

  return (
    <div className='w-full h-screen' style={{backgroundColor:color, color:'white'}}>
      <h1 className='text-2xl flex text-center items-center justify-center font-medium py-2'>Background Changer</h1>
      <div className='flex items-center text-center justify-center text-xl bg-amber-500 py-2'>
        <button className='rounded-full px-4  text-white' style={{backgroundColor:"Blue", color:"white"}} onClick={()=>{setColor("Blue")}}>Blue</button>
        <button className='rounded-full px-4  text-white' style={{backgroundColor:"Olive", color:"white"}} onClick={()=>{setColor("Olive")}}>Olive</button>
        <button className='rounded-full px-4  text-white' style={{backgroundColor:"Green", color:"white"}} onClick={()=>{setColor("Green")}}>Green</button>
        <button className='rounded-full px-4  text-white' style={{backgroundColor:"Red", color:"white"}} onClick={()=>{setColor("Red")}}>Red</button>
        <button className='rounded-full px-4  text-white' style={{backgroundColor:"Pink", color:"white"}} onClick={()=>{setColor("Pink")}}>Pink</button>
        <button className='rounded-full px-4  text-white' style={{backgroundColor:"Orange", color:"white"}} onClick={()=>{setColor("Orange")}}>Orange</button>
        <button className='rounded-full px-4  text-white' style={{backgroundColor:"Silver", color:"white"}} onClick={()=>{setColor("Silver")}}>Silver</button>
        <button className='rounded-full px-4  text-white' style={{backgroundColor:"Purple", color:"white"}} onClick={()=>{setColor("Purple")}}>Purple</button>
        <button className='rounded-full px-4  text-white' style={{backgroundColor:"Grey", color:"white"}} onClick={()=>{setColor("Grey")}}>Grey</button>
        <button className='rounded-full px-4  text-white' style={{backgroundColor:"Brown", color:"white"}} onClick={()=>{setColor("Brown")}}>Brown</button>
      </div>
    </div>
  )
}

export default App
