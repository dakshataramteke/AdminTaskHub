
import Navbar from './Components/OuterNav.js/Navbar';
import { BrowserRouter, Routes , Route } from 'react-router';
import Login from './Components/OuterNav.js/Login';
import Register from './Components/OuterNav.js/Register';
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={   <Navbar/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
