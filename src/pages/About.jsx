import React from 'react'
import { Helmet } from 'react-helmet-async'
import AboutComp from '../components/AboutComp'
import MarqueeComp from '../components/MarqueeComp'
const About = () => {
  return (
    <div>
         <Helmet>
    <title>About Rehan's</title>

    </Helmet>
    <MarqueeComp/>

    <AboutComp/>
    
    </div>
  )
}

export default About