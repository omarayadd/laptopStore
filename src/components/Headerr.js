import React from "react";
import { Link } from "react-router-dom";


const Headerr = () => {
    return(
        <div className="header-container">
            <Link to={'/home'}><h2>LapTech</h2></Link>
            <div className="login-part">
                <Link className="login-link" to={'/login'}>Login</Link>
                <Link to={'/register'}>Register</Link>
            </div>
        </div>
    )
}

export default Headerr;