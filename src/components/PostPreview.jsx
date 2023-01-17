import React from "react";

function postPreview({ post }) {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>
        Posted: {post.createdAt.split("T")[0]} by: {post.author.name}{" "}
      </p>
    </div>
  );
}

export default postPreview;
