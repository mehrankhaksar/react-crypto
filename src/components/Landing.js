import React, { useEffect } from 'react';

//Api
import { getCoin } from '../services/api';

const Landing = () => {

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
        }
        fetchAPI();
    }, []);

    return (
        <div>
            
        </div>
    );
};

export default Landing;