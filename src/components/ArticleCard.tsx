import React from 'react';
import { Link } from 'react-router-dom';
import { Guitar } from '../assets/types';
import RateStars from './RateStars';
interface Props {
    article: Guitar
}

const ArticleCard = ({ article }: Props) => {
    return (
        <Link to={`/guitares-electriques/${article.id}`} className='articleCard'>
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