function CryptoCard(props) {
  return (
    <>
      <div style={{display:"flex", flexDirection:"column", backgroundColor:"#1c1c1c", padding:"2rem", borderRadius:"8px"}}>
        <div style={{fontSize:"20px"}}>{props.coin.name}</div>
        <div style={{fontSize:"14px"}}>{props.coin.symbol}</div>
        <div style={{fontSize:"18px"}}>{props.coin.current_price}</div>
      </div>
    </>
  );
}

export default CryptoCard;
