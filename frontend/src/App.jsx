
import Navbar from './Components/OuterNav/Navbar';
import { BrowserRouter, Routes , Route } from 'react-router';
import Login from './Components/OuterNav/Login';
import Register from './Components/OuterNav/Register';
import Dashboard from './Components/InnerNav/Dashboard';
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={   <Navbar/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
