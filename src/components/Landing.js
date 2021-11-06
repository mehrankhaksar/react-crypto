import React, { useState, useEffect } from "react";
import Coin from "./Coin";
import styles from "./Landing.module.css";

//API
import { getCoin } from "../services/api";
import Loading from "./Loading";

const Landing = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoin] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      setCoin(data);
      setLoading(false);
    };

    fetchAPI();
  }, []);

  const changeHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchedCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        className={styles.searchInput}
        type="text"
        value={search}
        placeholder="Search..."
        onChange={changeHandler}
      />
      <ul className={styles.coinsContainer}>
        {loading ? (
          <Loading />
        ) : (
          searchedCoins.map((coin) => <Coin key={coin.id} data={coin} />)
        )}
      </ul>
    </>
  );
};

export default Landing;
