import React from 'react'
import { Helmet } from 'react-helmet-async'
import AboutComp from '../components/AboutComp'
const About = () => {
  return (
    <div>
         <Helmet>
    <title>About Rehan's</title>

    </Helmet>

    <AboutComp/>
    
    </div>
  )
}

export default About