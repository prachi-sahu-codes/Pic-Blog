import { useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new resolutions",
      body: "lorem ipsum...",
      author: "Baifern",
      id: 1,
    },
    {
      title: "Welcome party!",
      body: "lorem ipsum...",
      author: "Prachi",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "Pimchak",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <Bloglist
        blogs={blogs}
        title={"All Blogs!"}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
