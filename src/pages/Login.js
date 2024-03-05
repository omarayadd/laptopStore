// Login.js
import React, { useRef } from "react";
import { useRegisteredEmail } from "../components/RegisteredEmailProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const formRefs = useRef({});
    const navigate = useNavigate();
   // const { registeredEmail } = useRegisteredEmail();
    const {checkEmailExists } = useRegisteredEmail();

    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredEmail = formRefs.current["email"].value;

        // Check if entered email matches registered email
        if (checkEmailExists(enteredEmail)) {
            navigate('/home')
        } else {
            // Email does not match
            alert("Email not registered");
        }
    };

    return (
        <div className="info-container">
            <form className="info-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input type="email" placeholder="Enter your email" ref={(ref) => (formRefs.current["email"] = ref)} />
                <input type="password" placeholder="Enter your password" ref={(ref) => (formRefs.current["password"] = ref)} />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;
