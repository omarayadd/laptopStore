import React from 'react';
import { useFavorite } from '../components/FavouriteContext';
import { Link } from "react-router-dom";

const Favourites = () => {
  const { favorites } = useFavorite();

  return (
    <div className='favourite-container'>
      <h2>Favourites page</h2>
      {favorites.length === 0 ? (
        <>
            <p>No favourites yet</p>
            <Link to='/'><button>Explore items</button></Link>
        </>
      ) : (
        <ul>
          {favorites.map((productId) => (
            <li key={productId}>Product ID: {productId}</li>
          ))}
        </ul>
      )}
    
    </div>
  );
};

export default Favourites;
