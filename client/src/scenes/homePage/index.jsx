import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/navbar';

const HomePage = () => {
  const [drills, setDrills] = useState([
    { id: 1, title: 'Putting drill 1' },
    { id: 2, title: 'Driving drill 1' },
    { id: 3, title: 'Chipping drill 1' },
  ]);

  // useEffect(() => {
  //   // fetch drills from database
  //   const fetchDrills = async () => {
  //     const response = await fetch(/* fetch call to db goes in */);
  //     const data = await response.json();
  //     console.log(data);
  //     setDrills(data);
  //   };
  // 
  //   fetchDrills();
  // }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <h1>homepage</h1>
      <ul>
        {drills.map(drill => (
          <li key={drill.id}>{drill.title}</li>
        ))}
      </ul>
    </div>)

}


export default HomePage;