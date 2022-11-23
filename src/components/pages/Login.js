import React, { useRef, useEffect, useState, useContext } from 'react';
import AuthContext from '../../context/AuthProvider';
import axios from 'axios';


function Login() {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSucess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
       const PAYLOAD = 
        {
        identifier:email,
        password:pwd
        }
        try {
            const response = await axios.post('https://bat-recup-staging-backend.cleverapps.io/api/users-permissions/login-annuaire', PAYLOAD)
            setEmail('');
            setPwd('');
            setSucess(true);
        }
        catch (err) {

        }
        
    }
    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd]);

    // const validate = (values) => {
    //     const errors = {};
    //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    //     if (!values.password) {
    //         errors.password = ' * Password is required!'
    //     }

    //     if (!values.email) {
    //         errors.email = ' * Email is required!'
    //         console.log(values.email)

    //     } else if (!regex.test(values.email)) {
    //         errors.email = 'This is not a valid email!';
    //         console.log("email is not valid")
    //         console.log(values.email)


    //     }
    //     return errors;
    // };
    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        Go to Home
                    </p>
                </section>
            ) : (
                <div>
                    <section className="gradient-custom">
                        <div className="container py-5 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                    <div className="card">
                                        <div className="card-body p-5 text-center">

                                            <div className="mt-md-2 pb-5">

                                                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                                <p className="text-dark-50 mb-5">Please enter your login and password!</p>
                                                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>


                                                <form onSubmit={handleSubmit}>
                                                    <div className="form-floating mb-3">
                                                        <input type="text"
                                                            className="form-control"
                                                            id="emailInput"
                                                            placeholder="name@example.com"
                                                            ref={userRef}
                                                            autoComplete='off'
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            value={email} />
                                                        <label htmlFor="emailInput">Email address</label>
                                                    </div>


                                                    <div className="form-floating mb-3">
                                                        <input type="password"
                                                            onChange={(e) => setPwd(e.target.value)}
                                                            value={pwd}
                                                            className="form-control" id="passwordInput"
                                                            placeholder="Password"
                                                        />
                                                        <label htmlFor="passwordInput">Password</label>
                                                    </div>
                                                    <p className="small mb-3 pb-lg-2"><a className="text-dark-50" href="#!">Forgot password?</a></p>

                                                    <button className="btn btn-dark btn-lg px-5" type="submit">Login</button>
                                                </form>

                                            </div>

                                            <div>
                                                <p className="mb-0">Don't have an account? <a href="#!" className="text-dark-50 fw-bold">Sign Up</a>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </>
    );
}

export default Login;