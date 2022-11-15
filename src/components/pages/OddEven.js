import React from "react";
import { useFormik } from "formik";

//initializing number the variable to be store by the user
const initialValues = { number: "" };
const regexText = /,/ig;
const regex = /^[0-9]+$/;
//Will check if the textbox is empty or the variable is incorrect
const validate = (values) => {
  // to check if the code is not a whole number
  const regex = /^[0-9]+$/;


  // const regexText = /,/ig;
  // values.replaceAll(regexText, ".");

  let errors = {};

  if (!values.number) {
    errors.number = "* Required";
  } else if (!regex.test(values.number)) {
    errors.number = "Please enter only whole number ";
  } 

  return errors;
};


const onSubmit = (values) => {
  console.log("Form data", values);

  if (values.number % 2 === 0) {
    alert("You have entered an even number");
  }
  else {
    alert("you have entered an odd number");
  }
};



function EvenOdd() {
  const formik = useFormik({ initialValues, onSubmit, validate });

  console.log("Visited field", formik.touched);

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-body">
          <div className="text-center">
            <h2 className="main-heading">Even and Odd Number</h2>
            <div className="underline mx-auto"></div>
            <div>
              <form onSubmit={formik.handleSubmit} er>
                <div className="form-control">
                  <label htmlFor="number">Enter Number</label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    value={formik.values.number.replaceAll(regexText, ".").replace(/\s/g, '')}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.number && formik.errors.number ? (
                    <div className="error">{formik.errors.number}</div>
                  ) : null}

                </div>

                {/* disable the button if the user has changed any fired and the form is not valid */}
                <button
                  className="btn btn-primary"
                  disabled={!(formik.dirty && formik.isValid) || !regex.test(formik.values.number)}
                  type="submit"
                >
                  Check
                </button>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EvenOdd;

// import React, { useState } from 'react';

// function OddEven() {
//     const [number, setNumber] = useState('');
//     const [formMsg, setFormMsg] = useState({});
//     const [setIsSubmit] = useState(false);

//     function OnChangeNumber(text) {
//         setNumber(text.target.value);
//       }

// const checkNumber=()=>{
//     if (number === "") {
//         alert("The number is required");
//     }
//     else if (number % 2 === 0) {
//         alert("The number is even.");

//     }
//     // if the number is odd
//     else {
//         alert("The number is odd.");
//     }
// };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     checkNumber();
//     setIsSubmit(true);
//   };

//   const checkNumber = (values) => {
//     const errors = {};
//     const regex = /^\d+(\.\d{1,2})?$/;

//     if (!values.number) {
//       errors.number = ' * Required!'
//       console.log(values.email)

//     } else if (!regex.test(values.number)) {
//       errors.number = 'Enter whole number only!';
//       console.log("email is not valid")
//       console.log(values.number)
//     }
//     return errors;
//   };

//   return (
//     <div className="container">
//         <div className="card mt-4">
//             <div className="card-body">
//                 <div className="text-center">
//                    <h2 className="main-heading">Even and Odd Number</h2>
//                     <div className="underline mx-auto"></div>
//                     <form id='form'>
//                     <div className='form-floating mb-3'>
//                         <input type="text" name="number"
//                          className='form-control' id="floatingInput"
//                          placeholder="Enter Number" onChange={OnChangeNumber}
//                            value={number}/>
//                     <label for="floatingInput">Enter Number</label>
//                     </div>
//                     {isSubmit === true && errors.number ? (
//             <div className="error">{errors.number}</div>
//         )}

//                     <button className='btn btn-primary' type="submit" onClick={handleSubmit}>Check</button>
//                     </form>
//                     <p id="output"></p>
//                 </div>
//             </div>
//         </div>
//     </div>
//   );
// }

// export default OddEven;
