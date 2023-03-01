import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SkillsPage = () => {
  const [drills, setDrills] = useState([]);

  useEffect(() => {
    // fetch drills data from SQL database
    const fetchDrills = async () => {
      const response = await fetch('https://api.example.com/drills');
      const data = await response.json();
      setDrills(data);
    };

    fetchDrills();
  }, []);

  // sort the drills by category and skill level
  const sortedDrills = drills.sort((a, b) => {
    if (a.category < b.category) {
      return -1;
    }
    if (a.category > b.category) {
      return 1;
    }
    if (a.skillLevel < b.skillLevel) {
      return -1;
    }
    if (a.skillLevel > b.skillLevel) {
      return 1;
    }
    return 0;
  });

  // group the drills by category and skill level
  const groupedDrills = sortedDrills.reduce((acc, drill) => {
    if (!acc[drill.category]) {
      acc[drill.category] = {};
    }
    if (!acc[drill.category][drill.skillLevel]) {
      acc[drill.category][drill.skillLevel] = [];
    }
    acc[drill.category][drill.skillLevel].push(drill);
    return acc;
  }, {});

  return (
    <div>
    <h1>Drill List</h1>
    {Object.keys(groupedDrills).map(category => (
      <div key={category}>
        <h2>{category}</h2>
        {Object.keys(groupedDrills[category]).map(skillLevel => (
          <div key={skillLevel}>
            <h3>{skillLevel}</h3>
            <ul>
              {groupedDrills[category][skillLevel].map(drill => (
                <li key={drill.id}>
                  <Link to={`/drills/${drill.id}`}>{drill.title}</Link>
                  </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ))}
  </div>
);

}
export default SkillsPage;