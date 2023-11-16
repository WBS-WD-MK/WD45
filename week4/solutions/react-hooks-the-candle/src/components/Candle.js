const Candle = () => {
  return (
    <div className="block">
      <div>
        <button>Make candle smaller</button>
      </div>
      <div className="block candleContainer">
        <div className="candle">
          <div className="flame">
            <div className="shadows" />
            <div className="top" />
            <div className="middle" />
            <div className="bottom" />
          </div>
          <div className="wick" />
          <div className="wax" />
        </div>
      </div>
    </div>
  );
};
export default Candle;
