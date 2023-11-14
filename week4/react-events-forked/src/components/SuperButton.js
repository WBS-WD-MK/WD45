const SuperButton = ({ text, alertText }) => {
  const clickHandler = () => {
    alert(alertText);
  };
  return <button onClick={clickHandler}>{text}</button>;
};

export default SuperButton;
