import React, { useState, useEffect } from 'react';

//Api
import { getCoin } from '../services/api';

const Landing = () => {

    const[coin, setCoin] = useState({});
    const[search, setSearch] = useState("");

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            setCoin(data);
        }
        fetchAPI();
    }, []);

    const changeHandler = (event) => {
        setSearch(event.target.value);
    }

    return (
        <>
        <input type="text" value={search} onChange={changeHandler} />
        </>
    );
};

export default Landing;