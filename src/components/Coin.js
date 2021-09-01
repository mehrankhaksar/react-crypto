import React from 'react';

const Coin = (props) => {
    const{image, name, symbol, current_price, market_cap_change_24h, market_cap} = props.data;
    return (
        <li>
            <div>
                <img src={image} alt="Coin" />
                <span>{name}</span>
            </div>
            <span>{symbol}</span>
            <span>{current_price}</span>
            <span>{market_cap_change_24h}</span>
            <span>{market_cap}</span>
        </li>
    );
};

export default Coin;