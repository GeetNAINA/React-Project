import React, { useState } from 'react';



function OddEven() {
    const [number, setNumber] = useState('');
    const [setIsSubmit] = useState(false);

    function OnChangeNumber(text) {
        setNumber(text.target.value);
      }

    const checkNumber=()=>{
        if (number === "") {
            alert("The number is required");
        } 
        else if (number % 2 === 0) {
            alert("The number is even.");

        }
        // if the number is odd
        else {
            alert("The number is odd.");
        }
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkNumber();
    setIsSubmit(true);
  };
    
  return (
    <div className="container">
        <div className="card mt-4">
            <div className="card-body">
                <div className="text-center">
                   <h2 className="main-heading">Even and Odd Number</h2>
                    <div className="underline mx-auto"></div>
                    <form id='form'>
                    <div className='form-floating mb-3'>
                        <input type="number" name="number" 
                         className='form-control' id="floatingInput"
                         placeholder="Enter Number" onChange={OnChangeNumber}
                           value={number}/>
                    <label for="floatingInput">Enter Number</label>
                    </div> 
                    <button className='btn btn-primary' type="submit" onClick={handleSubmit}>Check</button>
                    </form>
                    <p id="output"></p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default OddEven;