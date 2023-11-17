import { useState, useEffect } from "react";
const Candle = () => {
  const [height, setHeight] = useState(80);
  const [click, setClick] = useState(false);
  const [intervalId, setintervalId] = useState(null);
  useEffect(() => {
    const id = setInterval(() => {
      console.log("WHAAT WHATTT");
      changeHeight();
    }, 2000);
    setintervalId(id);
    return () => {
      clearInterval(intervalId);
    };
  }, [click]);
  const handleClick = () => {
    changeHeight();
    setClick(!click);
  };
  const changeHeight = (num = 10) => {
    setHeight((prevHeight) => prevHeight - num);
  };
  const handleCandleReplace = () => {
    setHeight(80);
    clearInterval(intervalId);
    setintervalId(null);
  };
  return (
    <div className="block">
      <div>
        {height > 10 ? (
          <button onClick={handleClick}>Make candle smaller</button>
        ) : (
          <button onClick={handleCandleReplace}>Replace Candle</button>
        )}
      </div>
      <div className="block candleContainer">
        {height > 10 && (
          <div className="candle" style={{ height: `${height}%` }}>
            <div className="flame">
              <div className="shadows" />
              <div className="top" />
              <div className="middle" />
              <div className="bottom" />
            </div>
            <div className="wick" />
            <div className="wax" />
          </div>
        )}
      </div>
    </div>
  );
};
export default Candle;
