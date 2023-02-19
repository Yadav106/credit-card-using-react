import React from 'react'
import bgDesktop from '/bg-main-desktop.png'
import cardFront from '/bg-card-front.png'
import cardBack from '/bg-card-back.png'
import cardLogo from '/card-logo.svg'

const Images = (props) => {
  return (
    <div className="images">
        <img src={bgDesktop} alt='Background Main Desktop' className='bgDesktop'/>
        <div className="cards">
          <img src={cardFront} className='cardFront' alt='Card Front'/>
          <img src={cardLogo} className='cardLogo' alt='Card Logo'/>
          <p className="name">{props.name ? props.name : "Jane Appleseed"}</p>
          <p className="number">{props.number ? props.number : "0000 0000 0000 0000"}</p>
          <div className="expiry">{props.month ? props.month : "00"}/{props.year ? props.year : "00"}</div>
          <img src={cardBack} className="cardBack" alt='Card Back'/>
          <p className="cvv">{props.cvv ? props.cvv : "000"}</p>
        </div>
    </div>
  )
}

export default Images