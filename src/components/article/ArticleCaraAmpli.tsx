import React, {useEffect, useState} from 'react';

interface Props {
    dataCara: {
        sound: number,
        puissance?: number,
        polyvalence: number
    }
    dataStyles: string[]
}

const ArticleCaraAmpli = ({ dataCara, dataStyles }: Props) => {
    const [animSound, setAnimSound] = useState('')
    const [animPoly, setAnimPoly] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setAnimSound(`translateX(${dataCara.sound * 100 / 5}%)`)
        }, 100)
        setTimeout(() => {
            setAnimPoly(`translateX(${dataCara.polyvalence * 100 / 5}%)`)
        }, 300)
    },[dataCara])

    console.log(dataCara.sound)

    return (
        <div className='blocCara'>
            <p>Son</p>
            <div className='rate'>
                <div 
                    className='rate-after'
                    style={{ transform: animSound }}
                ></div>
            </div>

            <p>Polyvalence</p>
            <div className='rate'>
                <div 
                    className='rate-after'
                    style={{ transform: animPoly }}
                ></div>
            </div>
            <p>Puissance</p>
            <div className='puissance'>
                <p>{dataCara.puissance} <span>Watts</span></p>
            </div>
            <p>Styles</p>
            <div className='styles'>
                {
                    dataStyles.map(style => (
                        <div key={style}>
                            [{ style }]
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default ArticleCaraAmpli;