const Level1 = () => {
  return (
    <>
      <h4>Create your first component</h4>
      <ul>
        <li>
          Analyze the return of the <b>App</b> component. You can see there is a
          lot of code in there and it looks quite lengthy and repetitive. Let's
          chop it down so it is easier to read:
          <ul>
            <li>
              To make your file structure easier to navigate, create a folder
              named <i>components</i> inside the <i>src</i> folder. Any
              component files you create should be kept there.
            </li>
            <li>
              Create a new component named <b>WreckshipShelter</b>, and transfer
              all the information that is currently <i>inside</i> the div (with
              a className of 'block') under <b>Instructions</b> in <b>App.js</b>
              .
            </li>
            <li>
              In <b>App.js</b>, render this new component you just created,
              below the <b>Instructions</b> component
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Level1;
