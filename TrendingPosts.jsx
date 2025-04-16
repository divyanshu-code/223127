import React, { useEffect, useState } from "react";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/trending-posts") 
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-2">Trending Posts</h2>
      <ul>
        {posts.map((post, idx) => (
          <li key={idx} className="py-2">
            <strong>{post.user}</strong>: {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingPosts;
