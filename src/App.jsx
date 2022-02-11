import './App.css'
import Navbar from './components/Navbar'
import ProductPage from './views/ProductPage'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductPage/>} />
      </Routes>
    </>
  )
}

export default App
