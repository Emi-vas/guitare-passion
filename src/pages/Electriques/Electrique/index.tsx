import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { data } from '../../../assets/electric';
import { reqElectricsGuitars } from '../../../assets/req';
import { Guitar } from '../../../assets/types';
import ArticleMain from '../../../components/article/ArticleMain';
import ArticleCard from '../../../components/ArticleCard';
import TopSection from '../../../components/TopSection';

const Electrique = () => {
    const params = useParams()
    const [guitarData, setGuitarData] = useState<undefined | Guitar>()
    const [allGuitarsData, setAllGuitarsData] = useState<undefined | Guitar[]>()

    console.log(JSON.stringify(data))

    useEffect(() => {
        axios
        .get(reqElectricsGuitars)
        .then(res => {
            setAllGuitarsData(res.data)
            const resFiltred = res.data.filter((data: any) => data.id == params.id)
            setGuitarData(resFiltred[0])
        })
        window.scrollTo(0,0)
    },[params.id])

    useEffect(() => {
        console.log(guitarData)
    },[guitarData])

    return (
        <div>
            <TopSection title='Guitares électriques'/>
            {
                guitarData && <ArticleMain articleData={guitarData} />
            }
            <div className='othersSection'>
                <h2>Autres Guitares</h2>
                {
                allGuitarsData && allGuitarsData.slice(0, 5).map((guitar) => (
                    <ArticleCard article={guitar} />
                ))
                }
            </div>
        </div>
    );
};

export default Electrique;


