import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/login/userLogin'
import Register from './components/register/UserRegister'
import Protected from './components/protected/Protected'

function App() {
  return (
    <>
    <ProductGrid/>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='protected' element={<Protected/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
