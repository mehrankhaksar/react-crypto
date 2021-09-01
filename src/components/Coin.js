import React from 'react';
import styles from './Coin.module.css';

const Coin = (props) => {
    const{image, name, symbol, current_price, price_change_percentage_24h, market_cap} = props.data;
    return (
        <li className={styles.coinContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={image} alt="Coin" />
            </div>
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol}</span>
            <span className={styles.current_price}>{current_price}</span>
            <span className={`${styles.price_change} ${(price_change_percentage_24h > 0) ? styles.green_price_change : styles.red_price_change}`}>{price_change_percentage_24h.toFixed(2)}</span>
            <span className={styles.market_cap}>{market_cap}</span>
        </li>
    );
};

export default Coin;