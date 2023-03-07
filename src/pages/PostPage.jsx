import React from "react";
import { useContext, useEffect } from "react";
import BlogContext from "../context/blog/BlogContext";
import { useParams } from "react-router-dom";
import { getPost, getPostComments } from "../context/blog/BlogActions";
import Comments from "../components/Comments";
import CommentForm from "../components/CommentForm";

function PostPage() {
  const { post, comments, dispatch, user } = useContext(BlogContext);
  const { postId } = useParams();

  useEffect(() => {
    const loadPost = async () => {
      const post = user
        ? await getPost(postId, user.token)
        : await getPost(postId);
      const comments = await getPostComments(postId);
      dispatch({
        type: "GET_POST",
        payload: post,
      });

      dispatch({
        type: "GET_COMMENTS",
        payload: comments,
      });
    };

    loadPost();
  }, [dispatch, postId, user]);

  if (post === null) return <p>Loading...</p>;

  return (
    <div className="single-post-page">
      <div className="post">
        <h2>{post.title}</h2>
        <p>
          Posted: {post.createdAt.split("T")[0]} by: {post.author.name}{" "}
        </p>
        <p>{post.text}</p>
      </div>
      {user && <CommentForm />}
      <h3>Comments:</h3>
      <Comments comments={comments} />
    </div>
  );
}

export default PostPage;
