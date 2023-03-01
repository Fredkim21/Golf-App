import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DrillsPage = () => {
  const { id } = useParams();
  const [drill, setDrill] = useState(null);

  useEffect(() => {
    const fetchDrill = async () => {
      try {
        const response = await fetch(`/drills/${id}`);
        const data = await response.json();
        setDrill(data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchDrill();
  }, [id]);

  if (!drill) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{drill.name}</h1>
      <p>Category: {drill.category}</p>
      <p>Skill Level: {drill.skillLevel}</p>
      <p>{drill.drill_info}</p>
    </div>
  );
};

export default DrillsPage;
