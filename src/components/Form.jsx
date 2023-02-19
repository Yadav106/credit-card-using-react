import React, { useEffect } from 'react'
import "./form.css"

const Form = (props) => {

    function nameChangeHandler(e) {
        props.setName(e.target.value)
    }

    function numberChangeHandler(e) {
        props.setCardNumber(e.target.value)
    }

    function monthChangeHandler(e) {
        props.setMonth(e.target.value)
    }

    function yearChangeHandler(e) {
        props.setYear(e.target.value)
    }

    function cvvChangeHandler(e) {
        if(e.target.value > "999") return;
        props.setCvv(e.target.value)
    }

    return (
    <div className="form">

        <div className="card--name">
            CARDHOLDER NAME
            <input type="text" placeholder='e.g. Jane Appleseed' value={props.name} onChange={nameChangeHandler}/>
        </div>

        <div className="card--number">
            CARD NUMBER
            <input type="text" placeholder='e.g. 0000 0000 0000 0000' onChange={numberChangeHandler} value={props.number}/>
        </div>

        <div className="details">
            <div className='month'>
                MONTH
                <input type="text" placeholder='MM' onChange={monthChangeHandler} value={props.month}/>
            </div>
            <div className='year'>
                YEAR
                <input type="text" placeholder='YY' onChange={yearChangeHandler} value={props.year}/>
            </div>
            <div className='cvv--input'>
                CVV
                <input type="text" placeholder='e.g. 000' onChange={cvvChangeHandler} value={props.cvv}/>
            </div>
        </div>

        <button className='button--submit' onClick={() => props.submitHandler()}>Confirm</button>

        {props.warning && <p className="warning">Fill all details!</p>}
    </div>
  )
}

export default Form