import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';


function Login() {
  const initialValues = { email: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading]= useState( false);
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value }); // e.target receive the entered texts
    setFormErrors(validate(formValues));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setLoading(true);

    const PAYLOAD = {
      identifier: formValues.email,
      password: formValues.password,
    };
    try {
      axios
        .post(
          'https://bat-recup-staging-backend.cleverapps.io/api/users-permissions/login-annuaire',
          PAYLOAD
        )

        .then((resp) => {
          console.log(resp.data);
          const token = resp?.data?.jwt;
          localStorage.setItem('token', token); // are you sure that the object returned by the api has a token field? :D :P
          navigate('/dashboard');
          setLoading(true);
        });
    } catch (err) {
      setLoading(false);
      console.log(err?.resp?.data?.error)
       if (err.code === 'ERR_BAD_REQUEST') 
       {
        setFormErrors('Invalid User and Pasword');
      } else {
        alert('Login Failed');
      } // THE ERROR MESSAGE IS NOT DISPLAYED
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.password) {
      errors.password = ' * Password is required!';
    }
    if (!values.email) {
      errors.email = ' * Email is required!';
      console.log(values.email);
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email!';
      console.log('email is not valid');
      console.log(values.email);
    }
    return errors;
  };
  return (
    <div>
      <section className="gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card">
                <div className="card-body p-5 text-center">
                  <div className="mt-md-2 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-dark-50 mb-5">
                      Please enter your login and password!
                    </p>
                    {isSubmit === true &&  formErrors.length > 0 && (
                      <p className="text-error">{formErrors.error.message}</p>
                    )}

                    <form onSubmit={handleSubmit}>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                          id="emailInput"
                          placeholder="name@example.com"
                          value={formValues.email}
                          onChange={handleChange}
                        />
                        <label htmlFor="emailInput">Email address</label>
                      </div>
                      {formErrors.hasOwnProperty('email') && (
                        <p className="text-error">{formErrors.email}</p>
                      )}

                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="passwordInput"
                          placeholder="Password"
                          value={formValues.password}
                          onChange={handleChange}
                        />
                        <label htmlFor="passwordInput">Password</label>
                      </div>
                      {isSubmit === true && formValues.password === '' && (
                        <p className="text-error">{formErrors.password}</p>
                      )}


                      <p className="small mb-3 pb-lg-2">
                        <a className="text-dark-50" href="#!">
                          Forgot password?
                        </a>
                      </p>

                    {!loading && <button
                        className="btn btn-dark btn-lg px-5"
                        type="submit"
                      > {''}
                        Login
                      </button>}  
                      {loading && <button
                        className="btn btn-dark btn-lg px-5"
                        type="submit" disabled
                      > {''}
                           <i className='fas fa-spinner fa-spin'></i> Loading...
                      </button>}
                    </form>
                  </div>


                  <div>
                    <p className="mb-0">
                      Don't have an account?{' '}
                      <a href="#!" className="text-dark-50 fw-bold">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;