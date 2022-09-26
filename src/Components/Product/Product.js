import './Product.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {product, addToCartHandler} = props
    const {img, name, price, seller, ratings} = product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
            <p className="product-name">{name}</p>
            <p className="product-price">Price: ${price}</p>
            <p><small>Manufacturer : {seller}</small></p>
            <p><small>Rating : {ratings}</small></p>
            </div>
            <button onClick={()=> addToCartHandler(product)} className="btn-cart">
                <p className="btn-text">Add To cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;