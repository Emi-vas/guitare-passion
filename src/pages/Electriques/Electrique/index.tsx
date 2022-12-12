import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { data } from '../../../assets/electric';
import { reqElectricsGuitars } from '../../../assets/req';
import { Guitar } from '../../../assets/types';
import ArticleCard from '../../../components/ArticleCard';
import RateStars from '../../../components/RateStars';
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
                guitarData && 
                <div className='articlePage'>
                    <h1>{ guitarData.name }</h1>
                    <div className='body'>
                        <div className='blocImage'>
                            <img src={'/images/articles/' + guitarData.img} alt={guitarData.name} />
                        </div>
                        <div className='blocRate'>
                            <Cara dataCara={guitarData.cara} dataStyles={guitarData.style}/>
                            <div className='stars'>
                                <h2>Note globale</h2>
                                <RateStars rate={guitarData.rate} />
                            </div>
                        </div>
                        <div className='blocSell'>
                            <div className='price'>
                                <p>Tarif :</p>
                                <p ><span> {guitarData.price} €</span></p>
                            </div>
                            <button className='btn-1'>Ajouter au panier</button>
                        </div>
                    </div>
                    <div className='blocDesc'>
                        <p><span className='paraSpace'></span>{ guitarData.desc }</p>
                    </div>
                    <div className='blocVideo'>
                        <iframe  src={guitarData.video} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    </div>
                </div>
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


interface PropsCara {
    dataCara: {
        sound: number,
        maneuverability: number,
        polyvalence: number
    }
    dataStyles: string[]
}

const Cara = ({ dataCara, dataStyles }: PropsCara) => {
    const [animSound, setAnimSound] = useState('')
    const [animMan, setAnimMan] = useState('')
    const [animPoly, setAnimPoly] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setAnimSound(`translateX(${dataCara.sound * 100 / 5}%)`)
        }, 100)
        setTimeout(() => {
            setAnimMan(`translateX(${dataCara.maneuverability * 100 / 5}%)`)
        }, 300)
        setTimeout(() => {
            setAnimPoly(`translateX(${dataCara.polyvalence * 100 / 5}%)`)
        }, 500)
    },[dataCara])

    return (
        <div className='blocCara'>
            <p>Son</p>
            <div className='rate'>
                <div 
                    className='rate-after'
                    style={{ transform: animSound }}
                ></div>
            </div>

            <p>Maniabilité</p>
            <div className='rate'>
                <div 
                    className='rate-after'
                    style={{ transform: animMan }}
                ></div>
            </div>

            <p>Polyvalence</p>
            <div className='rate'>
                <div 
                    className='rate-after'
                    style={{ transform: animPoly }}
                ></div>
            </div>
            <p>Styles</p>
            <div className='styles'>
                {
                    dataStyles.map(style => (
                        <div>
                            [{ style }]
                        </div>
                    ))
                }
            </div>
        </div>
    )
}