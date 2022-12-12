import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoriesMain from '../../components/CategoriesMain';
import { reqElectricsGuitars } from '../../assets/req';
import { Guitar } from '../../assets/types';
import Loader from '../../components/Loader';

const Electriques = () => {
    const [dataGuitars, setDataGuitars] = useState<undefined | Guitar[]>()

    useEffect(() => {
        axios
        .get(reqElectricsGuitars)
        .then(res => {
            setDataGuitars(res.data)
            console.log(res)
        })

    }, [])

    return (
        <div>
            { dataGuitars && <CategoriesMain title='Guitares électriques' data={dataGuitars}/> }
            { !dataGuitars && <Loader /> }
        </div>
    );
};

export default Electriques;