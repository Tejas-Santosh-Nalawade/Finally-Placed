import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Contests = () => {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await axios.get('https://api.codehunt.cc/contests');
        setContests(response.data);
      } catch (error) {
        console.error('Error fetching contests:', error);
      }
    };

    fetchContests();
  }, []);

  const handleNotifyMe = (contest) => {
    // Implement notification logic here
    alert(`You will be notified about ${contest.name}`);
  };

  return (
    <div className="contests-container">
      {contests.map((contest) => (
        <div key={contest.id} className="contest-card">
          <img src={contest.platformLogo} alt={`${contest.platform} logo`} className="platform-logo" />
          <h3>{contest.name}</h3>
          <p>Starts in: {/* Countdown Timer Component */}</p>
          <button onClick={() => handleNotifyMe(contest)}>Notify Me</button>
        </div>
      ))}
    </div>
  );
};

export default Contests;
