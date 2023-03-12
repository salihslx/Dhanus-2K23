import React from 'react'
import './AboutUs.scss'

function AboutUs() {
  return (
    <section className='about-us'>
        <div className='about-us-logo-container'>
            <img src="./logo.png" alt="" />
        </div>
        <div className='about-us-desc-container'>
            <div className='about-us-desc-1'>
                <h1>About Us</h1>
            </div>
            <div className='about-us-desc-2'>
                <h3>
                    Dhanus is the annual techno-managerial event of College
                    of Engineering Kallooppara. The event aims at establishing
                    a platform for students to network, learn and compete 
                    with the best around the state. 
                </h3>
            </div>
            <div className='about-us-desc-3'></div>
        </div>
    </section>
  )
}

export default AboutUs