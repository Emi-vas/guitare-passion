import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Guitar } from '../../assets/types';
import useIsInCart from '../../hooks/useIsInCart';
import { addToCart, removeToCart } from '../../redux/shoppingCart/shoppingCart.actions';
import RateStars from '../RateStars';
import ArticleCara from './ArticleCara';
import { ICONS } from '../../assets/constants';
import ArticleCaraAmpli from './ArticleCaraAmpli';
interface Props {
    articleData: Guitar
    title: string
}

const ArticleMain = ({ articleData, title }: Props) => {
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
                    {
                        title == "Amplis" ? 
                        <ArticleCaraAmpli dataCara={articleData.cara} dataStyles={articleData.style} />
                        : 
                        <ArticleCara dataCara={articleData.cara} dataStyles={articleData.style}/>
                    }
                    
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
                            className='btn-1 btn-add'
                            onClick={()=>dispatch(addToCart(articleData))}
                        >Ajouter au panier</button>
                        :
                        <>
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
                            <Link to={"/cart"} className='linkCart'>
                                <p>Voir le panier</p>
                                <i className={ICONS.cart}></i>
                            </Link>
                        </>
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