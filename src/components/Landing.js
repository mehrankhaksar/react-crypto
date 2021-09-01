import React, { useState, useEffect } from 'react';
import styles from './Landing.module.css';
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

    const searchedCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
        <input className={styles.searchInput} type="text" value={search} placeholder="Search..." onChange={changeHandler} />
        <ul className={styles.coinsContainer}>
            {
                searchedCoins.map((coin) => <Coin key={coin.id} data={coin} />)
            }
        </ul>
        </>
    );
};

export default Landing;