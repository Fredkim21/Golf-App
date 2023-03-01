import React, { useState, useEffect } from "react";
import { ResponsiveRadar } from "@nivo/radar";

const ProfilePage = ({ profileId }) => {
  const [profile, setProfile] = useState(null);

  // fetch profile data from API
  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     const response = await fetch(
  //       `https://api.example.com/profiles/${profileId}`
  //     );
  //     const data = await response.json();
  //     setProfile(data);
  //   };

  //   fetchProfile();
  // }, [profileId]);

  // if (!profile) {
  //   return <div>Loading...</div>;
  // }

  // // data fom fetched data
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
  <div>
    <h1>ProfilePage</h1>
    <ResponsiveRadar 
      data = {values}
      keys={[ 'value' ]}
      indexBy="category"
      maxValue={100}
      gridShape="linear"
      colors={{ scheme: 'dark2' }}
    />
  </div>
  )
};

export default ProfilePage;
