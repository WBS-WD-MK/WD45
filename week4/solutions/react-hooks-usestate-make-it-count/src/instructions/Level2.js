const Level2 = () => {
  return (
    <>
      <h4>One State for multiple components</h4>
      <ul>
        <li>
          Create 2 extra buttons for the page (not for each counter) and call it{' '}
          <span className="highlight">Increase all</span> and{' '}
          <span className="highlight">Decrease all</span>.
        </li>
        <li>
          As the button name suggests, clicking on{' '}
          <span className="highlight">Increase all</span> will increase the
          count number by 1 for <b>all counters</b>.
        </li>
        <li>
          Clicking on <span className="highlight">Decrease all</span> will
          decrease the count number by 1 for <b>all counters</b>.
        </li>
      </ul>
    </>
  );
};

export default Level2;
