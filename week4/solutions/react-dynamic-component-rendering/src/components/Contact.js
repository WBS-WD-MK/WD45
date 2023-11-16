const Contact = ({ contact }) => {
  const { address, email, phone } = contact;

  return (
    <>
      <p>Address: {address}</p>
      <p>Email: {email}</p>
      <p>Phone number: {phone}</p>
    </>
  );
};

export default Contact;
