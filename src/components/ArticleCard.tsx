import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Guitar } from '../assets/types';
import RateStars from './RateStars';
interface Props {
    article: Guitar
    similar?: true
}

const ArticleCard = ({ article, similar }: Props) => {
    const location = useLocation()
    const urlInfo = location.pathname.split('/')[1]
    
    return (
        <Link 
            to={similar ? `../${urlInfo}/${article.id}` : `./${article.id}`} 
            className='articleCard'
        >
            <p className='price'>{article.price}€</p>
            <img src={"/images/articles/" + article.img} alt={article.name} />
            <p className='title'>{ article.name }</p>
            <div className='rate'>
                <RateStars rate={article.rate} />
            </div>
        </Link>
    );
};

export default ArticleCard;