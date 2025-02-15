import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SinglePost() {
  const params = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);

  return (
    <>
      <h2>{post?.title}</h2>
      <div>{post?.body}</div>
    </>
  );
}

export default SinglePost;
