// React
import { useEffect, useState } from 'react';
import axios from "axios";
//components
import TopSection from '../../components/TopSection';
import Loader from '../../components/Loader';
import ArticleCard from '../../components/ArticleCard';
import Aside from '../../components/Aside';
//types
import { FilterPrice, Guitar } from '../../assets/types';

//temp
import { dataAcoustic } from '../../assets/acoustic';


interface Props {
    title: string
    req: string
    listFilters: string[]
}

const MainCategorie = ({ title, req, listFilters }: Props) => {
    const [data, setData] = useState<[] | Guitar[]>([])
    const [dataFiltred, setDataFiltred] = useState<Guitar[] | []>([])
    //filters
    const [filterStyleSelected, setFilterStyleSelected] = useState<null | string>(null)
    const [filterPrice, setFilterPrice] = useState<FilterPrice>({min: null, max: null})

    console.log(JSON.stringify(dataAcoustic))

    useEffect(()=>{
        axios.get(req).then((res: any)=> setData(res.data))
        setFilterStyleSelected(null)
        setFilterPrice({min: null, max: null})
    }, [req])

    useEffect(() => {
        //handle filter
        if(!data[0]) {
            return
        }
    
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
    },[filterPrice, filterStyleSelected, data])


    if(!data[0]) {
        return <Loader />
    }

    return (
        <div>
            <TopSection title={title} />
            <main className='categoriesMain'>
                <Aside
                    listFilters={listFilters}
                    filterStyleSelected={filterStyleSelected}
                    setFilterStyleSelected={setFilterStyleSelected}
                    filterPrice={filterPrice}
                    setFilterPrice={setFilterPrice}
                    page={title}
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

export default MainCategorie;