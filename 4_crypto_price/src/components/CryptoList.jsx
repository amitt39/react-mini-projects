import CryptoCard from "./CryptoCard";

function CryptoList(props) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap:"1rem", justifyContent:"center", width:"700px" }}>
      {props.cryptos.map((coin) => {
        return <CryptoCard key={coin.id} coin={coin} />;
      })}
    </div>
  );
}

export default CryptoList;
