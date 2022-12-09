import React from 'react';
import { Guitar } from '../assets/types';
import ArticleCard from './ArticleCard';
import Header from './Header';

interface Props {
    title: string,
    data: Guitar[]
}

const CategoriesMain = ({ title, data }: Props) => {


    return (
        <div>
            <Header />
            <div className='Categories top_section '>
                <h1>{ title }</h1>
            </div>
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