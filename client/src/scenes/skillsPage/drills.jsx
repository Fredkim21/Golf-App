import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DrillsPage = () => {
  const { id } = useParams();
  const [drill, setDrill] = useState(null);

  useEffect(() => {
    const fetchDrill = async () => {
      const response = await fetch();
      const data = await response.json();
      setDrill(data);
    }

    fetchDrill();
  }, []);

  if (!drill) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{drill.title}</h1>
      <p>{drill.description}</p>
      <p>Category: {drill.category}</p>
      <p>Skill Level: {drill.skillLevel}</p>
      <p>Instructions: {drill.instructions}</p>
    </div>
  );
}

export default DrillsPage;