import React, { useEffect, useState } from "react";

const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/top-users") 
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-2">Top Users</h2>
      <ul>
        {users.map((user, idx) => (
          <li key={idx} className="border-b py-2">
            {user.name} - {user.followers} followers
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
