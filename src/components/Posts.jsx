import React, { useContext } from "react";
import { getPosts } from "../context/blog/BlogActions";
import BlogContext from "../context/blog/BlogContext";

function Posts() {
  const { posts, dispatch } = useContext(BlogContext);

  const handlePosts = async () => {
    const posts = await getPosts();
    dispatch({
      type: "GET_POSTS",
      payload: posts,
    });
  };
  return (
    <div>
      <button onClick={handlePosts}>GET POSTS</button>
      {posts.length > 0 && (
        <div>
          {posts.map((post) => (
            <p>post.title</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Posts;
