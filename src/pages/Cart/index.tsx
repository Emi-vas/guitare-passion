//React
import React, { useEffect, useState } from 'react';
//redux
import { useSelector } from 'react-redux';
//Compo
import TopSection from '../../components/TopSection';
import CartItem from '../../components/CartItem';
//Types
import { Store, GuitarInCart } from '../../assets/types';

const Cart = () => {
    const cart = useSelector((store: Store ) => store.cart.cart )
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let totalTemp = 0
        cart.forEach((c: GuitarInCart) => totalTemp = totalTemp + (c.price * c.qte))
        setTotal(totalTemp)

    },[cart])

    return (
        <div className='cart'>
            <TopSection title='Panier' disableCart={true}/>

            <h1>Votre panier</h1>
            <div className='body'>
                <div className='cartItems'>
                {
                    !cart[0] ? 
                    <p className='empty'>Votre panier est vide</p> 
                    :
                    cart.map((c: GuitarInCart) => <CartItem key={c.id} item={c} />)
                }
                </div>

                { cart[0] ? <Checkout total={total}/> : null }
            </div>
        </div>
    );
};

export default Cart;

interface PropsCheckout {
    total : number
}

const Checkout = ({total}: PropsCheckout) => {
    const [sellMessage, setSellMessage] = useState(false)

    return(
        <div className='checkout'>
            <h3>Total</h3>
            <div className='total'>
                {total.toLocaleString()} €
            </div>
            <button className='btn-1' onClick={()=>setSellMessage(true)}>Procéder au payment</button>
            {
                sellMessage && 
                <p>
                    Ce site étant un site vitrine pour mon portfolio, il n'est pas possible d'acheter les guitares. <br />
                    Ce sont cependant de vraies guitares qui sont disponibles sur 
                    <a href="https://www.thomann.de/fr/guitares_basses.html" target="_blank"><strong> Thomann</strong></a>
                </p>
            }
        </div>
    )
}