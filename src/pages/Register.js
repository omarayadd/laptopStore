import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisteredEmail } from "../components/RegisteredEmailProvider";

const Register = () => {
    const formRefs = useRef({});
    const navigate = useNavigate();
    const { setRegisteredEmail, checkEmailExists } = useRegisteredEmail();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {};
        let password = formRefs.current["password"].value;
        let confirmPassword = formRefs.current["confirmPassword"].value;
        const enteredEmail = formRefs.current["email"].value;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        if (checkEmailExists(enteredEmail)) {
            alert("This email is already registered");
            return;
        }

        setRegisteredEmail(enteredEmail);

        Object.keys(formRefs.current).forEach((key) => {
            formData[key] = formRefs.current[key].value;
        });
        console.log(formData);
        formRefs.current["firstName"].value = "";
        formRefs.current["lastName"].value = "";
        formRefs.current["email"].value = "";
        formRefs.current["password"].value = "";
        formRefs.current["confirmPassword"].value = "";
        setTimeout(() => {
            navigate("/login");
        }, 1000);
    };

    return (
        <div className="info-container">
            <form className="info-form" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <input type="text" placeholder="Enter your first name" ref={(ref) => (formRefs.current["firstName"] = ref)} />
                <input type="text" placeholder="Enter your last name" ref={(ref) => (formRefs.current["lastName"] = ref)} />
                <input type="email" placeholder="Enter your email" ref={(ref) => (formRefs.current["email"] = ref)} />
                <input type="password" placeholder="Enter your password" ref={(ref) => (formRefs.current["password"] = ref)} />
                <input type="password" placeholder="Confirm your password" ref={(ref) => (formRefs.current["confirmPassword"] = ref)} />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Register;
