import { useEffect, useState } from "react";
import "./App.css";
import CryptoList from "./components/CryptoList";
import Header from "./components/Header";
import RefreshIndicator from "./components/RefreshIndicator";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [cryptoData, setCryptoData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(null);

  async function fetchCryptoData() {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&x_cg_demo_api_key=${apiKey}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setCryptoData(data);
      setLoading(false);
      setLastUpdate(new Date());
    } catch (err) {
      alert(err.message);
    }
  }

  useEffect(() => {
    fetchCryptoData();
    const intervalId = setInterval(() => {
      fetchCryptoData();
    }, 30000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div>
        <Header title="Cryto Price Tracker" />
        <RefreshIndicator time={lastUpdate} />
        {isLoading && <p>Loading...</p>}
        {!isLoading && (
          <p>
            <CryptoList cryptos={cryptoData} />
          </p>
        )}
      </div>
    </>
  );
}

export default App;
