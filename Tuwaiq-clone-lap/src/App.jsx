import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registration from './componunt/Registration'
import Footer from './componunt/footer'
import Navbar from './componunt/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Registration/>
     <Footer/>

    </>
  )
}

export default App
