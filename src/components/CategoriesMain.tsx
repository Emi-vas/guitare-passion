import React from 'react';
import { Guitar } from '../assets/types';
import ArticleCard from './ArticleCard';
import Aside from './Aside';
import TopSection from './TopSection';

interface Props {
    title: string,
    data: Guitar[]
}

const CategoriesMain = ({ title, data }: Props) => {


    return (
        <div>
            <TopSection title={title} />
            <main className='categoriesMain'>
                <Aside />
                <div className='Categories listeArticles'>
                {
                    data.map(
                        article => <ArticleCard article={article} key={article.id}/>
                    )
                }
                </div>
            </main>
            
        </div>
    );
};

export default CategoriesMain;