

export default function Validation(user) {

    let error = {}
    if (user.uname === "" || user.email === "" || user.password === "" || user.conp === "") {
        error.uname = "please provide your name"
        error.email = "please provide your email"
        error.password = "please enter your password"
        error.conp = "please enter confirm password"
    }

    if (!user.email) {
        error.email = "please fill the email field";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
        error.email = "email must be like this 'abc@xyz.com'";
    }

    // password validation 

    if (!user.password) {
        error.password = "please fill the password field"
    }
    else if (user.password.length <= 8 || !/[A-Z]/.test(user.password) || !/[a-z]/.test(user.password) || !/\d/.test(user.password)) {
        error.password = "password must contain 1 uppercase,1 lowercase letter and one number"
    }

    // mobile validation

    // if (!/^\d{10}$/.test(user.mobile)) {
    //     error.mobile = "Mobile number must be 10 digits";
    // }

    // name validation 

    if (user.uname.length < 3) {
        error.uname = "your name must be upto 3 character"
    }

    // conp validation
    if (user.password !== user.conp) {
        error.conp = "confirm password doesn't match to your password"
    }

    return error
}

