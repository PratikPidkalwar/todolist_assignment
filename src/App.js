import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
// import ReactDOM from'react-dom';
import Login from './components/login';
import Register from './components/register';
import RequireLogin from './components/protected';
import './App.css';
import Todolistmain from './components/Todolistmain';


function App() {

  return (
    <>
      <div className='Nav'>
        < ul className='Setlist'> <li><NavLink className="style" to="/">Login</NavLink></li>
          <li><NavLink className="style" to="/register">Register</NavLink></li>
          <li><NavLink className="style" to="/todolist">Todolist</NavLink></li>
     

        </ul>
      </div>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<RequireLogin />}>
          <Route path="/todolist" element={<Todolistmain />} />
        </Route>
      </Routes>

    </>
  )

}

export default App;


