import React from 'react'
import { Helmet } from 'react-helmet-async'
import AboutComp from '../components/AboutComp'
import Skills from '../components/Skills'
const HomePage = () => {
  return (
    <div>
       <Helmet>
    <title>Home Page</title>

    </Helmet>
    <AboutComp/>
    <Skills/>
    </div>
  )
}

export default HomePage