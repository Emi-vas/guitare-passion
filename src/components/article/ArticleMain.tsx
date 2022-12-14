import React from 'react';
import { dataElectrics } from '../../assets/electric';
import { Guitar } from '../../assets/types';
import RateStars from '../RateStars';
import ArticleCara from './ArticleCara';
interface Props {
    articleData: Guitar
}

const ArticleMain = ({ articleData }: Props) => {
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
                    <button className='btn-1'>Ajouter au panier</button>
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