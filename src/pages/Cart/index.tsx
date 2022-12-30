import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TopSection from '../../components/TopSection';
import { Store, GuitarInCart } from '../../assets/types';
import CartItem from '../../components/CartItem';

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

    return(
        <div className='checkout'>
            <h3>Total</h3>
            <div className='total'>
                {total.toLocaleString()} €
            </div>
            <button className='btn-1'>Procéder au payment</button>
        </div>
    )
}