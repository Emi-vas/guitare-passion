import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import TopSection from '../../components/TopSection';
import { Store, GuitarInCart } from '../../assets/types';

const Cart = () => {
    const cart = useSelector((store: Store ) => store.cart.cart )

    console.log(cart)

    return (
        <div className='panier'>
            <TopSection title='Panier' disableCart={true}/>

            <h1>Votre panier</h1>

            {
                !cart[0] ? <p className='empty'>Votre panier est vide</p> :

                cart.map((c: GuitarInCart) => (
                    <p key={c.id}>Voila votre panier</p>
                ))


            }

        </div>
    );
};

export default Cart;