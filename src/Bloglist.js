import { Link } from "react-router-dom";

const Bloglist = ({ blogs, title }) => {
  //   const blogs = props.blogs;
  //   const title = props.title;
  // note - if using above 2 statments then in bracket will be (props) instead of ({blogs, title})
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
          {/* <button
            onClick={() => {
              handleDelete(blog.id);
            }}
          >
            delete blog
          </button>
          
          note: before uuncommenting write handleDelete in top along side {blogs, title, handleDelete} */}
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
