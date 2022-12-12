import React from 'react';
import { Guitar } from '../assets/types';
import ArticleCard from './ArticleCard';
import TopSection from './TopSection';

interface Props {
    title: string,
    data: Guitar[]
}

const CategoriesMain = ({ title, data }: Props) => {


    return (
        <div>
            <TopSection title={title} />
            <div className='Categories listeArticles'>
            {
                data.map(
                    article => <ArticleCard article={article} key={article.id}/>
                )
            }
            </div>
            
        </div>
    );
};

export default CategoriesMain;