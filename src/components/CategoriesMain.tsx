import React from 'react';
import Header from './Header';

interface Props {
    title: string
}

const CategoriesMain = ({ title }: Props) => {
    return (
        <div>
            <Header />
            <div className='Categories top_section '>
                <h1>{ title }</h1>
            </div>
        </div>
    );
};

export default CategoriesMain;