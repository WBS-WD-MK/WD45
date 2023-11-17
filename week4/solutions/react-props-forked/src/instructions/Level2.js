const Level2 = () => {
  return (
    <>
      <h4>Multiple props</h4>
      <ul>
        <li>
          Create a new component <i>(inside the components folder)</i> and give
          it any name you like. Call this component inside App.js.
        </li>
        <li>
          Your new component should display the text:{' '}
          <span className="highlight">'The total is: '</span>
        </li>
        <li>
          Pass two props to your new component, each containing a number. You
          can decide on the names for your props.
        </li>
        <li>
          Now in your new component, extract the two props and display the sum
          of the two numbers alongside the text you entered in the second step.
        </li>
      </ul>
    </>
  );
};

export default Level2;
