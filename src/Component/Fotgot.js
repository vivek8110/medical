import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import Reset from './Reset'

function Fotgot() {

    const [reset, setReset] = useState({
        uname: "", email: "", otp: Math.floor(Math.random() * 1000000)
    })

    // const [otp, setotp] = useState

    const navigate = useNavigate()

    const url = "http://localhost:3004/users"
    const [otpform, setotpForm] = useState(false)
    const onchange = (e) => {
        setReset({
            ...reset, [e.target.name]: e.target.value
        })

    }
    console.log(reset);

    const resetHandler = (e) => {
        e.preventDefault()

        // let otp = Math.floor(Math.random() * 1000000)


        axios.get(url).then((res) => {

            let newresetemail = reset.email.toLowerCase()
            let newresteuname = reset.uname.toLowerCase()

            if (reset.email === "" && reset.uname === "") {

                alert("name or email is not given")
            } else {
                if (newresteuname.uname === res.data.uname && newresetemail.email === res.data.email) {
                    alert(reset.otp)
                    console.log(reset.otp);
                    setotpForm(true)

                    navigate("/reset")

                    // setotp(Reset(reset))

                    setReset({
                        uname: "",
                        email: "",

                    })
                } else {
                    alert("wrong username or password")
                }
            }
        })
    }


    const otphandler = (e) => {
        e.preventDefault()
    }
    return (
        <div>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <h3 className="card-title">Reset your password</h3>
                            </div>
                            <div className="card-body">
                                {otpform ?

                                    (<form onSubmit={otphandler}>


                                        <div className="mb-3">
                                            <label htmlFor="otp" className="form-label">Your otp</label>
                                            <input onChange={onchange} type="text" className="form-control" id="otp" name="otp" />
                                            {/* {error.password && <label style={{ color: "red" }}>{error.password}</label>} */}

                                        </div>

                                        <button type="submit" className="btn btn-primary">Get otp</button>
                                        <div className="mt-4">
                                            {/* <p onClick={gotoforgot} className='text-danger forgot-p d-inline-block'>Forgot Password ?</p> */}

                                        </div>
                                    </form>) : (<form onSubmit={resetHandler}>

                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label"> Your name</label>
                                            <input onChange={onchange} type="text" className="form-control" id="name" name="uname" />
                                            {/* {error.email && <label style={{ color: "red" }}>{error.email}</label>} */}

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label"> Your Email</label>
                                            <input onChange={onchange} type="text" className="form-control" id="email" name="email" />
                                            {/* {error.email && <label style={{ color: "red" }}>{error.email}</label>} */}

                                        </div>
                                        {/* <div className="mb-3">
                                        <label htmlFor="otp" className="form-label">Your Password</label>
                                        <input onChange={onchange} type="text" className="form-control" id="otp" name="otp" />
                                        {error.password && <label style={{ color: "red" }}>{error.password}</label>}

                                    </div> */}

                                        <button type="submit" className="btn btn-primary">Get otp</button>
                                        <div className="mt-4">
                                            {/* <p onClick={gotoforgot} className='text-danger forgot-p d-inline-block'>Forgot Password ?</p> */}

                                        </div>
                                    </form>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>


    )
}

export default Fotgot