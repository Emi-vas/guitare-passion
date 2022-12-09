import React, { useEffect, useState } from 'react';
import { ICONS } from '../assets/constants';
interface Props {
    rate: number
}

const RateStars = ({rate}: Props) => {
    const [starsArray, setStarsArray] = useState<any>([])

    console.log(Math.trunc(rate))

    useEffect(() => {
        let tempArrayStars: undefined | string[] = []

        //full stars
        for(let i = 0; i < Math.trunc(rate); i++ ) {
            tempArrayStars = [...tempArrayStars, ICONS.starFull]
        }
        //half stars
        if(Math.round(rate) != Math.trunc(rate)) {
            tempArrayStars = [...tempArrayStars, ICONS.starHalf]
        }
        //empty stars
        for(let i = 0; i < (5 - Math.round(rate)); i++ ) {
            tempArrayStars = [...tempArrayStars, ICONS.starEmpty]
        }
        setStarsArray(tempArrayStars)
    },[])

    return (
        <div>
            {
                starsArray && starsArray.map(
                    (star: any, index: number) => <i className={star} key={index}></i>
                )
            }
        </div>
    );
};

export default RateStars;