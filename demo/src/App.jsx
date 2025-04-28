import React from 'react'
import Home from './pages/Home'
import Footer from './pages/Footer'
import Navbar from './pages/Navbar'
import FeaturedCollections from './pages/FeaturedCollections'
import PasswordPage from './pages/PasswordPage'
import { Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <div>
     {/* <Routes>
        <Route path='/'
          element={
            <PasswordPage>
            <Navbar/>
            <Home/>
            <FeaturedCollections/>
            <Footer/>
            </PasswordPage>
          }/>
     </Routes> */}
      {/* <PasswordPage/> */}
      <Navbar/>
      <Home/>
      <FeaturedCollections/>
      <Footer/>
        {/* <PasswordPage/> */}
    </div>
  )
}
