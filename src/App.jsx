import './App.css'
import Header from './components/Header'
import ProductPage from './views/ProductPage'
import {Routes, Route} from 'react-router-dom'

import {SelectedProducts} from './context/SelectedProducts'

function App() {

  return (
    <>
      <SelectedProducts>
        <Header />
        <Routes>
          <Route path='/' element={<ProductPage/>} />
        </Routes>
      </SelectedProducts>
    </>
  )
}

export default App
