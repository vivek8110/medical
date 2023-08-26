import React, { useState } from 'react'
import Validation from './Validation'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        uname: "", email: "", password: "", conp: ""
    })
    const url = "http://localhost:3004/users"

    // const [userlist, setUserList] = useState([])
    const [error, setError] = useState({})


    const onchange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })

        // console.log(user);
    }
    // const submithandler = (e) => {
    //     e.preventDefault();
    //     setError(Validation(user))

    //     if (!error.uname) {
    //         if (!error.email) {
    //             if (!error.password) {
    //                 if (!error.conp) {
    //                     // setUserList([
    //                     //     ...userlist, { ...user }
    //                     // ])

    //                     axios.post(url, user).then((res) => {
    //                         console.log(res.data);
    //                         setUser({
    //                             uname: "", email: "", password: "", conp: ""
    //                         })


    //                         navigate("/Login")
    //                     })

    //                 } else {


    //                 }
    //             } else {

    //             }
    //         } else {

    //         }
    //     } else {

    //     }





    // }
    const submithandler = (e) => {
        e.preventDefault();
        const validationErrors = Validation(user);
        setError(validationErrors);
        console.log("Validation Errors:", validationErrors);

        if (!Object.values(validationErrors).some(error => error !== '')) {
            console.log("Navigating...");
            axios.post(url, user).then((res) => {
                console.log(res.data);
                setUser({
                    uname: "", email: "", password: "", conp: ""
                });
                navigate("/Login"); // Navigating after successful registration
            });
        } else {
            console.log("Validation errors exist. Cannot navigate.");
        }
    };


    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <h3 className="card-title">Register</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submithandler}>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input onChange={onchange} type="text" className="form-control" value={user.uname} id="username" name="uname" />
                                        {error.uname && <label style={{ color: "red" }}>{error.uname}</label>}

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input onChange={onchange} type="text" className="form-control" value={user.email} id="email" name="email" />
                                        {error.email && <label style={{ color: "red" }}>{error.email}</label>}

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tepasswordxt" className="form-label">Password</label>
                                        <input onChange={onchange} type="text" className="form-control" value={user.password} id="password" name="password" />
                                        {error.password && <label style={{ color: "red" }}>{error.password}</label>}

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="conp" className="form-label">Confirm Password</label>
                                        <input onChange={onchange} type="text" className="form-control" value={user.conp} id="conp" name="conp" />
                                        {error.conp && <label style={{ color: "red" }}>{error.conp}</label>}

                                    </div>
                                    <button type="submit" className="btn btn-primary">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register