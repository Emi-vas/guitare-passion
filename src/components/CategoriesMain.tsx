import React, { useEffect, useState } from 'react';
import { Guitar } from '../assets/types';
import ArticleCard from './ArticleCard';
import Aside from './Aside';
import TopSection from './TopSection';

interface Props {
    title: string,
    data: Guitar[]
}

const CategoriesMain = ({ title, data }: Props) => {
    const [filterStyleSelected, setFilterStyleSelected] = useState<undefined | string>()

    useEffect(() => {
        console.log(filterStyleSelected)
        console.log(data.filter(d => d.style.includes('metal')))
    },[filterStyleSelected])

    return (
        <div>
            <TopSection title={title} />
            <main className='categoriesMain'>
                <Aside 
                    filterStyleSelected={filterStyleSelected}
                    setFilterStyleSelected={setFilterStyleSelected}
                />
                <div className='Categories listeArticles'>
                {
                    data
                    .filter(d => {
                        if(filterStyleSelected) {
                            console.log(filterStyleSelected)
                            return d.style.includes(filterStyleSelected)
                        } else {
                            return true
                        }
                    })
                    .map(
                        article => <ArticleCard article={article} key={article.id}/>
                    )
                }
                </div>
            </main>
            
        </div>
    );
};

export default CategoriesMain;