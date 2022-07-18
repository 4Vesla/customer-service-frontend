import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { AppBar, Toolbar } from '@mui/material'
import { HomeIcon, NavList } from '../../App.styled'
import LoginPage from '../LoginPage/LoginPage'
import RegisterPage from '../RegisterPage/RegisterPage'
import UserPage from '../UserPage/UserPage'
import { ToastContainer } from 'react-toastify'
import { useGlobalContext } from '../../shared/context/GlobalContext'
import UsersPage from "../UsersPage/UsersPage";

function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  const { token, setToken } = useGlobalContext()

  useEffect(() => {
    console.log(token)
    setIsLoggedIn(!!token)
  }, [token])

  const onClick = () => {
    localStorage.removeItem('token')
    setToken(null)
  }

  return (
    <div>
      <Router>
        <AppBar position="fixed">
          <Toolbar variant="dense">
            <NavList>
              <li>
                <Link to="/users">
                  <HomeIcon />
                </Link>
              </li>
              {!isLoggedIn && <li><Link to="/register">Register</Link></li>}
              {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
              {isLoggedIn && <li><Link to="/users">Users</Link></li>}
              {isLoggedIn && <li className="logout" onClick={onClick}><Link to="/login">Log out</Link></li>}
            </NavList>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  )
}

export default HomePage
