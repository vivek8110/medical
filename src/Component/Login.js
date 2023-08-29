import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import lValidation from '../Lvalidation';

function Login() {

    const navigate = useNavigate();


    const [user, setuser] = useState({
        email: "", password: ""
    })

    const [error, setError] = useState({})


    const url = "http://localhost:3004/users"
    let userdata = ""



    const loginhandler = (e) => {


        setError(lValidation(user))


        e.preventDefault()
        console.log("login")


        axios.get(url).then(Response => {
            userdata = Response.data


            if (user.email === "" && user.password === "") {

                alert('please fill all the field')
            } else {
                // const { email, password } = userdata[]

                const foundUser = userdata.find(
                    (userData) =>
                        userData.email === user.email && userData.password === user.password
                );

                console.log({ user, userdata })
                if (user.email === foundUser.email && user.password === foundUser.password) {
                    console.log("login is ongoing");
                    if (!error.email && !error.password) {
                        navigate('/dashboard')

                    } else {
                        alert('Please enter valid credentials');
                    }


                } else {
                    console.log("login is not happening");
                    console.log(user);
                    console.log(userdata);
                }
            }
        }).catch(error => {
            console.error("An error occurred:", error);
        });
    }

    const onchange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })

        console.log(user);
    }

    const gotoforgot = () => {
        navigate("/fotgot")
    }

    return (
        <div>
            {/* <button onClick={handler}>go</button > */}
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <h3 className="card-title">Login</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={loginhandler}>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label"> Your Email</label>
                                        <input onChange={onchange} type="text" className="form-control" id="email" name="email" />
                                        {error.email && <label style={{ color: "red" }}>{error.email}</label>}

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tepasswordxt" className="form-label">Your Password</label>
                                        <input onChange={onchange} type="text" className="form-control" id="password" name="password" />
                                        {error.password && <label style={{ color: "red" }}>{error.password}</label>}

                                    </div>

                                    <button type="submit" className="btn btn-primary">Login
                                    </button>
                                    <div className="mt-4">
                                        <p onClick={gotoforgot} className='text-danger forgot-p d-inline-block'>Forgot Password ?</p>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login