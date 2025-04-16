import React, { Children } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
/*
function Myapp(){
  return (
  <>
    <h1>Hello MyApp</h1>
  </>
)
}
*/
/*
const reactElement = {
  type : 'a',
  props : {
      href : "https:/google.com",
      target : "_Blank"
  },
  Children:"Click to visit Google"
}
*/

// const anothElement = (
//   <a href='https:/google.com'target="_Blank">Visit Google</a>
// );

// const reactElement = React.createElement('a',{href:"https:/google.com",target:"_Blank"},"Click For Google");


createRoot(document.getElementById('root')).render(
  // <App/> // worked
   // <Myapp/> // worked
   // Myapp() // worked bcz JS
  // reactElement // Not Worked Bsz of Syntex
  // anothElement // worked 
 // reactElement //   worked
<App/>
)
