import React from 'react'
import CountDown from '../../components/CountDown/CountDown'
import './Home.scss'








function Home() { 
  return (
    
    <div className='home'>
    
      <div className='home-left-container'>
        <main className='home-dhanus-text-container'>
          <h1 className='home-dhanus-text-primary'>
            𝐃HANUS<br/>2K23
          </h1>
          <h2 className='home-dhanus-text-secondary'>Powered by <span>College of Engineering Kallooppara,Thiruvalla,IHRD,Govt of Kerala</span></h2>
        </main>
       
      </div>

      <div className='home-right-container'>
        <div className='home-right-countdown'>
          <CountDown deadline="June, 2, 2023" />
        </div>
      </div>
    </div>
  )
}

export default Home
