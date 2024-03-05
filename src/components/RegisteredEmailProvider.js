// RegisteredEmailProvider.js
import React, { createContext, useContext, useState } from "react";

const RegisteredEmailContext = createContext();

export const RegisteredEmailProvider = ({ children }) => {
    const [registeredEmails, setRegisteredEmails] = useState([]);

    const checkEmailExists = (email) => {
        return registeredEmails.includes(email);
    };

    const setRegisteredEmail = (email) => {
        setRegisteredEmails((prevEmails) => [...prevEmails, email]);
    };

    return (
        <RegisteredEmailContext.Provider value={{ registeredEmails, setRegisteredEmail, checkEmailExists }}>
            {children}
        </RegisteredEmailContext.Provider>
    );
};

export const useRegisteredEmail = () => useContext(RegisteredEmailContext);
