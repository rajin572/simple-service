import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Home/>
     <About/>
     <Services/>
     <Contact/>
    </div>
  )
}

export default App
