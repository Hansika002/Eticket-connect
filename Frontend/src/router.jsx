import React, { useContext } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Register from './components/auth/register';
import Login from './components/auth/login';
import AuthContext from './context/authcontext';
import Home from './components/Home/Home';
import Main from './components/Home/main';
import Bookings from './components/Routes/Conductor/Bookings';
import TicketCNF from './components/Routes/Conductor/TicketCNF';
import About from './components/AboutUs/about';
import Services from './components/Services/service';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



function MyRouter() {

  const {loggedIn} = useContext(AuthContext);
  
    return (


        <Router>
          
            <Routes>
         
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
           
          { loggedIn === false && <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />     
            </>}
          { loggedIn === true && <>

            <Route path="/main" element={<Main />} />
            <Route path="/conductor/bookings" element={<Bookings />} />
            <Route path="/test" element={<TicketCNF />} />

            </>}
            
           

            
        </Routes></Router>
           
          );
}

export default MyRouter;
