import React, { useState } from 'react';
import { Guitar } from '../../assets/types';
import ArticleCard from '../ArticleCard';

interface Props {
    data: Guitar[] //all guitars
    articleRef: Guitar //the guitar to compare
}

const ArticleSimilar = ({ data, articleRef }: Props) => {
    const [dataSimilar, setDataSimilar] = useState<undefined | Guitar[]>()



    return (
        <div className='othersSection'>
            <h2>Autres Guitares</h2>
            {
                data.slice(0, 5).map((article) => (
                    <ArticleCard article={article} key={article.id}/>
                ))
            }
        </div>
    );
};

export default ArticleSimilar;