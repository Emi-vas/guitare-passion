import React from 'react';
import Header from './Header';

interface Props {
    title: string,
    disableCart ?: true
}

const TopSection = ({ title, disableCart }: Props) => {
    console.log(title)
    return (
        <div>
            <Header disableCart={disableCart} />
            <div className='Categories top_section '>
                <h1>{ title }</h1>
            </div>
        </div>
    );
};

export default TopSection;