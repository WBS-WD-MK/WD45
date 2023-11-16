const Form = () => {
  return (
    <div className="block">
      <form>
        <fieldset>
          <legend>
            <h3>Add a To-do</h3>
          </legend>
          <div>
            <label htmlFor="title">To Do</label>
            <input name="title" type="text" placeholder="To Do" />
          </div>
          <div>
            <label htmlFor="deadline">Deadline</label>
            <input name="deadline" type="date" />
          </div>
          <div>
            <label>Priority?</label>
            <div>
              <label htmlFor="low">low</label>
              <input id="low" name="priority" type="radio" value="low" />
            </div>
            <div>
              <label htmlFor="medium">medium</label>
              <input id="medium" name="priority" type="radio" value="medium" />
            </div>
            <div>
              <label htmlFor="hard">high</label>
              <input id="hard" name="priority" type="radio" value="high" />
            </div>
          </div>
          <button>Add</button>
        </fieldset>
      </form>
    </div>
  );
};
export default Form;
