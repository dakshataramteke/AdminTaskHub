
import Navbar from './Components/OuterNav/Navbar';
import { BrowserRouter, Routes , Route } from 'react-router';
import Login from './Components/OuterNav/Login';
import Register from './Components/OuterNav/Register';
import Dashboard from './Components/InnerNav/Dashboard';
import Employee from './Components/InnerNav/Employee';
import AddEmployee from './Components/InnerNav/AddEmployee';
import EditEmployee from './Components/InnerNav/EditEmployee';
import Project from './Components/InnerNav/Project';
import ProjectAssign from './Components/InnerNav/ProjectAssign';
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={   <Navbar/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
         <Route path="/dashboard" element={<Dashboard />}>
            <Route path="employee" element={<Employee/>} />
            <Route path="add" element={<AddEmployee/>} />
            <Route path="edit/:id" element={<EditEmployee/>} />
            <Route path='project' element={<Project/>}/>
            <Route path='project/pro/:id' element={<ProjectAssign />}/>
          </Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
