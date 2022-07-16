import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import UsersPage from './pages/UsersPage/UsersPage'
import UserPage from './pages/UserPage/UserPage'
import HomePage from './pages/HomePage/HomePage'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { AppBar, Toolbar } from '@mui/material'
import { HomeIcon, NavList } from './App.styled'

function App() {
  return (
    <div>
      <Router>
        <AppBar position="static">
          <Toolbar variant="dense">
            <NavList>
              <li>
                <Link to="/">
                  <HomeIcon />
                </Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </NavList>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App
