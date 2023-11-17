const Bonus = () => {
  return (
    <>
      <h3>BONUS SECTION</h3>
      <h4>React and HTML Forms</h4>
      <ul>
        <li>
          Whoop, something strange might have happened when submitting the form
          - the page refreshed! HTML Forms <b>redirect</b> the page by default.
          Make sure to <b>prevent</b> the form's default behaviour upon submit.
        </li>
      </ul>
      <h4>Events with props</h4>
      <ul>
        <li>
          In <b>App.js</b>, pass two props to the SuperButton component,{" "}
          <i>text</i> and <i>alertText</i>. Each should contain a string, with a
          value of your choice.
          <ul>
            <li>
              The content of the button should be the value of the <i>text</i>{" "}
              prop.
            </li>
            <li>
              The alert triggered upon click should display the value of the{" "}
              <i>alertText</i> prop.
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Bonus;
