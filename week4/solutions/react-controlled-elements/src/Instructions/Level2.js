const Level2 = () => {
  return (
    <>
      <h4>Storing todos in state</h4>
      <ul>
        <li>
          In <b>App.js</b> you were given a state, <i>todos</i>. The
          DisplayToDos component is already wired up with the todos state, and
          your Form only has to alter the todo state by adding todo objects.
          Pass the <i>setTodos</i> state setter as props to the Form. Check the
          example entry in the provided state!
        </li>
        <li>
          Listen to the <b>submit</b> event of the form, and:
          <ul>
            <li>
              <b>If any field is empty</b>, show an alert with the message
              "Please fill all fields".
            </li>
            <li>
              <b>If all the fields are filled</b>, add the <b>new to-do</b> as
              an object to the <b>todos</b> state:
              <ul>
                <li>
                  This object has to have the properties <b>"id"</b>,{" "}
                  <b>"title"</b>, <b>"deadline"</b>, <b>"priority"</b> and{" "}
                  <b>"done"</b>. The "done" property should have a initial value
                  of <i>false</i>
                </li>
                <li>
                  <span role="img" aria-label="Warning icon">
                    ⚠️
                  </span>
                  Make sure to not delete any previous value of the array when
                  storing a new to-do!
                  <span role="img" aria-label="Warning icon">
                    ⚠️
                  </span>
                </li>
                <li>
                  For better user experience, remember to <b>reset the form</b>{" "}
                  to its original state after submission.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Level2;
