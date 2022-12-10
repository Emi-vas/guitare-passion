import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { reqElectricsGuitars } from '../../../assets/req';
import { Guitar } from '../../../assets/types';
import TopSection from '../../../components/TopSection';

const Electrique = () => {
    const params = useParams()
    const [guitarData, setGuitarData] = useState<undefined | Guitar>()

    useEffect(() => {
        axios
        .get(reqElectricsGuitars)
        .then(res => {
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
                        <div className='blocRight'>
                            <Cara data={guitarData.cara}/>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Electrique;


interface PropsCara {
    data: any
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