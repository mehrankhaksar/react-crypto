import React, { useState, useEffect } from 'react';

//Api
import { getCoin } from '../services/api';

const Landing = () => {

    const[coin, setCoin] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            setCoin(data);
        }
        fetchAPI();
    }, []);

    return (
        <div>
            
        </div>
    );
};

export default Landing;