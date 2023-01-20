import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs?_sort=likes&_order=desc"); // after ? is for sorting it acc to likes

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <Bloglist
          blogs={blogs}
          // handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Home;
