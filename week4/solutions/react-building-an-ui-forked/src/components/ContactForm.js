const ContactForm = () => {
  return (
    <section className="formContainer">
      <h2>Do you want to adopt?</h2>
      <form className="form">
        <div>
          <label>Your Name</label>
          <input type="text" name="name" id="name" placeholder="Your Name" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div>
          <label>Pet</label>
          <input type="text" name="pet" id="pet" placeholder="Pet's name" />
        </div>
        <div className="textarea">
          <label>Who are you?</label>
          <textarea
            type="text"
            name="animal-name"
            id="animal-name"
            placeholder="Let us know a bit about yourself and your situation,
        and we will get back to you as soon as possible to start the
        adoption process!"
            rows="7"
            cols="50"
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;
