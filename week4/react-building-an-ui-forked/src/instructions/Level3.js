const Level3 = () => {
  return (
    <>
      <h4>Injecting JS into JSX</h4>
      <ul>
        <li>
          Our code is way tidier, but our content is hardcoded. Our shelter has
          more animals, and they come and go every day! Therefore, our UI has to
          display data programatically. In <b>App.js</b> you were given two
          arrays of names, one for cats and one for dogs, and a function to
          determine the age of an animal randomly. Feel free to move them to
          different files.
          <ul>
            <li>
              Create a card for each animal and inject their <b>names</b> in
              your JSX, instead of hard-coding them.
            </li>
            <li>
              Use the function <b>age</b> to get a random age for each animal
              and inject it into the description.
              <ul>
                <li>
                  The description should be at least{" "}
                  <i>
                    "-Name of animal- is a loving companion who is -age of
                    animal- years old. Take it home!".
                  </i>{" "}
                  You can add more to the description if you like!
                </li>
              </ul>
            </li>
            <li>
              In the <b>assets</b> folder there are 6 pictures. Use them as the
              source for your images instead of URLs.
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Level3;
