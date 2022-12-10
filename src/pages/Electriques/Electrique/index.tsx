import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { reqElectricsGuitars } from '../../../assets/req';
import { Guitar } from '../../../assets/types';
import ArticleCard from '../../../components/ArticleCard';
import RateStars from '../../../components/RateStars';
import TopSection from '../../../components/TopSection';

const Electrique = () => {
    const params = useParams()
    const [guitarData, setGuitarData] = useState<undefined | Guitar>()
    const [allGuitarsData, setAllGuitarsData] = useState<undefined | Guitar[]>()

    useEffect(() => {
        axios
        .get(reqElectricsGuitars)
        .then(res => {
            setAllGuitarsData(res.data)
            const resFiltred = res.data.filter((data: any) => data.id == params.id)
            setGuitarData(resFiltred[0])
        })
    },[])

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
                            <Cara data={guitarData.cara}/>
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
                </div>
            }
            <div className='othersSection'>
                <h2>Autres Guitares</h2>
                {
                allGuitarsData && allGuitarsData.slice(0, 3).map((guitar) => (
                
                        <ArticleCard article={guitar} />
                ))
                }
            </div>
        </div>
    );
};

export default Electrique;


interface PropsCara {
    data: {
        sound: number,
        maneuverability: number,
        polyvalence: number
    }
}

const Cara = ({ data }: PropsCara) => {
    const [animSound, setAnimSound] = useState('')
    const [animMan, setAnimMan] = useState('')
    const [animPoly, setAnimPoly] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setAnimSound(`translateX(${data.sound * 100 / 5}%)`)
        }, 200)
        setTimeout(() => {
            setAnimMan(`translateX(${data.maneuverability * 100 / 5}%)`)
        }, 700)
        setTimeout(() => {
            setAnimPoly(`translateX(${data.polyvalence * 100 / 5}%)`)
        }, 1200)
    },[])

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
        </div>
    )
}