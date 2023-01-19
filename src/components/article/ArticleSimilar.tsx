import React, { useEffect, useState } from 'react';
import { Guitar } from '../../assets/types';
import ArticleCard from '../ArticleCard';

interface Props {
    data: Guitar[] //all guitars
    articleRef: Guitar //the guitar to compare
}

const ArticleSimilar = ({ data, articleRef }: Props) => {
    const [dataSimilar, setDataSimilar] = useState<undefined | Guitar[]>()

    useEffect(() => {
        let tempsSimilar: any = []
        let styleMain = articleRef.style[0]

        //Seek for articles whith same style of product
        if(data && articleRef) {
            data.map(article => {
                article.style.map(style => {
                    if (style == styleMain){
                        //remove the articleRef
                        if(article.id != articleRef.id) {
                            tempsSimilar = [...tempsSimilar, article]
                        }
                    }
                })
            })
        }

        let tempSimilarWithPrice: any = []
        
        //Filtred with price -500 and +500 of article ref
        tempsSimilar.map((article: any) => {
            const dif = article.price - articleRef.price
            if(dif <= 500 && dif >= -500) {
                tempSimilarWithPrice = [...tempSimilarWithPrice, article]
            }
        })

        //apply the filter if there are enough articles
        if(tempSimilarWithPrice.length >= 3) {
            tempsSimilar = tempSimilarWithPrice
        }

        setDataSimilar(tempsSimilar.slice(0, 3))
    },[data, articleRef])

    return (
        <div className='othersSection'>
            <h2>Articles similaires</h2>
            {
                dataSimilar && dataSimilar.map((article) => (
                    <ArticleCard article={article} key={article.id} similar={true}/>
                ))
            }
        </div>
    );
};

export default ArticleSimilar;