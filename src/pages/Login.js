import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisteredEmail } from "../components/RegisteredEmailProvider";

const Login = () => {
    const formRefs = useRef({});
    const navigate = useNavigate();
    const { checkUserExists } = useRegisteredEmail(); // Ensure checkUserExists is imported
    const { setIsLoggedIn } = useRegisteredEmail(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredEmail = formRefs.current["email"].value;
        const enteredPassword = formRefs.current["password"].value;

        if (checkUserExists(enteredEmail, enteredPassword)) {
            setIsLoggedIn(true);
            navigate('/laptopStore'); // Redirect to home page
        } else {
            // Email or password is incorrect
            alert("Email or password is incorrect");
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
