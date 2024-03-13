// components/MentorList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MentorList = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const res = await axios.get('/api/mentors');
        setMentors(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMentors();
  }, []);

  return (
    <div>
      <h2>Select a Mentor:</h2>
      <form>
        {mentors.map(mentor => (
          <div key={mentor.mentorId}>
            <input type="checkbox" id={mentor.mentorId} name={mentor.mentorName} />
            <label htmlFor={mentor.mentorId}>{mentor.mentorName}</label>
          </div>
        ))}
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default MentorList;
