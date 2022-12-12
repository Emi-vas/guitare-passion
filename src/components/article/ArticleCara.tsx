import React, {useEffect, useState} from 'react';

interface Props {
    dataCara: {
        sound: number,
        maneuverability: number,
        polyvalence: number
    }
    dataStyles: string[]
}

const ArticleCara = ({ dataCara, dataStyles }: Props) => {
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
};

export default ArticleCara;