const Level1 = () => {
  return (
    <>
      <h4>Toggling the light</h4>
      <ul>
        <li>
          In the <b>App</b> component, create a state that will keep track of
          whether the lightbulb is turned on or not.
        </li>
        <li>
          Add an event handler that fires when the{' '}
          <span className="highlight">Turn me on!</span> button is clicked. The
          event handler should change the lightbulb's state from on to off.
        </li>
        <li>
          Using the state as a toggler, conditionally change the className of
          the lightbulb's holding div from{' '}
          <span className="highlight">'block'</span> (when turned off) to{' '}
          <span className="highlight">'block night'</span> (when turned on).
        </li>
        <li>
          You can also use the state to conditionally change the button from{' '}
          <span className="highlight">Turn me on!</span> to{' '}
          <span className="highlight">Turn me off!</span> and vice versa.
        </li>
      </ul>
    </>
  );
};

export default Level1;
