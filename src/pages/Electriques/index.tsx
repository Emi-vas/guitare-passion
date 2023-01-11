import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoriesMain from '../../components/CategoriesMain';
import { reqElectricsGuitars } from '../../assets/req';
import { Guitar } from '../../assets/types';
import Loader from '../../components/Loader';
import { useDispatch } from 'react-redux';
import { setFilterList } from '../../redux/filter/filter.action';

const Electriques = () => {
    const dispatch = useDispatch()
    const [dataGuitars, setDataGuitars] = useState<undefined | Guitar[]>()
    const listFilter = ["rock", "hard-rock", "metal", "jazz", "funk", "raggae"]

    useEffect(() => {
        dispatch(setFilterList(listFilter))

        axios
        .get(reqElectricsGuitars)
        .then(res => {
            setDataGuitars(res.data)
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