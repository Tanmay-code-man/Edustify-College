import React from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import Hero from './assets/Components/Hero/Hero'
import Programs from './assets/Components/Programs/Programs'
import Title from './assets/Components/Title/Title'
import About from './assets/Components/About/About'
import Campus from './assets/Components/Campus/Campus'
import Testimonials from './assets/Components/Testimonials/Testimonials'
import Message from './assets/Components/Message/Message'
import Footer from './assets/Components/Footer/Footer'
const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <div>
          <Title subTitle='OUR PROGRAMS' title='What We Offer' />
          <Programs />
          <About subTitle='ABOUT US' title="Nurturing Tomorrow's Leaders Today" />
          <Title subTitle='GALLERY' title='Campus Photos'/>
          <Campus />
          <Title subTitle='TESTIMONIALS' title='What Students Say'/>
          <Testimonials />
          <Title subTitle='CONTACT US' title='Get in Touch'/>
          <Message />
        </div>
      </div>

    </>
  )
}

export default App