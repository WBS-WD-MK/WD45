const Level3 = () => {
  return (
    <>
      <h4>Passing data onwards</h4>
      <ul>
        <li>
          User.js doesn't need to display all data from the user, but the{" "}
          <b>Contact</b> component needs the user's details too! Pass the
          relevant properties of the user further to the Contact component and
          display it.
        </li>
      </ul>
    </>
  );
};

export default Level3;
