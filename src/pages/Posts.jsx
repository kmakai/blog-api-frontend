import React, { useContext, useEffect } from "react";
import { getPosts } from "../context/blog/BlogActions";
import BlogContext from "../context/blog/BlogContext";
import PostPreview from "../components/PostPreview";

function Posts() {
  const { posts, dispatch } = useContext(BlogContext);

  useEffect(() => {
    const loadPosts = async () => {
      const posts = await getPosts();
      dispatch({
        type: "GET_POSTS",
        payload: posts,
      });
    };

    loadPosts();
  }, [dispatch]);

  if (!posts) return <h1>loading...</h1>;
  return (
    <div>
      {posts.length > 0 && (
        <div>
          {posts.map((post) => (
            <PostPreview post={post} key={post._id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Posts;
