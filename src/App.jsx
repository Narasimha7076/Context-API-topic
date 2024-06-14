import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContectProvider'
import { useContext } from 'react'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {

  return (
    <>
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
    </>
  )
}

export default App
