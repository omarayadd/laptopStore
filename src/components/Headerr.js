import React from "react";
import { Link } from "react-router-dom";
import { useRegisteredEmail } from "../components/RegisteredEmailProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "./CartContext";
import { useFavorite } from './FavouriteContext';

const Headerr = () => {
    const { isLoggedIn, setIsLoggedIn } = useRegisteredEmail();
    const { cartCount, setCartCount } = useCart();
    const{setFavorites} = useFavorite();
    const logout = () =>{
        setCartCount(0)
        setIsLoggedIn(false)
        setFavorites([])
    }
    return (
        <div className={`header-container ${isLoggedIn ? 'logged-in' : 'logged-out'}`}>
            <Link to={'/laptopStore'}><h2>LapTech</h2></Link>
            <div className="login-part">
                {isLoggedIn ? (
                    <>
                       <div className="cart-items">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span class="header-count">{cartCount}</span>
                       </div>
                       <Link to={'/favourites'}><FontAwesomeIcon icon={faHeart}  color="red"/></Link>
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
