import React, { useState } from 'react';
import Images from './components/Images';
import Form from './components/Form';
import Done from './components/Done';

const App = () => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [warning, setWarning] = useState(false);

  function submitHandler() {
    if((!name || !cardNumber || !cvv || !month || !year) && !submitted){
      setWarning(true)
      return;
    }
    setSubmitted(prev => !prev);
    setCardNumber("");
    setCvv("");
    setName("");
    setMonth("");
    setYear("");
    setWarning(false);
  }

  return (
    <div className="main">
      <Images name={name} number={cardNumber} cvv={cvv} month={month} year={year}/>
      {
        submitted
        ?
        <Done submitHandler={submitHandler}/>
        :
        <Form 
          name={name}
          setName={setName}
          number={cardNumber}
          setCardNumber={setCardNumber}
          cvv={cvv}
          setCvv={setCvv}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
          submitHandler={submitHandler}
          warning={warning}
        />
      }
    </div>
  )
}

export default App