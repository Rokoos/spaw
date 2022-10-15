import React, {Fragment} from 'react'

import Header from './components/Header'
import View from './components/View'
import About from './components/About'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

import Navbar from './components/Navbar'

const App = () => {
  return (
    <Fragment>
    <Header/>
      <View/>
      <About/>
      <WhyUs/>
      <Contact/>
      <Footer/>
    </Fragment>
  )
}

export default App

