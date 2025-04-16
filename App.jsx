import React from "react";
import TopUsers from "./components/TopUsers";
import TrendingPosts from "./components/TrendingPosts";
import RealTimeFeed from "./components/RealTimeFeed";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 grid md:grid-cols-3 gap-6">
      <div className="col-span-1">
        <TopUsers />
      </div>
      <div className="col-span-1">
        <TrendingPosts />
      </div>
      <div className="col-span-1">
        <RealTimeFeed />
      </div>
    </div>
  );
}

export default App;

