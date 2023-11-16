const Level1 = () => {
  return (
    <>
      <h4>Handling the counters</h4>
      <ul>
        <li>
          Display 3 counters with each of them having a{' '}
          <span className="highlight">+</span> and a{' '}
          <span className="highlight">-</span> button (you can create a new
          component if you wish).
        </li>
        <li>
          On each counter:
          <ul>
            <li>
              Clicking on <span className="highlight">+</span> will increase the
              count number by 1 on that <b>single counter</b>
            </li>
            <li>
              Clicking on <span className="highlight">-</span> will decrease the
              count number by 1 on that <b>single counter</b>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Level1;
