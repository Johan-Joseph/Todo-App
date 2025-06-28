import { Route, Routes } from 'react-router-dom'
import './App.css'
import Add from './components/Add'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <br />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
      </Routes>
      {/* //<Home />
                                          <Add /> */}
    </>
  )
}



export default App
