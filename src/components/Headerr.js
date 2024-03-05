import React from "react";
import { Link } from "react-router-dom";
import { useRegisteredEmail } from "../components/RegisteredEmailProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "./CartContext";

const Headerr = () => {
    const { isLoggedIn, setIsLoggedIn } = useRegisteredEmail();
    const { cartCount } = useCart();
    const logout = () =>{
        setIsLoggedIn(false)
    }
    return (
        <div className={`header-container ${isLoggedIn ? 'logged-in' : 'logged-out'}`}>
            <Link to={'/home'}><h2>LapTech</h2></Link>
            <div className="login-part">
                {isLoggedIn ? (
                    <>
                       <div className="cart-items">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span class="header-count">{cartCount}</span>
                       </div>
                        <FontAwesomeIcon icon={faHeart}  color="red"/>
                        <Link onClick={logout} to={'/login'}>Logout</Link>
                    
                    </>
                ) : (
                    <>
                        <Link className="login-link" to={'/login'}>Login</Link>
                        <Link to={'/register'}>Register</Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Headerr;
