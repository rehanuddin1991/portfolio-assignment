import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
     <Header></Header>
      <div className='  container mx-auto '>
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  )
}

export default RootLayout