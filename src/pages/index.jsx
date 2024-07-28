import postData from "../post.json";
import Article from "../components/article";
import Search from "../components/search";
import { useState } from "react";
function Home() {
  const [post, setPost] = useState(postData);
  const [totalPost, setTotalPost] = useState(0);

  const onSearch = (value) => {
    const fillterSearch = postData.filter((item) => item.title.includes(value));
    setPost(fillterSearch);
    setTotalPost(fillterSearch.length);
  };

  return (
    <>
      <h1>Simple blog</h1>
      <Search onSearch={onSearch} totalPost={totalPost} />
      {post.map((blog) => (
        <Article
          title={blog.title}
          tag={blog.tag}
          date={blog.date}
          status={blog.status}
        />
      ))}
    </>
  );
}

export default Home;
