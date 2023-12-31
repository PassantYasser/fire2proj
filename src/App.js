import React from 'react'
import{BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Signup from './Components/Signup';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import UpdateProfile from './Components/UpdateProfile';
import Dashboard from './Components/Dashboard';

export default function App() {
  return (
    <Container className='d-flex align-items-center justify-content-center' style={{minHeight:"100vh"}}>
      <div className='w-100' style={{maxWidth:'400px'}}>
        <Router>
          <Routes>
            <Route path="/signup" element={<Signup />}   />
            <Route path="/login" element={<Login />}   />
            <Route path="/forgot-password" element={<ForgotPassword />}   />
            <Route path="/update-profile" element={<UpdateProfile />}   />
            <Route path="/" element={<Dashboard />}   />
          </Routes>
        </Router>

      </div>

    </Container>
  )
}

