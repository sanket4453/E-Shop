import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const cart = useSelector(state => state.shop.cart)

    const [cardCount, setCardCount] = useState(0)
    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty;
        });
       
        setCardCount(count)

    }, [cart,cardCount])
    console.log(cart)
    return (
        <>
        <div className="ui fixed menu">
            <div className="ui container center">
                <h2>EShop</h2>
            </div>
            <Link to="/cart">
           <div className="header__link .header__optionBasket">
            <i class="fas fa-cart-plus header__link"></i>
            <span className="header__optionLineTwo header__productCount">
                {/* {basket?.length} */}{cardCount}
                </span>
            </div>
            </Link>
 
        </div>
        </>
    )
}

export default Header
