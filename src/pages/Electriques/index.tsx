import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoriesMain from '../../components/CategoriesMain';
import Header from '../../components/Header';
import { reqElectricsGuitars } from '../../assets/req';
import { Guitar } from '../../assets/types';
import Loader from '../../components/Loader';
import TopSection from '../../components/TopSection';

const Electriques = () => {
    const [dataGuitars, setDataGuitars] = useState<undefined | Guitar[]>()

    useEffect(() => {
        axios
        .get(reqElectricsGuitars)
        .then(res => setDataGuitars(res.data))

    }, [])

    return (
        <div>
            { dataGuitars && <CategoriesMain title='Guitares électriques' data={dataGuitars}/> }
            { !dataGuitars && <Loader /> }
        </div>
    );
};

export default Electriques;