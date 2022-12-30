import React from 'react';
import { useSelector } from 'react-redux';
import TopSection from '../../components/TopSection';
import { Store, GuitarInCart } from '../../assets/types';
import CartItem from '../../components/CartItem';

const Cart = () => {
    const cart = useSelector((store: Store ) => store.cart.cart )

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

                { cart[0] ? <Checkout /> : null }
            </div>
        </div>
    );
};

export default Cart;


const Checkout = () => {
    const cart = useSelector((store: Store ) => store.cart.cart )

    return(
        <div className='checkout'>
            <h3>Votre commande</h3>
            <div>

            </div>
        </div>
    )
}