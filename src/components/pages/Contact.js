import React, { useEffect, useState } from 'react';


function Contact() {
  const initialValues = { lastname: '', firstname: '', email: '' }; // THESE ARE THE VARIABLES THAT WILL STORE THE DATA ENTERED BY USERS
  const [formValues, setFormValues] = useState(initialValues); // Here it is the controllers that will update the variables according to the data entered by the usersThe controller here is setFormValues
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    //  Here you are updating your variables according to the name of object
    setFormValues({ ...formValues, [name]: value }); // e.target receive the entered texts
    setFormErrors(validate(formValues));
    //  e.target.value === text entered
    // name ==> name of the states that you are going to update
    // setFormValues name of controller
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.lastname) {
      errors.lastname = ' * Last Name is required!'
    }
    if (!values.firstname) {
      errors.firstname = ' * First Name is required!'
    }

    if (!values.email) {
      errors.email = ' * Email is required!'
      console.log(values.email)

    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email!';
      console.log("email is not valid")
      console.log(values.email)


    }
    return errors;
  };
  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-body">
          <div className="text-center">
            <h2 className="main-heading">Contact Form</h2>
            <div className="underline mx-auto"></div>
          </div>
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="ui message success">Signed in successfully</div>
          ) : (
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input type="text" name="lastname"
                className="form-control" id="floatingInput"
                placeholder="Last name"
                value={formValues.lastname}
                onChange={handleChange} />
              <label for="floatingInput">Last Name</label>
            </div>
            {isSubmit === true && formValues.lastname === '' && (
              <p className="text-error">{formErrors.lastname}</p>
            )}

            <div className="form-floating mb-3">
              <input type="text" name="firstname"
                className="form-control" id="floatingInput"
                placeholder="First Name"
                value={formValues.firstname}
                onChange={handleChange} />
              <label for="floatingInput">First Name</label>
            </div>
            {isSubmit === true && formValues.firstname === '' && (
              <p className="text-error">{formErrors.firstname}</p>
            )}


            <div className="form-floating mb-3">
              <input type="text" name="email"
                className="form-control" id="floatingInput"
                placeholder="name@example.com"
                value={formValues.email}
                onChange={handleChange} />
              <label for="floatingInput">Email address</label>
            </div>
            {formErrors.hasOwnProperty('email') && (
              <p className="text-error">{formErrors.email}</p>
            )}
            <button className="btn btn-primary" type="submit">Submit</button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Contact;