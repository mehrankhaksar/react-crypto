import React, { useState, useEffect } from 'react';
import Coin from './Coin';

//Api
import { getCoin } from '../services/api';

const Landing = () => {

    const[coins, setCoin] = useState([]);
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
        <ul>
            {
                coins.map((coin) => <Coin key={coin.id} data={coin} />)
            }
        </ul>
        </>
    );
};

export default Landing;