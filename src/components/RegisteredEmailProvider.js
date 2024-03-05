import React, { createContext, useContext, useState } from "react";

const RegisteredEmailContext = createContext();

export const RegisteredEmailProvider = ({ children }) => {
    const [registeredUsers, setRegisteredUsers] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkEmailExists = (email) => {
        return registeredUsers.some(user => user.email === email);
    };

    const checkUserExists = (email, password) => {
        return registeredUsers.some(user => user.email === email && user.password === password);
    };

    const registerUser = (email, password) => {
        setRegisteredUsers(prevUsers => [...prevUsers, { email, password }]);
    };

    return (
        <RegisteredEmailContext.Provider value={{ registeredUsers, registerUser, checkEmailExists, checkUserExists, isLoggedIn, setIsLoggedIn  }}>
            {children}
        </RegisteredEmailContext.Provider>
    );
};

export const useRegisteredEmail = () => useContext(RegisteredEmailContext);
