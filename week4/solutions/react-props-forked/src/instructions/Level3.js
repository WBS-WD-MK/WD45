const Level3 = () => {
  return (
    <>
      <h4>Complex props</h4>
      <ul>
        <li>
          Create another component and call it inside App.js. You have the
          naming rights this time as well 😉
        </li>
        <li>
          This time, you get to display whatever you like in the component.
        </li>
        <li>
          Back in the <b>App</b> component, create a function that logs{' '}
          <span className="highlight">'Piece of cake'</span> to the console.
        </li>
        <li>Pass this function as props to your new component.</li>
        <li>
          In your new component, extract the function and call it within the new
          component.
        </li>
        <li>
          Check your console. If you see{' '}
          <span className="highlight">'Piece of cake'</span> logged onto the
          console, you've made it! 🥳
        </li>
      </ul>
    </>
  );
};

export default Level3;
