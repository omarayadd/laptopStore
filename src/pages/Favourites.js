import React from 'react';
import { useFavorite } from '../components/FavouriteContext';
import { Link } from "react-router-dom";
import { products } from './Home';

const Favourites = () => {
  const { favorites } = useFavorite();

  return (
    <div className='favourite-container'>
      <h2>Favourites page</h2>
      {favorites.length === 0 ? (
        <div className='favourite-first'>
          <p>No favourites yet, let's discover items</p>
          <Link to='/laptopStore'><button>Explore items</button></Link>
        </div>
      ) : (
        <div className='product-container'>
          {favorites.map((productId) => {
            const product = products.find((p) => p.id === productId);
            return (
              <div key={productId} className='product-card'>
                <img src={product.image} alt={product.name} />
                <div className='product-details'>
                  <p className='product-name'>{product.name}</p>
                  <p className='product-price'>{product.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Favourites;
