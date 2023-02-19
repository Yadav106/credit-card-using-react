import React from 'react'
import './done.css'
import completeIcon from '/icon-complete.svg'

const Done = (props) => {
  return (
    <div className="done">
        <img src={completeIcon} className='completeIcon'/> 
        <h1 className='thankText'>THANK YOU!</h1>
        <p className="text">We've added your card details!</p>
        <button className="button--continue" onClick={() => props.submitHandler()}>Continue</button>
    </div>
  )
}

export default Done