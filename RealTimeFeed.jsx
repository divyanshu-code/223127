import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://your-server-url");

const RealTimeFeed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    socket.on("newPost", (post) => {
      setFeed(prev => [post, ...prev]);
    });

    return () => socket.off("newPost");
  }, []);

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-2">Live Feed</h2>
      <ul>
        {feed.map((item, idx) => (
          <li key={idx} className="py-2">
            <strong>{item.user}</strong>: {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimeFeed;
