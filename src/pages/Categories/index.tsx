/*  

        DEAD, KILL WHEN YOU SURE

*/


import React from 'react';
import Header from '../../components/Header';

interface Props {
    title: string,
    req: string
}

const Categories = ({ title, req }: Props) => {

    console.log(req)

    return (
        <div>
            <Header />
            <div className='Categories top_section '>
                <h1>{ title }</h1>
            </div>
        </div>
    );
};

export default Categories;