import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch('https://silver-guide-wprj4xrvq642vj4x-8000.app.github.dev/api/leaderboard')
      .then(response => response.json())
      .then(data => setLeaders(data))
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      <ul>
        {leaders.map(leader => (
          <li key={leader.id}>{leader.name} - {leader.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
