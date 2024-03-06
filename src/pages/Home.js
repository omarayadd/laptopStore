import React from "react";
import p1 from '../images/p1.jpg'
import p2 from '../images/p2.jpg'
import p3 from '../images/p3.avif'
import p4 from '../images/p4.webp'
import p5 from '../images/p5.jpg'
import p6 from '../images/p6.jpg'
import p7 from '../images/p7.jpg'
import p8 from '../images/p8.jpg'
import p9 from '../images/p9.webp'
import p10 from '../images/p10.webp'
import p11 from '../images/p11.jpg'
import p12 from '../images/p12.jpg'
import p13 from '../images/p13.jpg'
import p14 from '../images/p14.jpg'
import p15 from '../images/p15.webp'
import p16 from '../images/p16.jpg'
import p17 from '../images/p17.jpg'
import p18 from '../images/p18.jpg'
import p19 from '../images/p19.jpg'
import p20 from '../images/p20.jpg'
import p21 from '../images/p21.jpg'
import p22 from '../images/p22.jpg'
import p23 from '../images/p23.jpg'
import p24 from '../images/p24.jpg'
import p25 from '../images/p25.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";
import { useRegisteredEmail } from "../components/RegisteredEmailProvider";
import { useNavigate } from "react-router-dom";
import { useFavorite } from '../components/FavouriteContext';

export const products = [
  { id: 1, name: "Acus 1", price: "$800", image: p1 },
  { id: 2, name: "Acus 2", price: "$850", image: p2 },
  { id: 3, name: "Asus 3", price: "$900", image: p3 },
  { id: 4, name: "HP 1", price: "$700", image: p4 },
  { id: 5, name: "HP 2", price: "$900", image: p5 },
  { id: 6, name: "Acus 4", price: "$750", image: p6 },
  { id: 7, name: "HP 3", price: "$800", image: p7 },
  { id: 8, name: "Asus 5", price: "$950", image: p8 },
  { id: 9, name: "HP 4", price: "$600", image: p9 },
  { id: 10, name: "HP 5", price: "$999", image: p10 },
  { id: 11, name: "HP 6", price: "$1200", image: p11 },
  { id: 12, name: "HP 7", price: "$600", image: p12 },
  { id: 13, name: "HP 8", price: "$750", image: p13 },
  { id: 14, name: "Asus 6", price: "$1000", image: p14 },
  { id: 15, name: "HP 9", price: "$750", image: p15 },
  { id: 16, name: "Asus 7", price: "$1100", image: p16 },
  { id: 17, name: "Dell 1", price: "$1399", image: p17 },
  { id: 18, name: "Dell 2", price: "$1300", image: p18 },
  { id: 19, name: "Dell 3", price: "$1100", image: p19 },
  { id: 20, name: "Dell 4", price: "$1400", image: p20 },
  { id: 21, name: "Macbook 1", price: "$1600", image: p21 },
  { id: 22, name: "Samsung 1", price: "$1200", image: p22 },
  { id: 23, name: "Macbook 2", price: "$1250", image: p23 },
  { id: 24, name: "Samsung 2", price: "$1300", image: p24 },
  { id: 25, name: "Asus 8", price: "$1500", image: p25 },
];

const Home = () => {
    const navigate = useNavigate();
    const {favorites,  toggleFavorite } = useFavorite();
    const chunkedProducts = products.reduce((acc, _, index) => {
      if (index % 3 === 0) {
        acc.push(products.slice(index, index + 3));
      }
      return acc;
    }, []);
    const { isLoggedIn} = useRegisteredEmail();
    const addProduct = ()=>{
        if(!isLoggedIn){
            navigate('/login')
            return
        }
        alert("payment completed successfully")
    }
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        if(isLoggedIn){
            addToCart();
            alert("Product added to cart!");
        }
        else{
            navigate('/login')
            return 
        }
    };
  
    return (
      <div className="home-container">
        <div className="home-idea">
          <h2>Stream, Create, and Complete the highest levels with newest laptops.</h2>
        </div>
        <div className="home-products">
          {chunkedProducts.map((row, rowIndex) => (
            <div key={rowIndex} className="product-row">
              {row.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-card-body">
                  <img src={product.image} alt={product.name} width="100%" height="300px" />
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <button onClick={addProduct}>Buy Now</button>
                  <Link onClick={handleAddToCart}><FontAwesomeIcon icon={faShoppingCart} className="social-icon" /></Link>
                  <Link onClick={() => toggleFavorite(product.id)}><FontAwesomeIcon icon={faHeart} className={favorites.includes(product.id) ? 'favorite' : ''} /></Link>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Home;