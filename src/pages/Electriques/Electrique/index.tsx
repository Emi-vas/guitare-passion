import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { dataElectrics } from '../../../assets/electric';
import { reqElectricsGuitars } from '../../../assets/req';
import { Guitar } from '../../../assets/types';
import ArticleMain from '../../../components/article/ArticleMain';
import ArticleSimilar from '../../../components/article/ArticleSimilar';
import TopSection from '../../../components/TopSection';

const Electrique = () => {
    const params = useParams()
    const [guitarData, setGuitarData] = useState<undefined | Guitar>()
    const [allGuitarsData, setAllGuitarsData] = useState<undefined | Guitar[]>()

    //console.log(JSON.stringify(dataElectrics))

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

    return (
        <div>
            <TopSection title='Guitares électriques'/>
            {
                guitarData && <ArticleMain articleData={guitarData} />
            }
            {
                allGuitarsData && guitarData &&
                <ArticleSimilar data={allGuitarsData} articleRef={guitarData} />
            }
            
        </div>
    );
};

export default Electrique;


