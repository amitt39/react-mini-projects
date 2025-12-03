function RefreshIndicator(props) {
  return (
    <div>
      {props.time === null ? (
        <p>Never Updated</p>
      ) : (
        <span>Last Updated: {props.time.toLocaleTimeString()}</span>
      )}
    </div>
  );
}

export default RefreshIndicator;
