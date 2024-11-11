import React from 'react'
import { Helmet } from 'react-helmet-async'
import AboutComp from '../components/AboutComp'
import Skills from '../components/Skills'
import Project from '../components/Project'

import MarqueeComp from '../components/MarqueeComp'
 

const HomePage = () => {
  return (
    <div>
       <Helmet>
    <title>Home Page</title>

    </Helmet>
    <br />
    <MarqueeComp/>
     
    <AboutComp/>
    <Project/>
    <Skills/>
    </div>
  )
}

export default HomePage