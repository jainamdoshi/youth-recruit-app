import React from 'react'
import { Link } from 'react-router-dom'

export default function SignupIntro() {
    return (
        <div className="col-md-3 register-left">
            <img src="/assets/images/Youth-Recruit-Logo.jpeg" alt=""></img>
            <h3>Youth Recruit</h3>
            <p>Buckle up, You are about to start your Job search Journey with Youth Recruit!</p>
            <p> You already have an account ?</p>
            {/* <a href="login.html" name="login" value="Login"> <button> Login </button></a> <br /> */}
            <Link to="/login">Log In</Link>
        </div>
    )
}
