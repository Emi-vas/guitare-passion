import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataElectrics } from '../../assets/electric';
import { Guitar } from '../../assets/types';
import useIsInCart from '../../hooks/useIsInCart';
import { addToCart, removeToCart } from '../../redux/shoppingCart/shoppingCart.actions';
import RateStars from '../RateStars';
import ArticleCara from './ArticleCara';
interface Props {
    articleData: Guitar
}

const ArticleMain = ({ articleData }: Props) => {
    const dispatch = useDispatch()
    const isInCart = useIsInCart(articleData)

    return (
        <div className='articlePage'>
            <h1>{ articleData.name }</h1>
            <div className='body'>
                <div className='blocImage'>
                    <img src={'/images/articles/' + articleData.img} alt={articleData.name} />
                </div>
                <div className='blocRate'>
                    <ArticleCara dataCara={articleData.cara} dataStyles={articleData.style}/>
                    <div className='stars'>
                        <h2>Note globale</h2>
                        <RateStars rate={articleData.rate} />
                    </div>
                </div>
                <div className='blocSell'>
                    <div className='price'>
                        <p>Tarif :</p>
                        <p ><span> {articleData.price} €</span></p>
                    </div>
                    {
                        !isInCart ? <button 
                            className='btn-1'
                            onClick={()=>dispatch(addToCart(articleData))}
                        >Ajouter au panier</button>
                        :
                        <div className='qteBloc'>
                            <button
                                className='btn-1'
                                onClick={()=>dispatch(removeToCart(articleData))}
                            >-</button>
                            <p data-testid="cart-qte">{isInCart}</p>    
                            <button
                                className='btn-1'
                                onClick={()=>dispatch(addToCart(articleData))}
                            >+</button>    
                        </div>
                    }
                </div>
            </div>
            <div className='blocDesc'>
                <p><span className='paraSpace'></span>{ articleData.desc }</p>
            </div>
            <div className='blocVideo'>
                <iframe  src={articleData.video} title="YouTube video player" data-testid="video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </div>
        </div>
    );
};

export default ArticleMain;