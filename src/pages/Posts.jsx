import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
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
    <div className="posts-page">
      <h3>Recent Posts:</h3>{" "}
      <div className="posts-container">
        {posts.length > 0 &&
          posts.map((post) => (
            <Link to={`/posts/${post._id}`}>
              <PostPreview post={post} key={post._id} />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Posts;
