const CreatePost = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("WHAAAAT");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="UserName" name="username" />
      <textarea
        cols="50"
        rows="10"
        placeholder="Blog post"
        name="blogPost"
      ></textarea>
      <button>Post!</button>
    </form>
  );
};

export default CreatePost;
