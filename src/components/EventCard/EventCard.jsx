import React from 'react'
import './EventCard.scss'

function EventCard({image, regAvail, regLink}) {
  return (
    <div className='event-card'>
        {
          (regAvail) ? (
            <p className='reg-now'>Online Registration Available!</p>
          ) : (
            <p className='reg-later'>Spot Registration Only!</p>
          )
        }
        <div className='event-card-main'>
          <img src={image} alt="" />
          {
            (regAvail) ? (
              <button onClick={() => {
                window.open(regLink, "_blank");
              }}>𝐑𝐞𝐠𝐢𝐬𝐭𝐞𝐫 𝐍𝐨𝐰!</button>
            ) : (
              <button>𝐒𝐞𝐞 𝐲𝐨𝐮 𝐭𝐡𝐞𝐫𝐞! </button>
            )
          }
          </div>
    </div>
  )
}

export default EventCard