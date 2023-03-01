import React, { useState, useEffect, PureComponent } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const ProfilePage = ({ profileId }) => {
  const [profile, setProfile] = useState(null);

  // fetch profile data from API
  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     const response = await fetch(
  //       `/profiles/${profileId}`
  //     );
  //     const data = await response.json();
  //     setProfile(data);
  //   };

  //   fetchProfile();
  // }, [profileId]);

  // if (!profile) {
  //   return <div>Loading...</div>;
  // }

  // data fom fetched data
  // const values = [
  //   { category: 'Putting', value: profile.putting },
  //   { category: 'Driver', value: profile.driver },
  //   { category: 'Long Irons', value: profile.longIrons },
  //   { category: 'Short Irons', value: profile.shortIrons },
  //   { category: 'Chipping', value: profile.chipping },
  //   { category: 'Bunker', value: profile.bunker },
  // ];

  // dummy data
  const values = [
    { category: 'Putting', value: 70 },
    { category: 'Driver', value: 50 },
    { category: 'Long Irons', value: 35 },
    { category: 'Short Irons', value: 60 },
    { category: 'Chipping', value: 45 },
    { category: 'Bunker', value: 30 },
  ];


  return (
    <div style={{ width: '1000px' }}>
      <h1>ProfilePage</h1>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={values}>
          <PolarGrid />
          <PolarAngleAxis dataKey="category" tick={{ fontSize: 14 }} />
          {/* <PolarRadiusAxis angle={30} domain={[0, 100]} /> */}
          <Radar name="Skill" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.8} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProfilePage;
