const Bonus = () => {
  return (
    <>
      <h3>BONUS SECTION</h3>
      <h4>Creating reusable components</h4>
      <ul>
        <li>
          Often, you will find sections of UI that repeat themselves - a product
          card, pop up elements, counters, etc. Repeated structures can be{" "}
          <b>packed</b> in a component that describes a single instance of that
          structure, that can then be <b>repeatedly</b> called.
          <ul>
            <li>
              Identify the repeated structure in our shelter page. Create a
              component for a <b>single instance</b> of this structure, and call
              it wherever and as many times as needed.
            </li>
            <li>
              This component will need to be given data programmatically, to
              display different content in each of these structures. For each
              call of this component, pass a different name in the array as{" "}
              <b>props</b>.
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Bonus;
