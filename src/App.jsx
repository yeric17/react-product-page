import './App.css'
import Navbar from './components/Navbar'
import About from './views/About'
import {Routes, Router, Route} from 'react-router-dom'
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<About/>} />
      </Routes>
    </>
  )
}

export default App
