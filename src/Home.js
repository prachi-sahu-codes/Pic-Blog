import { useState } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  // let uri = "http://localhost:8000/blogs?_sort=likes&_order=desc";
  const [input, setInput] = useState("");
  const [uri, setUri] = useState("");

  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs?_sort=likes&_order=desc" + uri); // after ? is for sorting it acc to likes

  const handleSearch = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="home">
      <form className="search">
        <input
          type="text"
          name="term"
          value={input}
          placeholder="Search term"
          onChange={handleSearch}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setUri(`&q=${input}`);
          }}
        >
          Search
        </button>
      </form>
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
