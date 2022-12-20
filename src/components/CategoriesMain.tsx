import React, { useEffect, useState } from 'react';
import { FilterPrice, Guitar } from '../assets/types';
import ArticleCard from './ArticleCard';
import Aside from './Aside';
import TopSection from './TopSection';

interface Props {
    title: string,
    data: Guitar[]
}

const CategoriesMain = ({ title, data }: Props) => {
    const [filterStyleSelected, setFilterStyleSelected] = useState<null | string>(null)
    const [filterPrice, setFilterPrice] = useState<FilterPrice>({min: null, max: null})
    const [dataFiltred, setDataFiltred] = useState<Guitar[] | []>([])

    useEffect(() => {
        let dataFiltredTemp = data.filter(d => {
            if(filterStyleSelected) {
                return d.style.includes(filterStyleSelected)
            } else {
                return true
            }
        })
        .filter(d => {
            if(filterPrice.max) {
                return d.price <= filterPrice.max
            } else {
                return true
            }
        })
        .filter(d => {
            if(filterPrice.min) {
                return d.price >= filterPrice.min
            } else {
                return true
            }
        })
        setDataFiltred(dataFiltredTemp)
    },[filterPrice, filterStyleSelected])

    useEffect(() => {
        console.log(dataFiltred)
    },[dataFiltred])

    return (
        <div>
            <TopSection title={title} />
            <main className='categoriesMain'>
                <Aside 
                    filterStyleSelected={filterStyleSelected}
                    setFilterStyleSelected={setFilterStyleSelected}
                    filterPrice={filterPrice}
                    setFilterPrice={setFilterPrice}
                />
                <div className='Categories listeArticles'>
                {
                    dataFiltred[0] ? 
                    dataFiltred.map(
                        article => <ArticleCard article={article} key={article.id}/>
                    )
                    : <div>Pas de guitare gros</div>
                }
                </div>
            </main>
            
        </div>
    );
};

export default CategoriesMain;