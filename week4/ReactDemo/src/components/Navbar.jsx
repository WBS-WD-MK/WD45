const Navbar = props => {
  const handleClick = e => {
    alert('hello');
  };
  return <div onClick={handleClick}>Hello {props.username}</div>;
};

export default Navbar;
