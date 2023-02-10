//react
import React, { useState } from 'react';
//compo
import AcousticGuide from './AcousticGuide';

const Guide = () => {
    const [typeSelected, setTypeSelected] = useState('none')

    return (
        <div className='guide_page'>
            { typeSelected == "none" && <Home setTypeSelected={setTypeSelected} />}
            { typeSelected == "acoustic" && <AcousticGuide />}
        </div>
    );
};

export default Guide;

interface HomeProps {
    setTypeSelected: (v: string) => void
}

const Home = ({ setTypeSelected }: HomeProps) => {
    return (
        <>
            <h1>Quel type de guitare ?</h1>
            <div className='guideHome_bloc'>
                <div className='guideHome_cate' onClick={()=>setTypeSelected('acoustic')}>
                    <img src="./images/articles/16.png" alt="" />
                    <p>Guitare Acoustique</p>
                </div>
            </div>
        </>
    )
}