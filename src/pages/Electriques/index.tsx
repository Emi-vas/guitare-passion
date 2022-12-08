import axios from 'axios';
import React, { useEffect } from 'react';
import CategoriesMain from '../../components/CategoriesMain';
import Header from '../../components/Header';

const Electriques = () => {

    useEffect(() => {
        axios
        .get("./fakeBdd/articles/electric-guitar.json")
        .then(res => console.log(res.data))
    }, [])

    return (
        <div>
            <Header />
            <CategoriesMain title='Guitares électriques'/>
        </div>
    );
};

export default Electriques;