const Bloglist = ({ blogs, title, handleDelete }) => {
  //   const blogs = props.blogs;
  //   const title = props.title;
  // note - if using above 2 statments then in bracket will be (props) instead of ({blogs, title})
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button
            onClick={() => {
              console.log("hello");
              handleDelete(blog.id);
            }}
          >
            delete blog
          </button>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
