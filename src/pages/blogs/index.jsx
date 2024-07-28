import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Blog() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setPost(json));
  });

  return (
    <>
      <h2>eksternal post</h2>
      {post.map((item, index) => (
        <div key={index}>
          {" "}
          <Link to={`/blog/${item.id}`}> - {item.title}</Link>
        </div>
      ))}
    </>
  );
}

export default Blog;
