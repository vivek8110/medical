import React, { useState } from 'react'

function Reset() {
    const [newuserlist, setnewuserlist] = useState({
        uname: "", email: "", password: "", otp: ""
    })


    // if (reset.otp === newuserlist.otp) {
    //     alert("confirm password is proccessing")
    // }

    const onchange = (e) => {
        setnewuserlist({
            ...newuserlist, [e.target.name]: e.target.value
        })
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
                                <form >

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
                                    <div className="mb-3">
                                        <label htmlFor="tepasswordxt" className="form-label">Your Password</label>
                                        <input onChange={onchange} type="text" className="form-control" id="password" name="password" />
                                        {/* {error.password && <label style={{ color: "red" }}>{error.password}</label>} */}

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="otp" className="form-label"> Your otp</label>
                                        <input onChange={onchange} type="text" className="form-control" id="otp" name="otp" />
                                        {/* {error.email && <label style={{ color: "red" }}>{error.email}</label>} */}

                                    </div>

                                    <button type="submit" className="btn btn-primary">Reset password</button>
                                    <div className="mt-4">
                                        {/* <p onClick={gotoforgot} className='text-danger forgot-p d-inline-block'>Forgot Password ?</p> */}

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

export default Reset