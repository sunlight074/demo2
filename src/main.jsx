import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AuthProvider} from './auth'
import ReactDOM from 'react-dom/client'
import Register from './register'
import Login from './login'
import Home from './home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
            <Route path='register' element={<Register/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='home' element={<Home/>}/>
        </Routes> 
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
